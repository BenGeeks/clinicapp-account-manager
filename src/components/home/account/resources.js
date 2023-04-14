import * as yup from 'yup';
import ColumnFilter from '../../../assets/column-filter';
import moment from 'moment';

export const COLUMNS = [
  { Header: 'Business Name', accessor: 'businessName', Filter: ColumnFilter },
  { Header: 'Subscription', accessor: 'subscription', Filter: ColumnFilter },
  { Header: 'Status', accessor: 'status', Filter: ColumnFilter },
  { Header: 'Owner', accessor: 'owner', Filter: ColumnFilter },
  { Header: 'Amount Due', accessor: 'amountDue', Filter: ColumnFilter },
  {
    Header: 'Due Date',
    accessor: 'dueDate',
    Filter: ColumnFilter,
    Cell: ({ value }) => {
      return moment(value).format('MMM DD, yyyy');
    },
  },
  { Header: 'Over Due', accessor: 'overDue', Filter: ColumnFilter },
];

export const SCHEMA = yup.object().shape({
  businessName: yup.string().required('Business name is required'),
  subscription: yup.string().required('Subscription is required'),
  status: yup.string().required('Status is required'),
  amountDue: yup.number('Amount should be a number').min(0, 'Amount should be a positive number').required('Amount is required'),
  dueDate: yup.date().required('Due Date is required'),
  overDue: yup.number('Amount should be a number').min(0, 'Amount should be a positive number').required('Over Due is required'),
});

const STATUSOPTIONS = [
  { label: 'trial', value: 'trial' },
  { label: 'active', value: 'active' },
  { label: 'onHold', value: 'onHold' },
  { label: 'suspended', value: 'suspended' },
  { label: 'cancelled', value: 'cancelled' },
];

export const INPUTLIST = [
  { type: 'text', name: 'businessName', label: 'Business Name' },
  { type: 'select', name: 'subscription', label: 'Subscription' },
  { type: 'select', name: 'status', label: 'Status', options: STATUSOPTIONS },
  { type: 'number', name: 'amountDue', label: 'Amount Due' },
  { type: 'date', name: 'dueDate', label: 'Due Date' },
  { type: 'number', name: 'overDue', label: 'Over Due' },
];
