import { CheckCircle } from '@mui/icons-material';
import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';

export interface InfoMiniCardProps {
  title: string;
  urlAvatar: string;
  subText: string;
  tickIcon?: boolean;
}

function InfoMiniCard(props: InfoMiniCardProps) {
  const { title, urlAvatar, subText, tickIcon = false } = props;

  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar src={urlAvatar} />
      </Grid>
      <Grid item>
        <Typography variant="h5">
          {title}
          {tickIcon && (
            <CheckCircle
              color="success"
              sx={{
                width: '14px',
                height: '14px',
                marginBottom: '2px',
              }}
            />
          )}
        </Typography>
        <Typography variant="h6" color={(theme) => theme.palette.grey[500]}>
          {subText}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default InfoMiniCard;
