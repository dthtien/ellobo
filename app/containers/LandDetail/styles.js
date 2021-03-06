const styles = theme => ({
  root: {
    padding: 5,
  },
  informationGroup: {
    textAlign: 'right',
    marginBottom: theme.spacing(2),
  },
  card: {
    display: 'inline-block',
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  icon: {
    float: 'left',
    fontSize: 32,
  },
  districtName: {
    fontWeight: 600,
    textTransform: 'capitalize',
  },
  descriptionArea: {
    marginTop: theme.spacing(1),
    lineHeight: 2,
    fontFeatureSettings: 'tnum',
  },
});

export default styles;
