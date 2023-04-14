import * as yup from 'yup';
import ColumnFilter from '../../../assets/column-filter';

export const COLUMNS = [
  { Header: 'Name', accessor: 'subscriptionName', Filter: ColumnFilter },
  { Header: 'Clinic Limit', accessor: 'clinicSiteLimit', Filter: ColumnFilter },
  { Header: 'User Limit', accessor: 'userLimit', Filter: ColumnFilter },
  { Header: 'Patients per Day', accessor: 'chartLimit', Filter: ColumnFilter },
  { Header: 'Price per Month', accessor: 'price', Filter: ColumnFilter },
];

export const SCHEMA = yup.object().shape({
  subscriptionName: yup.string().required('Subscription name is required'),
  clinicSiteLimit: yup.number().required('Clinic limit is required'),
  userLimit: yup.number().required('User limit is required'),
  chartLimit: yup.number().required('Chart per day limit is required'),
  price: yup.number().required('Price is required'),
});

export const INPUTLIST = [
  { type: 'text', name: 'subscriptionName', label: 'Subscription Name' },
  { type: 'number', name: 'clinicSiteLimit', label: 'Clinic Limit' },
  { type: 'number', name: 'userLimit', label: 'User Limit' },
  { type: 'number', name: 'chartLimit', label: "Patient's per Day Limit" },
  { type: 'number', name: 'price', label: 'Price per Month' },
];
