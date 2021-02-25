
import React, { useState, Fragment } from 'react';
import cn from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { TablePagination, TableFooter } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';// import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import uuid from 'uuid/v4';

/**
 * The purpose of this component is to act a generic list with selectable
 * items
 * Typical uses are whenever there is a need to display multiple
 * items where one to many can be selected
 * @param classes: css classes passed into html component
 * @param data: data to be displayed in list
 * @param title: title of the list
 * @param selectedIndex: number of the index that is selected
 * @param onClick: function passed as the event handler of the click event of the button
 */

type Props = {
  classes: any,
  rows: [],
  headCells: [],
};

const DataTable = (props: Props) => {
  const emptyrows = 0;
  const {
    classes,
    headCells,
    rows,
  } = props;
  const headers = (headCells && headCells.length) ? headCells : [
    'Build ID',
    'Status',
    'Queued by',
    'Date Queued',
    'Result',
    'Test Ratio',
    'Build Number',
    'Date Finished',
    'Tags',
  ];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // Handles the change in the number of rows on the page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // Table
  const renderCells = () => {
    const tableHeight = 53 * emptyrows;
    return (!rows) ? (<Fragment />) : (
      <TableBody>
        {emptyrows > 0 && (
          <TableRow>
            <TableCell style={{ height: tableHeight }}>
              <TableCell colSpan={6} />
            </TableCell>
          </TableRow>
        )}
        { rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            return (
              <TableRow key={`${row.id}-table-row`}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.status}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.author}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.queuedTime}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.results}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.ratio}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.buildNumber}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.finishedTime}
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    );
  };

  /**
   * Generates header of table
   */
  const generateHeader = () => {
    return (
      <TableHead className={cn.headerContainer}>
        <TableRow>
          {headers.map(header => (
            <TableCell key={uuid()} className={classes.tableHeader}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  return (
    <TableContainer component={Paper}>
      <Table className={cn.DataTable} aria-label="custom pagination table">
        {generateHeader()}
        {renderCells()}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export { DataTable };
