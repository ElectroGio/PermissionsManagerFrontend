import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const RequestPermission = lazy(() => import('../pages/RequestPermission'));
const ModifyPermission = lazy(() => import('../pages/ModifyPermission'));
const GetPermissions = lazy(() => import('../pages/GetPermissions'));

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/request-permission" element={<RequestPermission />} />
      <Route path="/modify-permission" element={<ModifyPermission />} />
      <Route path="/get-permissions" element={<GetPermissions />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
