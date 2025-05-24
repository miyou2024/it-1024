import type { VbenFormSchema } from '#/adapter/form';
import type { OnActionClickFn, VxeTableGridOptions } from '#/adapter/vxe-table';
import type { SystemRoleApi } from '#/api';

import { VbenButton } from '@vben/common-ui';

import { $t } from '#/locales';

export function useFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'nsName',
      label: $t('conf.namespace.nsName'),
      rules: 'required',
    },
    {
      component: 'Input',
      fieldName: 'nsCode',
      label: $t('conf.namespace.nsCode'),
      rules: 'required',
      renderComponentContent: () => {
        return {
          suffix: () => <VbenButton size={'sm'}>生成</VbenButton>,
        };
      },
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
      label: $t('conf.namespace.status'),
    },
    {
      component: 'Textarea',
      fieldName: 'remark',
      label: $t('conf.namespace.remark'),
    },
  ];
}

export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'nsCode',
      label: $t('conf.namespace.nsCode'),
    },
    {
      component: 'Input',
      fieldName: 'nsName',
      label: $t('conf.namespace.nsName'),
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
  ];
}

export function useColumns<T = SystemRoleApi.SystemRole>(
  onActionClick: OnActionClickFn<T>,
  onStatusChange?: (newStatus: any, row: T) => PromiseLike<boolean | undefined>,
): VxeTableGridOptions['columns'] {
  return [
    {
      field: 'id',
      title: $t('conf.namespace.id'),
      width: 200,
    },
    {
      field: 'nsCode',
      title: $t('conf.namespace.nsCode'),
      width: 200,
    },
    {
      field: 'nsName',
      title: $t('conf.namespace.nsName'),
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
      title: $t('conf.namespace.operation'),
      width: 130,
    },
  ];
}

