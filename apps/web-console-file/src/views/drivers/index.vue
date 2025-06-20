<script setup lang="tsx">
import type { AboutProps } from "./index";
import { message, Space, Select, Input, Checkbox, Tabs, TabPane } from "ant-design-vue";
import { useVbenForm, z } from "#/adapter/form";
import { Page } from "@vben/common-ui";

interface Props extends AboutProps {
}

defineOptions({
  name: "DriversConfig"
});

withDefaults(defineProps<Props>(), {
  description:
    "阿里云-OSS，腾讯云-COS，七牛云-Kodo，又拍云-USS",
  name: "Storage",
  title: "存储配置"
});

const [Form] = useVbenForm({
  // 所有表单项共用，可单独在表单内覆盖
  commonConfig: {
    // 所有表单项
    componentProps: {
      class: "w-full"
    }
  },
  // 提交函数
  handleSubmit: onSubmit,
  // 垂直布局，label和input在不同行，值为 vertical
  // 水平布局，label和input在同一行
  layout: "horizontal",
  schema: [
    {
      // 组件需要在 #/adapter.ts内注册，并加上类型
      component: "Input",
      // 对应组件的参数
      componentProps: {
        placeholder: "请输入"
      },
      // 字段名
      fieldName: "accessKeyId",
      // 界面显示的label
      label: "accessKeyId",
      rules: "required"
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入"
      },
      defaultValue: "",
      fieldName: "accessKeySecret",
      label: "accessKeySecret",
      rules: "required"
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入.例如 blog-cdn"
      },
      fieldName: "bucket",
      label: "bucket",
      rules: "required"
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入.例如 cn-hangzhou"
      },
      fieldName: "region",
      label: "region",
      rules: "required"
    },
    {
      component: "RadioGroup",
      componentProps: {
        options: [
          {
            label: "是",
            value: true
          },
          {
            label: "否",
            value: false
          }
        ]
      },
      fieldName: "cname",
      label: "自定义域名",
      rules: "selectRequired"
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入(如果开启了自定义域名则为自定义域名)"
      },
      fieldName: "endpoint",
      label: "endpoint",
      rules: "required"
    }
  ]
});

function onSubmit(values: Record<string, any>) {
  message.success({
    content: `form values: ${JSON.stringify(values)}`
  });
}

function renderFileTypes() {
  return (
    <Select class="w-20" mode="multiple" options={["jpg", "jpeg", "png", "gif"].map(item => ({
      label: item,
      value: item
    }))}></Select>
  );
}

const [FormCustomer] = useVbenForm({
  // 所有表单项共用，可单独在表单内覆盖
  commonConfig: {
    // 所有表单项
    componentProps: {
      class: "w-full"
    }
  },
  // 提交函数
  handleSubmit: onSubmit,
  // 垂直布局，label和input在不同行，值为 vertical
  // 水平布局，label和input在同一行
  layout: "horizontal",
  schema: [
    {
      component: "RadioGroup",
      componentProps: {
        options: [
          {
            label: "开始",
            value: "open"
          },
          {
            label: "关闭",
            value: "close"
          }
        ]
      },
      fieldName: "autoCategory",
      label: "自动分类",
      rules: "selectRequired"
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入"
      },
      fieldName: "imageSaveConfig",
      label: "图片配置",
      rules: z.string().optional()
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入"
      },
      fieldName: "audioSaveConfig",
      label: "音频配置",
      rules: z.string().optional()
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入"
      },
      fieldName: "videoSaveConfig",
      label: "视频配置",
      rules: z.string().optional()
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入"
      },
      fieldName: "docPreviewSaveConfig",
      label: "预览文档配置",
      rules: z.string().optional()
    },
    {
      component: "Input",
      componentProps: {
        placeholder: "请输入"
      },
      fieldName: "docEditorSaveConfig",
      label: "编辑文档配置",
      rules: z.string().optional()
    }
  ]
});


</script>

<template>
  <Page :title="title">
    <template #description>
      <p class="text-foreground mt-3 text-sm leading-6">
        <a :href="'https://www.aliyun.com/product/oss'" class="vben-link" target="_blank">
          {{ name }}
        </a>
        {{ description }}
      </p>
    </template>
    <div class="card-box p-5">
      <Tabs>
        <TabPane key="oss">
          <template #tab>
            OSS
          </template>
          <Form />
        </TabPane>
        <TabPane key="cos">
          <template #tab>
            COS
          </template>
          <Form />
        </TabPane>
        <TabPane key="bos">
          <template #tab>
            BOS
          </template>
          <Form />
        </TabPane>
      </Tabs>
    </div>

    <div class="card-box mt-6 p-5">
      <div>
        <h5 class="text-foreground text-lg">存储目录配置</h5>
      </div>
      <div class="mt-4">
        <FormCustomer>
          <template #imageSaveConfig="slotProps">
            <Space>
              当文件后缀为
              <Select
                style="width: 100px;"
                mode="multiple"
                :options="[{label: 'jpg', value: 'jpg'}]"
              ></Select>
              时，存储目录为
              <Input placeholder="请输入" />
              <Checkbox style="margin-left: 20px;">当文件不带后缀时，使用Mine-Type识别。</Checkbox>
              {{ JSON.stringify(slotProps) }}
            </Space>
          </template>
        </FormCustomer>
      </div>
    </div>
    <div class="card-box mt-6 p-5">
      <div>
        <h5 class="text-foreground text-lg">自定义钩子</h5>
      </div>
      <div class="mt-4">
        <dl class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          test2
        </dl>
      </div>
    </div>
  </Page>
</template>
