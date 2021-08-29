import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 870,
    display: 'flex',
    flexDirection: 'row',
    align: 'center',
    margin: 60,
  },
  cent: {
    align: 'right',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }


});


export default function Testimonial(props) {
  const classes = useStyles()

  return (
    <div style={{ display:'flex', justifyContent:'center' }}>
      <h2 className={classes.cent}>Testimonials</h2>
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Lorem ipsum"
          height="180"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr81QCnr010ye_BX_zfenykPz7naqaZ60YlA&usqp=CAU"
          title="Lorem ipsum"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lorem ipsum
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* </Card>
      <Card className={classes.root} > */}
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Lorem ipsum"
          height="180"
          image="https://www.northwestharvest.org/wp-content/uploads/food-drives-mastheads.jpg"
          title="Lorem ipsum"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lorem ipsum
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}