import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AccessibilityNewTwoToneIcon from '@material-ui/icons/AccessibilityNewTwoTone';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '400px',
    marginBottom: '50px',
  },
  media: {
    paddingTop: '56.25%', // 16:9
    backgroundColor: '#6f180e'
  },
  cardContent: {
    height: '150px'
  },
}));

export default function ListingCard(props) {
  const classes = useStyles();

  return (
    // <Grid
    //   item
    //   container
    //   sm={12}
    //   md={12}
    //   lg={6}
    //   alignItems='center'
    //   justifyContent='center'
    //   spacing={3}>
    <div style={{ width: '400px' }}>
    <div style={{ display: 'flex', width: '100%',  }} >
      <Card
        className={classes.card} >
        <CardMedia
          className={classes.media}
          image={props.photo || "/logo-ii.png"}
          title={props.title} />
        <CardContent className={classes.cardContent}>
          <Typography variant='h6' color='textPrimary'>
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.body}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.category}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link href='/listings/detail'>
            <a>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AccessibilityNewTwoToneIcon />}>
                Reach Out
              </Button>
            </a>
          </Link>
        </CardActions>
      </Card>
      </div>
      </div>
    // </Grid>
  );
}
