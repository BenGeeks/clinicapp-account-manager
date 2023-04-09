import React from 'react';
import { useParams } from 'react-router-dom';

const EditAccountPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit Account page goes here: {id}</h1>
    </div>
  );
};

export default EditAccountPage;
