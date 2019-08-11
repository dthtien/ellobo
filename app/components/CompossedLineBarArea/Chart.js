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

const styles = {
  chartFluid: {
    width: '100%',
    minWidth: 500,
    height: 450,
    overflowX: 'scroll',
    overflowY: 'scroll',
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

function Chart(props) {
  const { classes, data, handleOnClickChart } = props;

  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <ComposedChart
          width={800}
          height={450}
          data={data}
          style={{ padding: 10 }}
        >
          <XAxis
            dataKey="name"
            padding={{ right: 100, left: 20 }}
            interval={0}
            tick={<CustomizedXAxisTick />}
            hide={data.length > 11}
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
            onClick={({ slug }) => handleOnClickChart(slug)}
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

Chart.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  handleOnClickChart: PropTypes.func.isRequired,
};

Chart.defaultProps = {
  handleOnClickChart: () => {},
};

const withStyle = withStyles(styles);

export default withStyle(Chart);
