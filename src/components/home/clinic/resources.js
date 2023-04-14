import * as yup from 'yup';
import ColumnFilter from '../../../assets/column-filter';

export const COLUMNS = [
  { Header: 'Clinic Name', accessor: 'clinicName', Filter: ColumnFilter },
  { Header: 'Business Name', accessor: 'businessName', Filter: ColumnFilter },
  { Header: 'Address', accessor: 'address', Filter: ColumnFilter },
  { Header: 'Barangay', accessor: 'barangay', Filter: ColumnFilter },
  { Header: 'City', accessor: 'city', Filter: ColumnFilter },
  { Header: 'Province', accessor: 'province', Filter: ColumnFilter },
  { Header: 'Zip', accessor: 'zip', Filter: ColumnFilter },
  { Header: 'Phone', accessor: 'telephone', Filter: ColumnFilter },
];

export const SCHEMA = yup.object().shape({
  clinicName: yup.string().required('Clinic name is required'),
  address: yup.string().required('Address is required'),
  barangay: yup.string().required('Barangay is required'),
  city: yup.string().required('City or Municipality is required'),
  province: yup.string().required('Province is required'),
  zip: yup.string().required('Zip code is required'),
  telephone: yup.string().required('Telephone number is required'),
  faxNumber: yup.string(),
});

export const INPUTLIST = [
  { type: 'text', name: 'clinicName', label: 'Clinic Name' },
  { type: 'text', name: 'address', label: 'Address' },
  { type: 'text', name: 'barangay', label: 'Barangay' },
  { type: 'text', name: 'city', label: 'City or Municipality' },
  { type: 'text', name: 'province', label: 'Province' },
  { type: 'text', name: 'zip', label: 'Zip Code' },
  { type: 'text', name: 'telephone', label: 'Telephone Number' },
  { type: 'text', name: 'faxNumber', label: 'Fax Number' },
];
