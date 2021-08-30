import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CommentTwoToneIcon from '@material-ui/icons/CommentTwoTone';
import ScreenShareTwoToneIcon from '@material-ui/icons/ScreenShareTwoTone';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundColor: '#6f180e'
  },
 expand: {
   marginLeft: 'auto',
 },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.imageURL || "/logo-ii.png"}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          I left my job, decided to do a coding bootcamp that costs $20,000 and I have a wife and two children.
          They said I could get a job making a lot of money but need something to tide me over til then...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <CommentTwoToneIcon />
        </IconButton>
        <IconButton
          className={classes.expand}
          aria-label="share">
          <ScreenShareTwoToneIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
