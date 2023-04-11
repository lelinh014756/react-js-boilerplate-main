// material-ui
import { type MenuItem } from '@modules/menu-items/type';
import { Divider, List, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAppSelector } from '@redux/hook';
import { opened } from '@redux/selector/customizationSelector';
import { memo } from 'react';

// project imports
import NavCollapse from '../NavCollapse';
import NavItem from '../NavItem';

function NavGroup({ item }: { item: MenuItem }) {
  const theme = useTheme();

  const drawerOpened = useAppSelector(opened);

  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  // --- utils constant --- //
  const upMdDrawerClose = matchUpMd && !drawerOpened;
  // --- end utils constant --- //

  // menu list collapse & items
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        sx={{
          ...(upMdDrawerClose && {
            py: 0,
          }),
        }}
        subheader={
          item.title !== undefined &&
          !upMdDrawerClose && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.menuCaption }}
              display="block"
              gutterBottom
            >
              {item.title}
              {item.caption !== undefined && (
                <Typography
                  variant="caption"
                  sx={{ ...theme.typography.subMenuCaption }}
                  display="block"
                  gutterBottom
                >
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider
        sx={{
          mt: 0.25,
          mb: 1.25,
          [theme.breakpoints.up('md')]: {
            display: drawerOpened ? 'block' : 'none',
          },
        }}
      />
    </>
  );
}

export default memo(NavGroup);
