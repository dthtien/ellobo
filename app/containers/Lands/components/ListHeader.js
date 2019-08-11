import React, { memo } from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

const ListHeader = memo(() => (
  <TableHead>
    <TableRow>
      <TableCell />
      <TableCell>Foot square</TableCell>
      <TableCell>Price</TableCell>
      <TableCell>Square meter price</TableCell>
      <TableCell>Title</TableCell>
      <TableCell>Post date</TableCell>
    </TableRow>
  </TableHead>
));

export default ListHeader;
