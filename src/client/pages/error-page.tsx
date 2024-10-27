import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div >
      <h1>Oops, something goes wrong</h1>

      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default ErrorPage;