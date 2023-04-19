import * as yup from 'yup';
import ColumnFilter from '../../../assets/column-filter';
import ColumnFilterSelect from '../../../assets/column-filter-select';
import { Link } from 'react-router-dom';

export const COLUMNS_SUP = [
  {
    Header: '🟢',
    accessor: 'isActive',
    Filter: ColumnFilterSelect,
    Cell: ({ row }) => {
      return row.original.isActive ? '🟢' : '🔴';
    },
  },
  { Header: 'Clinic Name', accessor: 'clinicName', Filter: ColumnFilter, Cell: ({ row, value }) => <Link to={`/clinic/${row.original._id}`}>{value}</Link> },
  {
    Header: 'Account Name',
    accessor: 'accountName',
    Filter: ColumnFilter,
    Cell: ({ row, value }) => <Link to={`/account/${row.original.accountId}`}>{value}</Link>,
  },
  { Header: 'Barangay', accessor: 'barangay', Filter: ColumnFilter },
  { Header: 'City', accessor: 'city', Filter: ColumnFilter },
  { Header: 'Province', accessor: 'province', Filter: ColumnFilter },
  { Header: 'Phone', accessor: 'telephone', Filter: ColumnFilter },
];

export const COLUMNS_OWNER = [
  { Header: 'Clinic Name', accessor: 'clinicName', Filter: ColumnFilter, Cell: ({ row, value }) => <Link to={`/clinic/${row.original._id}`}>{value}</Link> },
  { Header: 'Address', accessor: 'address', Filter: ColumnFilter },
  { Header: 'Barangay', accessor: 'barangay', Filter: ColumnFilter },
  { Header: 'City', accessor: 'city', Filter: ColumnFilter },
  { Header: 'Province', accessor: 'province', Filter: ColumnFilter },
  { Header: 'Zip', accessor: 'zip', Filter: ColumnFilter },
  { Header: 'Phone', accessor: 'telephone', Filter: ColumnFilter },
];

export const SCHEMA_SUP = yup.object().shape({
  accountId: yup.string().required('Account name is required'),
  clinicName: yup.string().required('Clinic name is required'),
  address: yup.string().required('Address is required'),
  barangay: yup.string().required('Barangay is required'),
  city: yup.string().required('City or Municipality is required'),
  province: yup.string().required('Province is required'),
  zip: yup.string().required('Zip code is required'),
  telephone: yup.string().required('Telephone number is required'),
  faxNumber: yup.string(),
});

export const SCHEMA_OWNER = yup.object().shape({
  clinicName: yup.string().required('Clinic name is required'),
  address: yup.string().required('Address is required'),
  barangay: yup.string().required('Barangay is required'),
  city: yup.string().required('City or Municipality is required'),
  province: yup.string().required('Province is required'),
  zip: yup.string().required('Zip code is required'),
  telephone: yup.string().required('Telephone number is required'),
  faxNumber: yup.string(),
  isActive: yup.boolean(),
});

export const INPUTLIST_SUP = [
  { type: 'select', name: 'accountId', label: 'Account Name' },
  { type: 'text', name: 'clinicName', label: 'Clinic Name' },
  { type: 'text', name: 'address', label: 'Address' },
  { type: 'text', name: 'barangay', label: 'Barangay' },
  { type: 'text', name: 'city', label: 'City or Municipality' },
  { type: 'text', name: 'province', label: 'Province' },
  { type: 'text', name: 'zip', label: 'Zip Code' },
  { type: 'text', name: 'telephone', label: 'Telephone Number' },
  { type: 'text', name: 'faxNumber', label: 'Fax Number' },
  {
    type: 'select',
    name: 'isActive',
    label: 'Is Active',
    options: [
      { value: true, label: 'true' },
      { value: false, label: 'false' },
    ],
  },
];

export const INPUTLIST_OWNER = [
  { type: 'text', name: 'clinicName', label: 'Clinic Name' },
  { type: 'text', name: 'address', label: 'Address' },
  { type: 'text', name: 'barangay', label: 'Barangay' },
  { type: 'text', name: 'city', label: 'City or Municipality' },
  { type: 'text', name: 'province', label: 'Province' },
  { type: 'text', name: 'zip', label: 'Zip Code' },
  { type: 'text', name: 'telephone', label: 'Telephone Number' },
  { type: 'text', name: 'faxNumber', label: 'Fax Number' },
];
