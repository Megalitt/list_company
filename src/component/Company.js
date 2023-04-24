import React, { useRef, useState } from 'react';
import styles from '../style/Company.module.css';
import { addCompanyAction, checkCompanyAction, removeCompanyAction } from '../store/companyReduser';
import { useDispatch, useSelector } from "react-redux";
import classnames from 'classnames';


const Company = ({count, name, adres, checked, index, id}) => {
  const dispatch = useDispatch();
  const nameCompanyRef = useRef();
  const adresRef = useRef();
  
  const checkCompanyHandler = (e) => {
    checked = e.target.checked
    console.log(checked);
    const com = {
      index,
      checked
    }
    dispatch(checkCompanyAction(com))
  };
  
  const addCompanyHeandler = () => {
    const company = {
      nameCompany: nameCompanyRef.current.value,
      number: 0,
      adres: adresRef.current.value,
      employees: [],
      checkedCompany: false,
      id: Date.now()
    }
    dispatch(addCompanyAction(company),
    nameCompanyRef.current.value = '',
    adresRef.current.value = ''
    )
  };

  const removeCompanyHeandler = () => {
    if(checked){
    dispatch(removeCompanyAction(id))
    }
  };

  const checkClass = classnames(styles.table, {
    [styles.inputCheck]: checked,
    });

  const checkTd = classnames(styles.input, {
    [styles.inputTd]: checked,
    });

  return (
    <tr className={checkClass} onKeyDown={(e) => {checked && e.key === 'Delete' && removeCompanyHeandler()}}>
      <td><input type='checkbox' checked={checked} onChange={(e) => checkCompanyHandler(e)}/></td>
      <td><input className={checkTd} type='text' ref={nameCompanyRef} onKeyDown={(e) => {e.key === 'Enter' && addCompanyHeandler()}} defaultValue={name}/></td>
      <td>{count}</td>
      <td><input className={checkTd} type='text' ref={adresRef} onKeyDown={(e) => {e.key === 'Enter' && addCompanyHeandler()}} defaultValue={adres}/></td>
    </tr>
  );
};

export default Company;
