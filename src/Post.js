import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
// import bear from "../public/netnet.jpg";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function Post() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography>
                Benjamin Graham's net current asset investment strategy
              </Typography>
              <Typography>November 29, 2020</Typography>
              <Typography>Description</Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia}>
              <Image src="/../public/netnet.jpg" height={2904} width={4352} />
            </CardMedia>
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

// <Image src="/../public/netnet.jpg" height={2904} width={4352} />
// <CardMedia className={classes.cardMedia} image={bear}></CardMedia>
