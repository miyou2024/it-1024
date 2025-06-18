<script lang="ts" setup>
import { Page } from "@vben/common-ui";
import { ref } from "vue";

defineOptions({ name: 'About' });

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const columns = [
  {
    title: 'Full Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
  },
  { title: 'Column 5', dataIndex: 'address' },
];
const data: DataItem[] = [];
for (let i = 0; i < 1000; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: i + 1,
    address: `London Park no. ${i}`,
  });
}

const d = ref(data);
const c = ref(columns);
</script>
<template>
  <Page
    description="对图片自动分类，AI识别，AI搜索"
    title="图片资源管理器">
    <STable
      :columns="c"
      :scroll="{ y: 400 }"
      :pagination="false"
      :data-source="d"
    ></STable>
  </Page>
</template>
