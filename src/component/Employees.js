import React, { useRef} from 'react';
import styles from '../style/Company.module.css';
import { checkEmployeAction, addEmploeysAction, removeEmployesAction } from '../store/companyReduser';
import { useDispatch, useSelector } from "react-redux";
import classnames from 'classnames';

const Employees = ({indexCom, indexEmp, checked, surName, name, job, checkCom, idCom, idEmp  }) => {
  const dispatch = useDispatch();
  const surNameRef = useRef();
  const nameRef = useRef();
  const jobRef = useRef();
 
  const checkEmployeHandler = (e) => {
    checked = e.target.checked
    const employ = {
      indexEmp,
      indexCom,
      checked
    }
    dispatch(checkEmployeAction(employ))
  };

  const addEmployesHeandler = () => {
    const employes = [{
      employe: {
        checkedEmploye: false,
        id: Date.now(),
        surName: surNameRef.current.value,
        name: nameRef.current.value,
        job: jobRef.current.value
      },
      checkeds: {
        indexEmp,
        indexCom,
      } 
    }];
    dispatch(addEmploeysAction(employes), 
      surNameRef.current.value = '',
      nameRef.current.value = '',
      jobRef.current.value = ''
    ); 
  };

  const removeEmployesHeandler = () => {
    if(checked){
    dispatch(removeEmployesAction({indexCom, idEmp}))
    }
  }

  const checkClass = classnames(styles.table, {
    [styles.inputCheck]: checked,
    });
  const checkTd = classnames(styles.input, {
    [styles.inputTd]: checked,
    });

  return (
    <tr className={checkClass} onKeyDown={(e) => {checked && e.key === 'Delete' && removeEmployesHeandler()}}>
      <td><input type='checkbox' checked={checked}  onChange={(e) => checkEmployeHandler(e)}/></td>
      <td><input className={checkTd} ref={surNameRef} type='text' defaultValue={surName} onKeyDown={(e) => {e.key === 'Enter' && addEmployesHeandler()}}/></td>
      <td><input className={checkTd} ref={nameRef} type='text' defaultValue={name} onKeyDown={(e) => {e.key === 'Enter' && addEmployesHeandler()}}/></td>
      <td><input className={checkTd} ref={jobRef} type='text' defaultValue={job} onKeyDown={(e) => {e.key === 'Enter' && addEmployesHeandler()}}/></td>
    </tr>
  );
};

export default Employees;