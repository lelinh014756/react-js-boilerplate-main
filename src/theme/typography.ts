/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

import type { Theme } from '@mui/material/styles';
import themeConfig from '@shared/configs/themeConfig';
import { mobileSpacing, tabletSpacing } from '@shared/constant';

import { type TypographyCustomization } from './type';

export default function themeTypography(theme: Theme): TypographyCustomization {
  const hToolbarSm = themeConfig.toolbarHeightSm;
  const hToolbarLg = themeConfig.toolbarHeightLg;

  return {
    fontFamily: theme?.optionCustom.customization?.fontFamily,
    h6: {
      fontWeight: 500,
      color: theme.optionCustom.heading,
      fontSize: '0.75rem',
    },
    h5: {
      fontSize: '0.875rem',
      color: theme.optionCustom.heading,
      fontWeight: 500,
    },
    h4: {
      fontSize: '1rem',
      color: theme.optionCustom.heading,
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.25rem',
      color: theme.optionCustom.heading,
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      color: theme.optionCustom.heading,
      fontWeight: 700,
    },
    h1: {
      fontSize: '2.125rem',
      color: theme.optionCustom.heading,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.optionCustom.textDark,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: theme.optionCustom.darkTextSecondary,
    },
    caption: {
      fontSize: '0.75rem',
      color: theme.optionCustom.darkTextSecondary,
      fontWeight: 400,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.334em',
    },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.5em',
      color: theme.optionCustom.darkTextPrimary,
    },
    button: {
      textTransform: 'capitalize' as const,
    },
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      '& > label': {
        top: 23,
        left: 0,
        color: theme.optionCustom.darkTextSecondary,
        '&[data-shrink="false"]': {
          top: 5,
        },
      },
      '& > div > input': {
        padding: '30.5px 14px 11.5px !important',
      },
      '& legend': {
        display: 'none',
      },
      '& fieldset': {
        top: 0,
      },
    },
    mainContent: {
      backgroundColor: theme.optionCustom.background,
      width: '100%',
      flexGrow: 1,
      padding: '20px',
      marginRight: '20px',
      borderRadius: `${String(theme.shape.borderRadius)}px`,
      overflow: 'hidden',
      minHeight: `calc(100vh - ${hToolbarLg + 4}px)`,
      marginTop: `${hToolbarLg + 4}px`,
      [theme.breakpoints.down('md')]: {
        minHeight: `calc(100vh - ${hToolbarLg}px)`,
        marginTop: `${hToolbarLg}px`,
        width: '100%',
        marginInline: `${tabletSpacing}px`,
        padding: `${tabletSpacing}px`,
      },
      [theme.breakpoints.down('sm')]: {
        minHeight: `calc(100vh - ${hToolbarSm}px)`,
        marginTop: `${hToolbarSm}px`,
        padding: `${mobileSpacing}px`,
        marginInline: 0,
      },
    },
    menuCaption: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.optionCustom.heading,
      padding: '6px',
      textTransform: 'capitalize',
      marginTop: '10px',
    },
    subMenuCaption: {
      fontSize: '0.6875rem',
      fontWeight: 500,
      color: theme.optionCustom.darkTextSecondary,
      textTransform: 'capitalize',
    },
    commonAvatar: {
      cursor: 'pointer',
      borderRadius: '8px',
    },
    smallAvatar: {
      width: '22px',
      height: '22px',
      fontSize: '1rem',
    },
    mediumAvatar: {
      width: '34px',
      height: '34px',
      fontSize: '1.2rem',
    },
    largeAvatar: {
      width: '44px',
      height: '44px',
      fontSize: '1.5rem',
    },
  };
}
