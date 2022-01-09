import React from 'react';
import Item from './Item';
import './Items.css';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

const Items = ({data}) => {
    
    return (
         <div className='container'>
             < Item data = {data} />
        </div>
    );
}



export default Items;
