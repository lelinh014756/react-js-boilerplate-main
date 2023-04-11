const toggleButton = () => {
  return {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  };
};

export default toggleButton;
