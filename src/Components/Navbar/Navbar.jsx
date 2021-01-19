import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.jpg';
import useStyles from './styles';


const Navbar = ({ totalItems}) => {
    const classes = useStyles ();
    const location = useLocation ();
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to ="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="O'bonnheur des marques" height="40px" className={classes.image} />
                    O'bonnheur des marques
                </Typography>
                <div className={classes.grow} />
                {location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to ="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>

        </>
    )
}

export default Navbar
