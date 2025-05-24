import { ref } from 'vue';

export function usePhoneHook() {
  const providers = ref<Partial<object>[]>([]);

  function getProviders() {
    const list = [
      { label: '中国移动', value: 1 },
      { label: '中国电信', value: 2 },
      { label: '中国联通', value: 3 },
    ];
    providers.value = list;
    return list;
  }

  return {
    providers,
    getProviders,
  };
}

