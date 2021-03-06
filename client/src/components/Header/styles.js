import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(5, 0),
  },
  headline: {
    fontWeight: 100,
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 20),
    },
  },
}));

export default styles;
