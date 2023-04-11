// material-ui
import menuItems from '@modules/menu-items';
import { Typography } from '@mui/material';
import { memo } from 'react';

// project imports
import NavGroup from './NavGroup';

function MenuList() {
  const navItems = menuItems.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
}

export default memo(MenuList);
