import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'utils/themePalette';
import blue from '@material-ui/core/colors/blue';
import {
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import LoadingIndicator from './LoadingIndicator';

const styles = {
  chartFluid: {
    width: '100%',
    minWidth: 500,
    height: 450,
    overflowX: 'scroll',
  },
};

const theme = createMuiTheme(ThemePallete.yellowCyanTheme);
const color = {
  main: theme.palette.primary.main,
  maindark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  third: blue[500],
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    const { value } = payload[0];
    return (
      <div
        style={{
          backgroundColor: 'white',
          padding: 10,
          border: '1px solid gray',
        }}
      >
        <p style={{ textTransform: 'capitalize' }}>{label}</p>
        <p className="label">{numeral(value).format('0,0')} VND/m²</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  payload: PropTypes.array,
};

const CustomizedXAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`} style={{ textAlign: 'center' }}>
    <text
      x={0}
      y={0}
      dy={16}
      textAnchor="end"
      fill="#666"
      style={{ textTransform: 'capitalize', fontSize: 13 }}
      transform="rotate(-25)"
    >
      {payload.value}
    </text>
  </g>
);

CustomizedXAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

const CustomizedYAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dy={16}
      textAnchor="end"
      fill="#666"
      style={{ textTransform: 'capitalize' }}
    >
      {numeral(payload.value).format('0a')}
    </text>
  </g>
);

CustomizedYAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
};

function CompossedLineBarArea(props) {
  const {
    classes,
    addresses: { data, error, loading },
    history
  } = props;

  if (loading) return <LoadingIndicator />;

  if (error) {
    return <Typography variant="subtitle1">Server error!</Typography>;
  }
  if (data) {
    let dataLength = 0;
    const dataGraph = data.map(value => {
      dataLength += 1;
      return {
        name: value.attributes.name,
        avgPrice: value.attributes.average_price,
        slug: value.attributes.slug,
      };
    });

    return (
      <div className={classes.chartFluid}>
        <ResponsiveContainer>
          <ComposedChart
            width={800}
            height={450}
            data={dataGraph}
            style={{ padding: 10 }}
          >
            <XAxis
              dataKey="name"
              padding={{ right: 100, left: 20 }}
              interval={0}
              tick={<CustomizedXAxisTick />}
              hide={dataLength > 11}
              tickMargin={20}
              orientation="top"
              axisLine={false}
            />
            <YAxis
              axisLine
              tickSize={3}
              tickLine
              padding={{ top: 100 }}
              tick={<CustomizedYAxisTick />}
            />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <CartesianAxis vertical={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              type="monotone"
              dataKey="avgPrice"
              strokeWidth={4}
              fill={color.third}
              barSize={35}
              onClick={({ slug }) => history.push(`/addresses/${slug}`)}
            />
            <Line
              type="monotone"
              dataKey="avgPrice"
              strokeWidth={4}
              fill={color.secondary}
              stroke={color.main}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return <Typography variant="h6">No data found!</Typography>;
}

CompossedLineBarArea.propTypes = {
  classes: PropTypes.object.isRequired,
  addresses: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompossedLineBarArea);
