import RouteIcon from '@mui/icons-material/Route';
import { Grid, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import { RouteListType } from '../../models/RoutesTypes';

const RoutesList = () => {
    
    const routesArray: RouteListType[] = [
        { name: 'Dashboard', link: '/' },
        { name: 'Favorites', link: '/favorites' },
    ];

  return (
    <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Routes
        </Typography>
        
        <List dense={false}>
            {
                routesArray.map((element, index, arr) => {
                    return (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <RouteIcon color='primary' />
                            </ListItemIcon>
                            
                            <Link to='/favorites'>{ element.name }</Link>
                            
                        </ListItem>
                    );
                })
            }
        </List>
    </Grid>
  )
}

export default RoutesList