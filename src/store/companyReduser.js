
const defauState = {
    companies: [
      {
        checkedCompany: false,
        id: Date.now(),
        nameCompany: '',
        number: 0,
        adres: '',
        employees: [
          {
            checkedEmploye: false,
            id: Date.now(),
            surName: '',
            name: '',
            job: ''
          }
        ]
      }
    ]
};

const ADD_COMPANY = "ADD_COMPANY";
const ADD_EMPLOYESS = "ADD_EMPLOYESS";
const REMOVE_COMPANY = "REMOVE_COMPANY";
const REMOVE_EMPLOYES = "REMOVE_EMPLOYES";
const ADD_LIST = "ADD_LIST";
const CHECK_COMPANY = "CHECK_COMPANY";
const CHECK_COMPANY_ALL = "CHECK_COMPANY_ALL";
const CHECK_EMPLOYE = "CHECK_EMPLOYE";
const CHECK_EMPLOYE_ALL = "CHECK_EMPLOYE_ALL";


export const companyReduser = (state = defauState, action) => {
  switch(action.type){
    case ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload]
      }
    case ADD_EMPLOYESS:
      return {
        ...state,
        ...state.companies[action.payload[0].checkeds.indexCom].employees.push(action.payload[0].employe) 
      }
    case ADD_LIST:
      return {
        ...state,
        companies: [...state.companies, ...action.payload]
      }
    case CHECK_COMPANY_ALL:
      return {
        ...state,
        ...state.companies[action.payload.i].checkedCompany = action.payload.checked
      }
    case CHECK_EMPLOYE_ALL:
      return {
        ...state,
        ...state.companies[action.payload.i].employees[action.payload.j].checkedEmploye = action.payload.checked
      }
    case CHECK_COMPANY:
      return {
        ...state, 
        ...state.companies[action.payload.index].checkedCompany = action.payload.checked
      }
    case CHECK_EMPLOYE:
      const {indexCom, idEmp, checked} = action.payload;
      return {
        ...state,
        ...state.companies[action.payload.indexCom].employees[action.payload.indexEmp].checkedEmploye = action.payload.checked       
      }
    case REMOVE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter(com => com.id !== action.payload) //кнопка delete
      }
    case REMOVE_EMPLOYES:
      return {
        ...state,
        ...state.companies[action.payload.indexCom].employees = state.companies[action.payload.indexCom].employees.filter(emp => emp.id !== action.payload.idEmp)  //кнопка delete
      }
    default:
      return state;
  }
};

export const checkCompanyAction = (payload) => ({type: CHECK_COMPANY, payload});
export const removeCompanyAction = (payload) => ({type: REMOVE_COMPANY, payload});
export const removeEmployesAction = (payload) => ({type: REMOVE_EMPLOYES, payload});
export const checkAllCompanyAction = (payload) => ({type: CHECK_COMPANY_ALL, payload});
export const checkAllEmployesAction = (payload) => ({type: CHECK_EMPLOYE_ALL, payload});
export const checkEmployeAction = (payload) => ({type: CHECK_EMPLOYE, payload});
export const addCompanyAction = (payload) => ({type: ADD_COMPANY, payload});
export const addEmploeysAction = (payload) => ({type: ADD_EMPLOYESS, payload});
export const addListAction = (payload) => ({type: ADD_LIST, payload});

