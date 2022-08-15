import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () =>{
    const { transactions } = useContext(GlobalContext)
    
    
    const amount = transactions.map(transaction => transaction.amount);
    let total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
     

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 
        '#424243', padding: '10px 10px'}}>
            <h4>Total Balance</h4>
            <h1 style={total < 0 ? {color: 'red'}: {color: '#f7f7f7'}}>{total}</h1>
        </div>
    )
}