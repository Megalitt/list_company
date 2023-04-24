import React, { useEffect, useState } from 'react';
import styles from '../../src/style/Table.module.css';
import Company from './Company';
import { compani, data } from '../data';
import { useDispatch, useSelector } from "react-redux";
import { addListAction, checkAllCompanyAction} from '../store/companyReduser';

const TableCompany = () => {
  const dispatch = useDispatch();
  const {companies} = useSelector(state => state.companyReduser);
  let checked;

  const checkAllCompanyHandler = (e) => {
    checked = e.target.checked
    for(let i = 0; i < companies.length; i++){
      dispatch(checkAllCompanyAction({checked, i}))
    };
  };
  
  useEffect(() => {
    dispatch(addListAction(compani))
  }, []);

  return (
    <table className={styles.table}>
      <caption>{data.company.title}</caption>
      <thead >
        <tr >
          <th colSpan={4} className={styles.head}>
            <input type='checkbox' checked={checked}  onChange={(e) => checkAllCompanyHandler(e)}/>
            <span className={styles.span}>Выделить все</span>
          </th>
        </tr>
        <tr>
          <th></th>
          <th>{data.company.company}</th>
          <th>{data.company.count}</th>
          <th>{data.company.adres}</th>
        </tr>
      </thead>
      <tbody> 
        {companies.map((com, i) => 
          <Company
            key={com.id}
            index={i}
            count={com.employees.length}
            name={com.nameCompany}
            adres={com.adres}
            checked={com.checkedCompany}
            id={com.id}
          />
        )}
      </tbody>
    </table>
  );
};

export default TableCompany;