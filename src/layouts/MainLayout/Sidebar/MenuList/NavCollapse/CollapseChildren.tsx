import { type MenuChildrenItem } from '@modules/menu-items/type';
import { List, Typography, useTheme } from '@mui/material';
import React, { memo } from 'react';

import NavItem from '../NavItem';
import NavCollapse from '.';

function CollapseChildren({
  data,
  level,
}: {
  data: MenuChildrenItem[] | undefined;
  level: number;
}) {
  const theme = useTheme();

  return (
    <List
      component="div"
      disablePadding
      sx={{
        position: 'relative',
        '&:after': {
          content: "''",
          position: 'absolute',
          left: '32px',
          top: 0,
          height: '100%',
          width: '1px',
          zIndex: -1,
          opacity: 1,
          background: theme.palette.primary.light,
        },
      }}
    >
      {data !== undefined
        ? data.map((item) => {
            switch (item.type) {
              case 'collapse':
                return (
                  <NavCollapse key={item.id} menu={item} level={level + 1} />
                );
              case 'item':
                return <NavItem key={item.id} item={item} level={level + 1} />;
              default:
                return (
                  <Typography
                    key={item.id}
                    variant="h6"
                    color="error"
                    align="center"
                  >
                    Menu Items Error
                  </Typography>
                );
            }
          })
        : ''}
    </List>
  );
}

export default memo(CollapseChildren);
