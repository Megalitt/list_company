import React from 'react';
import styles from '../../src/style/Table.module.css';
import { data } from '../data';
import Employees from './Employees';
import { useSelector, useDispatch } from "react-redux";
import { checkAllEmployesAction } from '../store/companyReduser';

const TableEmployees = () => {
  const dispatch = useDispatch();
  const {companies} = useSelector(state => state.companyReduser);
  let checked;
  
  const checkAllEmployesHandler = (e) => {
    checked = e.target.checked
    for(let i = 0; i < companies.length; i++){
      for (let j = 0; j < companies[i].employees.length; j++) {
        dispatch(checkAllEmployesAction({checked, i, j}))
      }
    }
  };
    
  return (
    <table className={styles.table}>
      <caption>{data.employees.title}</caption>
      <thead >
        <tr >
          <th colSpan={4} className={styles.head}>
            <input type='checkbox' checked={checked}  onChange={(e) => checkAllEmployesHandler(e)}/>
            <span className={styles.span}>Выделить все</span>
          </th>
        </tr>
        <tr>
          <th></th>
          <th>{data.employees.surname}</th>
          <th>{data.employees.name}</th>
          <th>{data.employees.job}</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((comp, index) => (
           comp.checkedCompany &&
              comp.employees.map((emp, i) => 
                <Employees
                  key={emp.id}
                  indexCom={index}
                  indexEmp={i}
                  checked={emp.checkedEmploye}
                  checkCom={comp.checkedCompany}
                  surName={emp.surName}
                  name={emp.name}
                  job={emp.job}
                  idCom={comp.id}
                  idEmp={emp.id}
                />   
              )
            )
          )
        }
      </tbody>
    </table>
  );
};

export default TableEmployees;