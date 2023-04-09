import React from 'react';
import { useParams } from 'react-router-dom';

const EditClinicPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit Clinic page goes here: {id}</h1>
    </div>
  );
};

export default EditClinicPage;
