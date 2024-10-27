import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { FormProvider } from './pages/loan-form';
import { router } from './client-route';
import './style.scss';

const App: React.FC = () => {
  return (
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  );
};

export default App;