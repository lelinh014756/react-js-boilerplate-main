import MainCard from '@components/Cards/MainCard';
import SearchInput from '@components/Input/SearchInput';
import { DeleteTwoTone } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Table,
  TableContainer,
  TablePagination,
  Tooltip,
} from '@mui/material';
import { type Order } from '@shared/utils/handlerComparator';
import TableBodyView from '@views/user/list/listStyle1/TableBodyView';
import React, { useState } from 'react';

import { rows } from './data/listData1';
import EnhancedTableHead from './EnhancedTableHead';
import { type ListStyle1Data } from './type';

function ListStyle1() {
  const [searchText, setSearchText] = useState('');

  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof ListStyle1Data>('Id');
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const numSelected = selected.length > 0;

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof ListStyle1Data
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.Id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.includes(name);

  return (
    <MainCard
      title={numSelected ? `${selected.length} selected` : 'List'}
      headerSX={{
        ...(numSelected && {
          backgroundColor: '#eef7fe',
        }),
      }}
      customTitle={numSelected}
      customTitleVariant="h6"
      customTitleSx={{ fontSize: 16, fontWeight: 400 }}
      contentSX={{ padding: 0 }}
      secondary={
        numSelected ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteTwoTone fontSize="small" />
            </IconButton>
          </Tooltip>
        ) : (
          <SearchInput
            size="small"
            id="searchList"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            spacingY={false}
          />
        )
      }
    >
      <Box>
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBodyView
              rows={rows}
              rowsPerPage={rowsPerPage}
              order={order}
              orderBy={orderBy}
              handleClick={handleClick}
              isSelected={isSelected}
              page={page}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </MainCard>
  );
}

export default ListStyle1;
