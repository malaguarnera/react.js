import React from 'react'
import { Badge, IconButton,} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget =({cartQuantity}) => {
  return (
    <IconButton>
        <Badge badgeContent={cartQuantity} color='error'>
            <ShoppingCartIcon htmlColor='#fff'/>
        </Badge>
    </IconButton>
  )
}

export default CartWidget;