import { Drawer, Grid } from '@mui/material';
import { gridSpacing } from '@shared/constant';
import React, { memo, useCallback, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import BtnCustom from './BtnCustom';
import CustomFont from './CustomFont';
import CustomRadius from './CustomRadius';

// ==============================|| LIVE CUSTOMIZATION ||============================== //

function Customization() {
  // drawer on/off
  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* toggle button */}
      <BtnCustom handleToggle={handleToggle} />

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280,
          },
        }}
      >
        <PerfectScrollbar component="div">
          <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            {/* font family */}
            <Grid item xs={12}>
              <CustomFont />
            </Grid>
            {/* end font family */}

            <Grid item xs={12}>
              {/* border radius */}
              <CustomRadius />
              {/* end border radius */}
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
}

export default memo(Customization);
