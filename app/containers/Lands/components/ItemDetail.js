import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ItemDetail = memo(({ attributes, index }) => (
  <TableRow hover>
    <TableCell>{index + 1}</TableCell>
    <TableCell>{attributes.acreage} m²</TableCell>
    <TableCell>{numeral(attributes.total_price).format('0,0')} VND</TableCell>
    <TableCell>
      {numeral(attributes.square_meter_price).format('0,0')} VND/m²
    </TableCell>
    <TableCell>
      <Link to={`/lands/${attributes.slug}`}>{attributes.title}</Link>
    </TableCell>
    <TableCell>{attributes.post_date}</TableCell>
  </TableRow>
));

ItemDetail.propTypes = {
  attributes: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
};

export default ItemDetail;
