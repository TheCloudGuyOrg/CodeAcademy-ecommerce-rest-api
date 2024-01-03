import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

const Header = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
        header: {
          justifyContent: 'space-between'
        }
      }));
    
    const classes = useStyles();

    return (
        <AppBar position="static">
          <Toolbar className={classes.header}>
            <Typography variant="h6" className={classes.title}>
              Codecademy Shop
            </Typography>
            <div>
              { 
                <Button color="inherit" component={Link} to={`/login`}>Login</Button>
              }
              { 
                <Button color="inherit" component={Link} to={`/orders`}>My Orders</Button>
              }
              <IconButton aria-label="access shopping cart" color="inherit" component={Link} to="/cart">
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      )
};

export default Header;