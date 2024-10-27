import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import LoadDetails from "./pages/loan-details-page";
import LoanSummaryPage from "./pages/loan-summary-page";
import PersonalDetailsPage from './pages/person-details-page';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PersonalDetailsPage />
    },
    {
        path: "/step1",
        element: <PersonalDetailsPage />,
    },
    {
        path: "/step2",
        element: <LoadDetails />,
    },
    {
        path: "/summary",
        element: <LoanSummaryPage />,
    }

]);