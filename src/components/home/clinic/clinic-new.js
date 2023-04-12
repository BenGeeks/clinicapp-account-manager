import React from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import ReactForm from '../../../assets/react-form';

const NewClinicPage = () => {
  const navigate = useNavigate();
  const formLayout = [
    { type: 'text', name: 'clinicName', label: 'Clinic Name' },
    { type: 'text', name: 'houseNumberAndStreet', label: 'Address' },
    { type: 'text', name: 'barangay', label: 'Barangay' },
    { type: 'text', name: 'cityOrMunicipality', label: 'City or Municipality' },
    { type: 'text', name: 'province', label: 'Province' },
    { type: 'text', name: 'zip', label: 'Zip Code' },
    { type: 'text', name: 'telephone', label: 'Telephone Number' },
    { type: 'text', name: 'faxNumber', label: 'Fax Number' },
  ];

  const schema = yup.object().shape({
    clinicName: yup.string().required('Clinic name is required'),
    houseNumberAndStreet: yup.string().required('Address is required'),
    barangay: yup.string().required('Barangay is required'),
    cityOrMunicipality: yup.string().required('City or Municipality is required'),
    province: yup.string().required('Province is required'),
    zip: yup.string().required('Zip code is required'),
    telephone: yup.string().required('Telephone number is required'),
    faxNumber: yup.string(),
  });

  const onSubmitHandler = (payload) => {
    console.log('ON SUBMIT HANDLER HAS BEEN TRIGGERED! ', payload);
  };

  const onCancelHandler = () => {
    if (window.confirm('Are you sure you want to cancel')) {
      navigate('/clinic');
    }
  };

  return (
    <>
      <ReactForm title={'New Clinic'} layout={formLayout} schema={schema} onCancel={onCancelHandler} onSubmit={onSubmitHandler} />
    </>
  );
};

export default NewClinicPage;
