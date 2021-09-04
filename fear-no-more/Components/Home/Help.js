import React from 'react';
import Router, { useRouter } from 'next/router';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import AuthContext from '../Context/AuthContext.js';
import iconOne from '../../public/icon1.png';
import iconTwo from '../../public/icon2.png';
import Image from 'next/image'
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'row',
    align: 'center',
    marginTop: 55,
    spacing: -100,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 10,
  },
  cent: {
    align: 'right',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    letterSpacing: -2,
    justifyContent: 'center',
    color: 'white'
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
    float: 'right',
    borderColor: 'black'
  }
});
const theme = {
  spacing: 8,
}

export default function Testimonial(props) {
  const classes = useStyles()

  return (
    <AuthContext.Consumer>
      {(value) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#829cd3', paddingTop: '50px' }}>
            <Typography gutterBottom variant="h4" component="h2" className={classes.cent}>
              Who Are You?
            </Typography>
            <Card className={classes.root} style={{ border: "none", boxShadow: "none" }} >
              <CardContent style={{ backgroundColor: '#829cd3' }}>
                <Paper variant="outlined" style={{ border: "none", boxShadow: "none", display: 'flex', justifyContent: 'center', marginRight: '40px', backgroundColor: '#829cd3', marginBottom: '30px', cursor: 'pointer' }}>
                  <Image
                    src={iconOne}
                    alt='Profile photo'
                    onClick={() => {
                      if (value.userProfile.username === "Guest") {
                        Router.push('/user/signup');
                      } else {
                        Router.push('/listings/list')
                      }
                    }} />
                </Paper>
                <Typography gutterBottom variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center', marginRight: '40px', color: 'white' }}>
                  Need Help
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.root} style={{ border: "none", boxShadow: "none" }} >
              <CardContent style={{ backgroundColor: '#829cd3' }}>
                <Paper variant="outlined" style={{ border: "none", boxShadow: "none", display: 'flex', justifyContent: 'center', marginLeft: '40px', backgroundColor: '#829cd3', marginBottom: '40px', cursor: 'pointer' }}>
                  <Image
                    src={iconTwo}
                    alt='Profile photo'
                    onClick={() => {
                      if (value.userProfile.username === "Guest") {
                        Router.push('/user/signup');
                      } else {
                        Router.push('/listings/list')
                      }
                    }} />
                </Paper>
                <Typography gutterBottom variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'center', marginLeft: '30px', color: 'white' }}>
                  Can Help
                </Typography>
              </CardContent>
            </Card>
          </div>
        )
      }}
    </AuthContext.Consumer>
  );
}