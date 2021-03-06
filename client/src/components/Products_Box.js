import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    height: 350,
    width: "100%",
  },
});

export default function ProductBox({
  productName,
  productImage,
  productPrice,
  productDescription,
}) {
  const classes = useStyles();

  console.log(productName);
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={productName}
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title={productName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2"></Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {productDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {productPrice}
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
