import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';



const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'row',
    align: 'center',
    marginTop: 75,
    spacing: -100,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 50
  },
  cent: {
    align: 'right',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    letterSpacing: -2,
    justifyContent: 'center',
    // fontWeight: 'Bold'
  },
  snip: {
    align: 'right',
    textAlign: 'center',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 30,
    maxWidth: 600,
    marginTop: 40,
    fontSize: 13,
    lineHeight: 1.2,
    fontStyle: 'italic'
  },
  btnL: {
    marginTop: 10,
    // color: 'red',
    float: 'right',
    borderColor: 'black'
    // bgcolor: ''
    // position: 'absolute',
  }

});
const theme = {
  spacing: 8,
}

export default function Testimonial(props) {
  const classes = useStyles()

  return (
    <div style={{ display:'flex', justifyContent:'center', }}>
      <Typography gutterBottom variant="h4" component="h2" className={classes.cent}>
            Who Are You?
          </Typography>
      <Typography variant="body2" component="p" className={classes.snip}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
    <Card className={classes.root} >
      {/* <CardActionArea> */}

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Need Help
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Button variant="contained" size="large" color="default" className={classes.btnL}>
          Sign Up
        </Button>
        </CardContent>
      {/* </CardActionArea> */}
      </Card>
      <Card className={classes.root} >

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Can Help
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Button variant="contained" size="large" color="default" className={classes.btnL}>
          Sign Up
        </Button>
        </CardContent>

    </Card>
    </div>
  )
}