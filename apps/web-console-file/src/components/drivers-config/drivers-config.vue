<script setup lang="tsx">
import type { AboutProps } from './drivers-config';
import { message, RadioButton, Select } from "ant-design-vue";
import { useVbenForm, z } from '#/adapter/form';

interface Props extends AboutProps {}

defineOptions({
  name: 'DriversConfig',
});

withDefaults(defineProps<Props>(), {
  description:
    "是阿里云提供的基于对象存储的云存储服务。",
  name: 'COS',
  title: '阿里云存储',
});

const [Form] = useVbenForm({
  // 所有表单项共用，可单独在表单内覆盖
  commonConfig: {
    // 所有表单项
    componentProps: {
      class: 'w-full',
    },
  },
  // 提交函数
  handleSubmit: onSubmit,
  // 垂直布局，label和input在不同行，值为 vertical
  // 水平布局，label和input在同一行
  layout: 'horizontal',
  schema: [
    {
      // 组件需要在 #/adapter.ts内注册，并加上类型
      component: 'Input',
      // 对应组件的参数
      componentProps: {
        placeholder: '请输入',
      },
      // 字段名
      fieldName: 'accessKey',
      // 界面显示的label
      label: 'AccessKey',
      rules: 'required',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      defaultValue: '',
      fieldName: 'accessSecret',
      label: 'AccessSecret',
      rules: 'required',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入.例如 cn-hangzhou',
      },
      fieldName: 'bucket',
      label: 'Bucket(存储桶)',
      rules: 'required',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'customDomain',
      label: '自定义域名',
      rules: z.string().optional(),
    },
    {
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '公有读',
            value: '1',
          },
          {
            label: '私有读',
            value: '2',
          },
        ],
      },
      fieldName: 'visitAccess',
      label: '访问权限',
      rules: 'selectRequired',
    },
  ],
});

function onSubmit(values: Record<string, any>) {
  message.success({
    content: `form values: ${JSON.stringify(values)}`,
  });
}

function renderFileTypes() {
  return (
    <Select class="w-20" mode="multiple" options={['jpg','jpeg', 'png', 'gif'].map(item => ({label: item, value: item}))}></Select>
  );
}

const [FormCustomer] = useVbenForm({
  // 所有表单项共用，可单独在表单内覆盖
  commonConfig: {
    // 所有表单项
    componentProps: {
      class: 'w-full',
    },
  },
  // 提交函数
  handleSubmit: onSubmit,
  // 垂直布局，label和input在不同行，值为 vertical
  // 水平布局，label和input在同一行
  layout: 'horizontal',
  schema: [
    {
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '开始',
            value: 'open',
          },
          {
            label: '关闭',
            value: 'close',
          },
        ],
      },
      fieldName: 'autoCategory',
      label: '自动分类',
      rules: 'selectRequired',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'imageSaveConfig',
      label: '图片存储配置',
      suffix: () => renderFileTypes(),
      rules: z.string().optional(),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'audioSaveConfig',
      label: '音频存储配置',
      rules: z.string().optional(),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'videoSaveConfig',
      label: '视频存储配置',
      rules: z.string().optional(),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'docPreviewSaveConfig',
      label: '预览文档存储配置',
      rules: z.string().optional(),
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入',
      },
      fieldName: 'docEditorSaveConfig',
      label: '编辑文档存储配置',
      rules: z.string().optional(),
    },
  ],
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
      <div>
        <h5 class="text-foreground text-lg">基本配置</h5>
      </div>
      <div class="mt-4">
        <Form />
      </div>
    </div>

    <div class="card-box mt-6 p-5">
      <div>
        <h5 class="text-foreground text-lg">自定义规则</h5>
      </div>
      <div class="mt-4">
        <FormCustomer />
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
