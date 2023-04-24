import React from 'react';
import styles from '../style/Card.module.css';
import TableEmployees from './TableEmployees';
import TableCompany from './TableCompany';
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const dispatch = useDispatch();
  
  
  return (
    <div className={styles.card}>
      <TableCompany/>
      <TableEmployees/> 
    </div>
  );
};

export default Card;