import React from 'react';

import './Item.css';

// import {  Card } from 'react-bootstrap';

const Item = ({data}) => {

    const sortData = data.items.sort((a, b) => (a.namePL > b.namePL) ? 1 : ((b.namePL > a.namePL) ? -1 : 0))
    
    const datas = sortData.map((item) => {
        return(
        <p key={item.key}>{item.namePL.toUpperCase()} - {item.nameEN.toLowerCase()}</p>
        )})

    return (
         <div>
            {datas}
         </div>
    );
}



export default Item;
