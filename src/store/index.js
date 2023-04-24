import { combineReducers, createStore } from "redux";
import { companyReduser } from "./companyReduser";


const rootReduser = combineReducers({
  companyReduser,       
})
  
const store = createStore(rootReduser);

export default store;
