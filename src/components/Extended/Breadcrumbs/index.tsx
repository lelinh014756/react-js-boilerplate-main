import IconTallymark1 from '@assets/svg/IconTallymark1';
import { AccountTreeTwoTone } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import { Box, Card, Divider, Grid, Typography } from '@mui/material';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { useTheme } from '@mui/material/styles';
import config from '@shared/configs/coreConfig';
import { gridSpacing } from '@shared/constant';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  type MenuChildrenItem,
  type MenuItem,
} from 'src/modules/menu-items/type';

import { type BreadcrumbsProps } from '../type';
import { breadcrumbCardSX, iconStyle, itemSX, linkSX } from './styled';

function Breadcrumbs({
  card = true,
  divider,
  icon = false,
  icons = false,
  maxItems,
  navigation,
  rightAlign = false,
  separator,
  title = false,
  titleBottom = false,
  border = false,
  ...others
}: BreadcrumbsProps) {
  const theme = useTheme();
  const { pathname } = useLocation();

  const [main, setMain] = useState<MenuItem | null>(null);
  const [item, setItem] = useState<MenuChildrenItem | null>(null);

  // set active item state
  const getCollapse = (menu: MenuItem) => {
    if (menu.children != null && menu.children.length > 0) {
      menu.children.filter((collapse) => {
        if (collapse.type != null && collapse.type === 'collapse') {
          getCollapse(collapse);
        } else if (collapse.type != null && collapse.type === 'item') {
          if (pathname === config.basename + (collapse.url ?? '')) {
            setMain(menu);
            setItem(collapse);
          }
        }
        return false;
      });
    }
  };

  useEffect(() => {
    navigation?.items?.map((menu: MenuItem) => {
      if (menu.type != null && menu.type === 'group') {
        getCollapse(menu);
      }
      return false;
    });
  });

  // item separator
  const SeparatorIcon = separator;
  const separatorIcon =
    SeparatorIcon != null ? (
      <SeparatorIcon strokeWidth={1.5} className="h-4 w-4" />
    ) : (
      <IconTallymark1 strokeWidth={1.5} className="h-4 w-4" />
    );

  let mainContent;
  let itemContent;
  let breadcrumbContent = <Typography />;
  let itemTitle = '';
  let CollapseIcon;
  let ItemIcon;

  // collapse item
  if (main != null && main.type === 'collapse') {
    CollapseIcon = main.icon != null ? main.icon : AccountTreeTwoTone;
    mainContent = (
      <Typography component={Link} to="#" variant="subtitle1" sx={linkSX}>
        {icons && <CollapseIcon sx={iconStyle(theme)} />}
        {main.title}
      </Typography>
    );
  }

  // items
  if (item != null && item.type === 'item') {
    itemTitle = item.title ?? '';

    ItemIcon = item.icon != null ? item.icon : AccountTreeTwoTone;
    itemContent = (
      <Typography
        variant="subtitle1"
        sx={{
          display: 'flex',
          textDecoration: 'none',
          alignContent: 'center',
          alignItems: 'center',
          color: 'grey.500',
          ...itemSX,
        }}
      >
        {icons && <ItemIcon style={iconStyle(theme)} />}
        {itemTitle}
      </Typography>
    );

    // main
    if (item.breadcrumbs != null && item.breadcrumbs) {
      breadcrumbContent = (
        <Card
          sx={breadcrumbCardSX({
            theme,
            border,
            card,
          })}
          {...others}
        >
          <Box
            sx={{
              p: {
                xs: 1,
                sm: 2,
              },
              pl: !card ? 0 : 2,
            }}
          >
            <Grid
              container
              direction={rightAlign ? 'row' : 'column'}
              justifyContent={rightAlign ? 'space-between' : 'flex-start'}
              alignItems={rightAlign ? 'center' : 'flex-start'}
              spacing={1}
            >
              {title && !titleBottom && (
                <Grid item>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 500,
                      fontSize: {
                        xs: '0.875rem',
                        sm: '1rem',
                        md: '1.125rem',
                        xl: '1.25rem',
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Grid>
              )}
              <Grid item>
                <MuiBreadcrumbs
                  sx={{
                    '& .MuiBreadcrumbs-separator': {
                      width: 16,
                      ml: 1.25,
                      mr: 1.25,
                    },
                  }}
                  aria-label="breadcrumb"
                  maxItems={maxItems ?? 8}
                  separator={separatorIcon}
                >
                  <Typography
                    component={Link}
                    to="/dashboard"
                    color="inherit"
                    variant="subtitle1"
                    sx={linkSX}
                  >
                    {icons && <HomeTwoToneIcon sx={iconStyle(theme)} />}
                    {icon && <HomeIcon sx={{ ...iconStyle(theme), mr: 0 }} />}
                    {!icon && 'Dashboard'}
                  </Typography>
                  {mainContent}
                  {itemContent}
                </MuiBreadcrumbs>
              </Grid>
              {title && titleBottom && (
                <Grid item>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 500,
                      ...itemSX,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
          {!card && divider !== false && (
            <Divider
              sx={{ borderColor: theme.palette.primary.main, mb: gridSpacing }}
            />
          )}
        </Card>
      );
    }
  }

  return breadcrumbContent;
}

export default Breadcrumbs;
