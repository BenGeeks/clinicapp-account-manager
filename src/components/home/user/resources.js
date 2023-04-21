import * as yup from 'yup';
import ColumnFilter from '../../../assets/column-filter';

export const COLUMNS = [
  {
    Header: '🟢',
    accessor: 'isActive',
    Filter: <div></div>,
    Cell: ({ row }) => {
      return row.original.isActive ? '🟢' : '🔴';
    },
  },
  { Header: 'Name', accessor: 'name', Filter: ColumnFilter },
  { Header: 'Email Address', accessor: 'emailAddress', Filter: ColumnFilter },
  { Header: 'Phone Number', accessor: 'mobileNumber', Filter: ColumnFilter },
  { Header: 'Access', accessor: 'access', Filter: ColumnFilter },
  { Header: 'Role', accessor: 'role', Filter: ColumnFilter },
  { Header: 'Department', accessor: 'department', Filter: ColumnFilter },
  { Header: 'Position', accessor: 'position', Filter: ColumnFilter },
];

export const COLUMNS2 = [
  {
    Header: '🟢',
    accessor: 'isActive',
    Filter: <div></div>,
    Cell: ({ row }) => {
      return row.original.isActive ? '🟢' : '🔴';
    },
  },
  { Header: 'Name', accessor: 'name', Filter: ColumnFilter },
  { Header: 'Account Name', accessor: 'accountName', Filter: ColumnFilter },
  { Header: 'Email Address', accessor: 'emailAddress', Filter: ColumnFilter },
  { Header: 'Phone Number', accessor: 'mobileNumber', Filter: ColumnFilter },
  { Header: 'Access', accessor: 'access', Filter: ColumnFilter },
  { Header: 'Role', accessor: 'role', Filter: ColumnFilter },
  { Header: 'Department', accessor: 'department', Filter: ColumnFilter },
  { Header: 'Position', accessor: 'position', Filter: ColumnFilter },
];

export const SCHEMA_SUPERUSER = yup.object().shape({
  accountName: yup.string().required('Account name is required'),
  access: yup.number().required('User access is required'),
  role: yup.number().required('User limit is required'),
  department: yup.number().required('Chart per day limit is required'),
  position: yup.number().required('Price is required'),
  emailAddress: yup.boolean(),
});

export const SCHEMA_OWNER = yup.object().shape({
  access: yup.number().required('User access is required'),
  role: yup.number().required('User limit is required'),
  department: yup.number().required('Chart per day limit is required'),
  position: yup.number().required('Price is required'),
  emailAddress: yup.boolean(),
});

export const INPUTLIST_SUPERUSER = [
  { type: 'select', name: 'accountName', label: 'Account Name' },
  { type: 'email', name: 'emailAddress', label: 'Email Address' },
  { type: 'text', name: 'firstName', label: 'First Name' },
  { type: 'text', name: 'lastName', label: 'Last Name' },
  {
    type: 'select',
    name: 'access',
    label: 'Access',
    options: [
      { value: 'superuser', label: 'superuser' },
      { value: 'support', label: 'support' },
      { value: 'owner', label: 'owner' },
      { value: 'admin', label: 'admin' },
      { value: 'supervisor', label: 'supervisor' },
      { value: 'user', label: 'user' },
    ],
  },
  { type: 'select', name: 'role', label: 'Role' },
  { type: 'select', name: 'department', label: 'Department' },
  { type: 'select', name: 'position', label: 'Position' },
  { type: 'text', name: 'isActive', label: 'Is Active' },
];

export const INPUTLIST_OWNER = [
  { type: 'select', name: 'accountName', label: 'Account Name' },
  { type: 'email', name: 'emailAddress', label: 'Email Address' },
  { type: 'text', name: 'accountName', label: 'Account Name' },
  {
    type: 'select',
    name: 'access',
    label: 'Clinic Limit',
    options: [
      { value: 'superuser', label: 'superuser' },
      { value: 'support', label: 'support' },
      { value: 'owner', label: 'owner' },
      { value: 'admin', label: 'admin' },
      { value: 'supervisor', label: 'supervisor' },
      { value: 'user', label: 'user' },
    ],
  },
  { type: 'select', name: 'role', label: 'Role' },
  { type: 'select', name: 'department', label: 'Department' },
  { type: 'select', name: 'position', label: 'Position' },
  { type: 'text', name: 'isActive', label: 'Is Active' },
];
