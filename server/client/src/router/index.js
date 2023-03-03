import React, {lazy} from 'react'
import { useRoutes } from 'react-router-dom';

const SignUp = lazy(() => import('../pages/auth/Signup'));
const SignIn = lazy(() => import('../pages/auth/Signin'));

const AdminLayout = lazy(() => import('../components/layout/AdminLayout'));
const Admin = lazy(() => import('../pages/adminpages/Admin'));
const Home = lazy(() => import('../pages/adminpages/students/Home'));
const AddStudent = lazy(() => import('../pages/adminpages/students/AddStudent'));
const EditStudent = lazy(() => import('../pages/adminpages/students/EditStudent'));

const AddLayout = lazy(() => import('../components/layout/AddLayout'));
const EditLayout = lazy(() => import('../components/layout/EditLayout'));
const QuestionPart = lazy(() => import('../components/admin/QuestionPart'));

const UserLayout = lazy(() => import('../components/layout/UserLayout'));
const Content = lazy(() => import('../components/users/common/Content'));
const Exam = lazy(() => import('../components/users/exam/Exam'));
const Study = lazy(() => import('../components/users/study/Study'));
const Profile = lazy(() => import('../pages/Profile'));

const Preview = lazy(() => import('../pages/Preview'));
const ExamResult = lazy(() => import('../components/users/exam/Result'));
const StudyResult = lazy(() => import('../components/users/study/Result'));

export default function Router() {
  const router = [
    {
      path: '/',
      element: <SignIn />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        { path: '', element: <Admin /> },
      ]
    },
    {
      path: '/register-student',
      element: <Home />
    },
    {
      path: '/register-student/add',
      element: <AddStudent />
    },
    {
      path: '/register-student/edit/:id',
      element: <EditStudent />
    },
    {
      path: '/add',
      element: <AddLayout />,
      children: [
        { path: '', element: <></> },
        { path: ':id', element: <QuestionPart /> },
      ]
    },
    {
      path: '/edit',
      element: <EditLayout />,
      children: [
        { path: '', element: <></> },
        { path: ':id', element: <QuestionPart /> },
      ]
    },
    {
      path: '/user',
      element: <UserLayout />,
      children: [
        { path: ':id', element: <Content /> },
      ]
    },
    {
      path: '/user/profile',
      element: <Profile />
    },
    {
      path: '/exam/:id',
      element: <Exam />
    }, 
    {
      path: '/study/:id',
      element: <Study />
    }, 
    {
      path: '/study/result',
      element: <StudyResult />
    },
    {
      path: '/exam/result',
      element: <ExamResult />
    },
    {
      path: '/preview',
      element: <Preview />
    }
  ];

  return useRoutes(router)
}