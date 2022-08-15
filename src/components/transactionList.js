import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./transaction"

export const TransactionList = () =>{
    const { transactions } = useContext(GlobalContext)

    return(
    <>
        <h3>Recent</h3>
        <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}  
        </ul>
    </>
    )
 
}