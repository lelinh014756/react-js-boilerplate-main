import InfoMiniCard from '@components/Cards/InfoMiniCard';
import { BlockTwoTone, ChatBubbleTwoTone } from '@mui/icons-material';
import {
  Box,
  Checkbox,
  Chip,
  IconButton,
  TableBody as MuiTableBody,
  TableCell,
  TableRow,
  useTheme,
} from '@mui/material';
import { type ListStyle1Data } from '@pages/User/List/type';
import chipStatus from '@shared/helpers/chipStatus';
import { getComparator, type Order } from '@shared/utils/handlerComparator';
import stableSort from '@shared/utils/stableSort';
import React, { memo } from 'react';

export interface Props {
  rows: ListStyle1Data[];
  order: Order;
  orderBy: keyof ListStyle1Data;
  page: number;
  rowsPerPage: number;
  isSelected: (name: string) => boolean;
  handleClick: (event: React.MouseEvent<unknown>, name: string) => void;
}

function TableBodyView(props: Props) {
  const { rows, rowsPerPage, order, orderBy, page, isSelected, handleClick } =
    props;

  const theme = useTheme();

  return (
    <MuiTableBody>
      {stableSort(rows, getComparator<ListStyle1Data>(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row.Id);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              onClick={(event) => {
                handleClick(event, row.Id);
              }}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.Id}
              selected={isItemSelected}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isItemSelected}
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </TableCell>
              <TableCell>{row.Id}</TableCell>
              <TableCell>
                <InfoMiniCard
                  title={row.User.Name}
                  subText={row.User.Email}
                  urlAvatar={row.User.Avatar}
                  tickIcon={row.User.Certified}
                />
              </TableCell>
              <TableCell>{row.Country}</TableCell>
              <TableCell align="right">{row.Friends}</TableCell>
              <TableCell align="right">{row.Followers}</TableCell>
              <TableCell>
                <Chip
                  label={row.Status}
                  sx={chipStatus(row.Status ?? 'pending', theme)}
                />
              </TableCell>
              <TableCell>
                <Box display="flex" justifyContent="center">
                  <IconButton color="primary" aria-label="chat">
                    <ChatBubbleTwoTone fontSize="small" />
                  </IconButton>
                  <IconButton color="error" aria-label="delete">
                    <BlockTwoTone fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          );
        })}
    </MuiTableBody>
  );
}

export default memo(TableBodyView);
