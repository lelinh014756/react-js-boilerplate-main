import Customization from '@layouts/Customization';
import { Outlet } from 'react-router-dom';

// =============================|| MINIMAL LAYOUT || ============================= //

function MinimalLayout() {
  return (
    <>
      <Outlet />
      <Customization />
    </>
  );
}

export default MinimalLayout;
