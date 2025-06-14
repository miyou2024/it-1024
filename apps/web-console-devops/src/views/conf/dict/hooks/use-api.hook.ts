import { ref } from 'vue';

export function useApiHook() {
  const tableList = ref<Partial<object>[]>([]);

  async function getTableList(params: Partial<object>) {
    console.error('getTableList', params);
    const items = [];
    for (let i = 0; i < 20; i++) {
      items.push({
        id: i,
        dictName: `dictName-${i}`,
        dictCode: `dictCode-${i}`,
        dictValue: `dictValue-${i}`,
        dictType: 20,
        status: 0,
        remark: `remark-${i}`,
        createTime: new Date(),
        permissions: [3, 4],
      });
    }
    tableList.value = items;
    return {
      items,
      total: 100,
    };
  }

  return {
    tableList,
    getTableList,
  };
}
