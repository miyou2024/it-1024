import type { VbenFormSchema } from '#/adapter/form';
import type { OnActionClickFn, VxeTableGridOptions } from '#/adapter/vxe-table';
import type { SystemRoleApi } from '#/api';

import { $t } from '#/locales';

export function useFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'name',
      label: $t('account.phone.name'),
      rules: 'required',
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
      label: $t('account.phone.status'),
    },
    {
      component: 'Textarea',
      fieldName: 'remark',
      label: $t('account.phone.remark'),
    },
  ];
}

export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'name',
      label: $t('account.phone.name'),
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
      label: $t('store.employee.status'),
    },
    {
      component: 'Input',
      fieldName: 'remark',
      label: $t('account.phone.remark'),
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
      title: $t('account.phone.id'),
      width: 200,
    },
    {
      field: 'name',
      title: $t('account.phone.name'),
      width: 200,
    },
    {
      cellRender: {
        attrs: { beforeChange: onStatusChange },
        name: onStatusChange ? 'CellSwitch' : 'CellTag',
      },
      field: 'status',
      title: $t('store.employee.status'),
      width: 100,
    },
    {
      field: 'remark',
      minWidth: 100,
      title: $t('store.employee.remark'),
    },
    {
      field: 'createTime',
      title: $t('store.employee.createTime'),
      width: 200,
    },
    {
      align: 'center',
      cellRender: {
        attrs: {
          nameField: 'name',
          nameTitle: $t('store.employee.name'),
          onClick: onActionClick,
        },
        name: 'CellOperation',
      },
      field: 'operation',
      fixed: 'right',
      title: $t('store.employee.operation'),
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
