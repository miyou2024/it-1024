import * as yaml from "js-yaml";
import { readFileSync } from "fs";
import * as cookieParser from "cookie-parser";
import * as bodyParser from 'body-parser';
import { INestApplication, Logger, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ConfigService } from "@nestjs/config";
import * as os from "node:os";

export async function startGlobalApp(app: INestApplication) {

  const configService = app.get(ConfigService);
  const server = configService.get('server') as any;

  app.setGlobalPrefix(`${server.http.prefix}`);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );
  app.use(bodyParser.json({
    limit: `${server.http.body.limit}`
  }));
  app.use(cookieParser());

  const swagger = server.swagger;
  const documentBuilder = new DocumentBuilder()
    .setTitle(`${swagger.title}`)
    .setDescription(`${swagger.description} ${new Date().toLocaleString('zh-Hans-CN')}`)
    .setVersion(`${swagger.version}`)
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup(`${swagger.docPath}`, app, documentFactory, {
    jsonDocumentUrl: swagger.jsonDocumentUrl,
    yamlDocumentUrl: swagger.yamlDocumentUrl,
  });

  await app.listen(server.http.port);

  const ips = getInternalIps();
  console.log('ips', ips);
  const LogMsg = ips.map(ip => {
    return `${swagger.title} ApiDocs: http://${ip}:${server.http.port}${swagger.docPath}  ApiBase: http://${ip}:${server.http.port}${server.http.prefix}`;
  });

  Logger.log(`🚀🚀🚀🚀🚀🚀🚀🚀🚀  \n${LogMsg.join('\n')}`);
}


/**
 * 加载全局配置
 * 该函数接受一个字符串数组作为参数，每个字符串代表一个配置文件的名称
 * 它将遍历每个配置文件名，初始化全局配置，并将配置数据合并到一个目标对象中
 * 最后，返回一个函数，该函数当被调用时，返回合并了所有配置的目标对象
 *
 * @param fileNames 配置文件名数组，用于初始化全局配置
 * @returns 返回一个函数，当调用时，返回合并了所有配置的目标对象
 */
export function loadGlobalConfig(fileNames: string[]) {
  // 初始化一个空对象作为目标对象，用于后续合并配置数据
  let target = {};
  // 遍历配置文件名数组
  for (const fileName of fileNames) {
    // 初始化全局配置，并获取配置数据
    const configData = initGlobalConfig(fileName);
    // 将获取到的配置数据与目标对象进行深度合并
    target = deepMerge(target, configData);
  }
  // 日志输出合并后的目标对象，用于调试（已注释）
  // 返回一个闭包函数，当被调用时，返回合并了所有配置的目标对象
  return () => target;
}


/**
 * 初始化全局配置
 * 该函数通过加载指定名称的YAML文件来初始化全局配置
 * 它首先确定YAML文件的路径，然后读取并解析该文件的内容
 * 配置信息以键值对的形式返回，供应用程序全局使用
 *
 * @param fileName YAML配置文件的名称
 * @returns 返回一个包含配置信息的对象
 */
export function initGlobalConfig(fileName) {
  // 定义YAML配置文件的文件名
  const YAML_CONFIG_FILENAME = fileName;
  // 构造YAML文件的完整路径
  const YAML_FILE_PATH = `${process.env['PWD']}/${YAML_CONFIG_FILENAME}`;
  // 输出YAML文件路径以便调试
  console.info(`YAML_FILE_PATH`, YAML_FILE_PATH);

  // 从YAML文件中读取配置信息并解析
  // 使用fs.readFileSync同步读取文件内容，并使用yaml.load解析YAML格式的数据
  // 返回一个包含配置信息的对象
  return yaml.load(
    readFileSync(YAML_FILE_PATH, 'utf8'),
  ) as Record<string, any>;
}


/**
 * 深度合并两个对象
 * @param target 目标对象，将被源对象的属性合并
 * @param source 源对象，其属性将被合并到目标对象中
 * @returns 返回合并后的目标对象
 */
export function deepMerge(target: Record<string, any>, source: Record<string, any>) {
  // 遍历源对象的所有属性
  for (const key in source) {
    // 确保只处理源对象自身的属性，而不是继承的属性
    if (source.hasOwnProperty(key)) {
      // 如果源对象的属性是一个对象（且不是数组），则进行深度合并
      if (source[key] instanceof Object && !Array.isArray(source[key])) {
        // 如果目标对象中不存在该属性，则在目标对象中创建一个空对象作为该属性
        if (!target[key]) {
          target[key] = {};
        }
        // 递归调用deepMerge函数，深度合并目标对象和源对象的当前属性
        deepMerge(target[key], source[key]);
      } else {
        // 如果源对象的属性不是对象，则直接将该属性及其值复制到目标对象中
        target[key] = source[key];
      }
    }
  }
  // 返回合并后的目标对象
  return target;
}

/**
 * 获取本机所有的非内部IPv4地址
 *
 * 该函数遍历所有网络接口，筛选出IPv4地址，并且排除内部地址（如localhost或私有网络地址），
 * 将剩下的非内部IPv4地址收集到一个数组中并返回这些地址可以用于网络通信、监控或其他目的
 *
 * @returns {string[]} 非内部IPv4地址数组
 */
export function getInternalIps() {
  // 初始化一个空数组，用于存储非内部IPv4地址
  const ips: any[] = [];

  // 获取本机所有网络接口
  const interfaces = os.networkInterfaces();

  // 遍历每个网络接口
  for (const iface of Object.values(interfaces)) {
    // 遍历每个网络配置
    for (const config of iface as any) {
      // 检查当前配置是否为IPv4且不是内部地址
      if (config.family === 'IPv4' && !config.internal) {
        // 将符合条件的IP地址添加到结果数组中
        ips.push(config.address);
      }
    }
  }

  // 返回收集到的非内部IPv4地址数组
  return ips;
}

