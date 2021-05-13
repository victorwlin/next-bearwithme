import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  // this is required to be able to center the title
  toolbarTitle: {
    flex: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <Typography align="center" className={classes.toolbarTitle} variant="h5">
        Bear with Me
      </Typography>
    </Toolbar>
  );
}
