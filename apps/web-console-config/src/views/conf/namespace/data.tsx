import type { VbenFormSchema } from '#/adapter/form';
import type { OnActionClickFn, VxeTableGridOptions } from '#/adapter/vxe-table';
import type { SystemRoleApi } from '#/api';

import { VbenButton } from '@vben/common-ui';

import { $t } from '#/locales';

import { usePhoneHook } from './hooks/use-phone.hook';

const { providers, getProviders } = usePhoneHook();

export function useFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'phoneUser',
      label: $t('contact.phone.phoneUser'),
      rules: 'required',
    },
    {
      component: 'Input',
      fieldName: 'phoneNumber',
      label: $t('contact.phone.phoneNumber'),
      rules: 'required',
      renderComponentContent: () => {
        return {
          suffix: () => <VbenButton size={'sm'}>识别</VbenButton>,
        };
      },
    },
    {
      component: 'RadioGroup',
      componentProps: () => {
        getProviders();
        return {
          buttonStyle: 'solid',
          options: providers.value,
          optionType: 'button',
        };
      },
      defaultValue: null,
      fieldName: 'phoneProvider',
      label: $t('contact.phone.phoneProvider'),
    },
    {
      component: 'RadioGroup',
      componentProps: {
        buttonStyle: 'solid',
        options: [
          { label: $t('common.enabled'), value: 1 },
          { label: $t('common.disabled'), value: 0 },
        ],
        optionType: 'button',
      },
      defaultValue: 1,
      fieldName: 'status',
      label: $t('contact.phone.status'),
    },
    {
      component: 'Textarea',
      fieldName: 'remark',
      label: $t('contact.phone.remark'),
    },
  ];
}

export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'remark',
      label: $t('contact.phone.phoneUser'),
    },
    {
      component: 'Input',
      fieldName: 'name',
      label: $t('contact.phone.phoneNumber'),
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: [
          { label: $t('common.enabled'), value: 1 },
          { label: $t('common.disabled'), value: 0 },
        ],
      },
      fieldName: 'status',
      label: $t('contact.phone.status'),
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: [
          { label: '中国移动', value: 1 },
          { label: '中国电信', value: 2 },
          { label: '中国联通', value: 2 },
        ],
      },
      fieldName: 'phoneProvider',
      label: $t('contact.phone.phoneProvider'),
    },
  ];
}

export function useColumns<T = SystemRoleApi.SystemRole>(
  onActionClick: OnActionClickFn<T>,
  onStatusChange?: (newStatus: any, row: T) => PromiseLike<boolean | undefined>,
): VxeTableGridOptions['columns'] {
  return [
    {
      field: 'id',
      title: $t('contact.phone.id'),
      width: 200,
    },
    {
      field: 'phoneUser',
      title: $t('contact.phone.phoneUser'),
      width: 200,
    },
    {
      field: 'phoneNumber',
      title: $t('contact.phone.phoneNumber'),
      width: 200,
    },
    {
      field: 'phoneProvider',
      title: $t('contact.phone.phoneProvider'),
      width: 200,
    },
    {
      cellRender: {
        attrs: { beforeChange: onStatusChange },
        name: onStatusChange ? 'CellSwitch' : 'CellTag',
      },
      field: 'status',
      title: $t('contact.phone.status'),
      width: 100,
    },
    {
      field: 'remark',
      minWidth: 100,
      title: $t('contact.phone.remark'),
    },
    {
      field: 'createTime',
      title: $t('contact.phone.createTime'),
      width: 200,
    },
    {
      align: 'center',
      cellRender: {
        attrs: {
          nameField: 'name',
          nameTitle: $t('contact.phone.name'),
          onClick: onActionClick,
        },
        name: 'CellOperation',
      },
      field: 'operation',
      fixed: 'right',
      title: $t('contact.phone.operation'),
      width: 130,
    },
  ];
}

export async function getEmployeeList(data: any) {
  const items = [];
  for (let i = 0; i < 20; i++) {
    items.push({
      id: i,
      employeeName: `employeeName-${i}`,
      name: `name-${i}`,
      status: 0,
      remark: `reamrk-${i}`,
      createTime: new Date(),
      permissions: [3, 4],
    });
  }
  return {
    items,
    total: 100,
  };
}
