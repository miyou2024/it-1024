import { ApiExtraModels, ApiOkResponse, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { applyDecorators, Type } from '@nestjs/common';

export class CommonSwaggerDto {}

export class PaginatedDto<TData> {
  @ApiProperty({
    description: '列表数据',
  })
  list: TData[];
}


export const ApiCommonResponsePagination = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiExtraModels(model),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginatedDto) },
          {
            properties: {
              RequestId: {
                default: '',
                description: '本次请求唯一ID',
                type: 'string',
              },
              code: {
                default: 200,
                description: '后端状态码',
                type: 'number',
              },
              msg: {
                default: '操作成功',
                description: '后端返回消息',
                type: 'string',
              },
              message: {
                default: '操作成功',
                description: '后端返回消息',
                type: 'string',
              },
              data: {
                type: 'object',
                properties: {
                  count: {
                    default: 100,
                    description: '列表数量',
                    type: 'number',
                  },
                  page: {
                    default: 1,
                    description: '页码',
                    type: 'number',
                  },
                  pageSize: {
                    default: 10,
                    description: '每页数量',
                    type: 'number',
                  },
                  list: {
                    type: 'array',
                    description: '列表数组',
                    items: { $ref: getSchemaPath(model) },
                  },
                },
              },
            },
          },
        ],
      },
    }),
  );
};

export const ApiCommonResponseDetail = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiExtraModels(model),
    ApiOkResponse({
      schema: {
        allOf: [
          {
            properties: {
              RequestId: {
                default: '',
                description: '本次请求唯一ID',
                type: 'string',
              },
              code: {
                default: 200,
                description: '后端状态码',
                type: 'number',
              },
              msg: {
                default: '操作成功',
                description: '后端返回消息',
                type: 'string',
              },
              message: {
                default: '操作成功',
                description: '后端返回消息',
                type: 'string',
              },
              data: {
                type: 'object',
                description: '对象结构信息',
                $ref: getSchemaPath(model),
              },
            },
          },
        ],
      },
    }),
  );
};
