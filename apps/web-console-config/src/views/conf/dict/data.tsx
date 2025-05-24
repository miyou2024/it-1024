import type { VbenFormSchema } from '#/adapter/form';
import type { OnActionClickFn, VxeTableGridOptions } from '#/adapter/vxe-table';
import type { SystemRoleApi } from '#/api';

import { $t } from '#/locales';

export function useFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'dictName',
      label: $t('conf.dict.dictName'),
      rules: 'required',
    },
    {
      component: 'Input',
      fieldName: 'dictCode',
      label: $t('conf.dict.dictCode'),
      componentProps: {
        placeholder: '例如 db.example.mysql',
      },
      rules: 'required',
    },
    {
      component: 'RadioGroup',
      componentProps: {
        buttonStyle: 'solid',
        options: [
          { label: $t('conf.dict.enumDictType.number'), value: 10 },
          { label: $t('conf.dict.enumDictType.string'), value: 20 },
          { label: $t('conf.dict.enumDictType.object'), value: 30 },
          { label: $t('conf.dict.enumDictType.array'), value: 40 },
        ],
        optionType: 'button',
      },
      defaultValue: 10,
      fieldName: 'dictType',
      label: $t('conf.dict.dictType'),
    },
    {
      component: 'Input',
      fieldName: 'dictValue',
      label: $t('conf.dict.dictValue'),
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
      fieldName: 'dictCode',
      label: $t('conf.dict.dictCode'),
    },
    {
      component: 'Input',
      fieldName: 'dictName',
      label: $t('conf.dict.dictName'),
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
      label: $t('conf.dict.status'),
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: [
          { label: '数字类型', value: 10 },
          { label: '字符串类型', value: 20 },
          { label: '对象类型', value: 30 },
          { label: '数组类型', value: 40 },
        ],
      },
      fieldName: 'dictType',
      label: $t('conf.dict.dictType'),
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
      title: $t('conf.dict.id'),
      width: 200,
    },
    {
      field: 'dictCode',
      title: $t('conf.dict.dictCode'),
      width: 200,
    },
    {
      field: 'dictName',
      title: $t('conf.dict.dictName'),
      width: 200,
    },
    {
      field: 'dictType',
      title: $t('conf.dict.dictType'),
      width: 200,
    },
    {
      field: 'dictValue',
      title: $t('conf.dict.dictValue'),
      width: 200,
    },
    {
      cellRender: {
        attrs: { beforeChange: onStatusChange },
        name: onStatusChange ? 'CellSwitch' : 'CellTag',
      },
      field: 'status',
      title: $t('conf.dict.status'),
      width: 100,
    },
    {
      field: 'remark',
      minWidth: 100,
      title: $t('conf.dict.remark'),
    },
    {
      field: 'createTime',
      title: $t('conf.dict.createTime'),
      width: 200,
    },
    {
      align: 'center',
      cellRender: {
        attrs: {
          nameField: 'name',
          nameTitle: $t('conf.dict.name'),
          onClick: onActionClick,
        },
        name: 'CellOperation',
      },
      field: 'operation',
      fixed: 'right',
      title: $t('conf.dict.operation'),
      width: 130,
    },
  ];
}
