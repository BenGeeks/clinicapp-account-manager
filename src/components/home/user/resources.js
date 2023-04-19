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
  { Header: 'Business Name', accessor: 'businessName', Filter: ColumnFilter },
  { Header: 'Email Address', accessor: 'emailAddress', Filter: ColumnFilter },
  { Header: 'Phone Number', accessor: 'mobileNumber', Filter: ColumnFilter },
  { Header: 'Access', accessor: 'access', Filter: ColumnFilter },
  { Header: 'Role', accessor: 'role', Filter: ColumnFilter },
];
