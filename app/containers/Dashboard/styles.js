const styles = () => ({
  root: {
    padding: 5,
  },
  selector: {
    border: 'none',
    '&:hover': {
      border: 'none',
    },
  },
  form: {
    border: '1px solid #cccccc',
    borderRadius: 4,
    marginBottom: 20,
    '&:focus': {
      border: '1px solid #2684ff',
    },
  },
  searchBtn: {
    textAlign: 'right',
    '& button': {
      width: '100%',
    },
  },
});

export default styles;
