import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Layout from '../Layouts/Layout';
import CourseLists from '../components/Quiz/CourseLists';
import AddNewQuiz from '../components/Quiz/AddNewQuiz';
import AddQuizContent from '../components/Quiz/AddQuizContent';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/course',
                element: <CourseLists />
            },
            {
                path: '/course/:name',
                element: <AddNewQuiz />
            },
            {
                path: '/course/quiz/:name/content/add',
                element: <AddQuizContent />
            }
        ]
    },
]);


export default router