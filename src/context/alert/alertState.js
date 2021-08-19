import React , {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const initialState = {
        alert:null
    }
   
    const [state , dispatch] = useReducer ( AlertReducer , initialState);
 

    

    //Set Alert
    const setAlert = (msg , type) => {

        dispatch({
            type:SET_ALERT,
            payload: {msg , type}
        });
        setTimeout(()=> removeAlert() ,3000);  /* ()=> dispatch({ type:REMOVE_ALERT }) */
    };
    
    
    //Remove Alert
    const removeAlert = () => {
        dispatch({type:REMOVE_ALERT});
    }

     
    return <AlertContext.Provider
    value={{
        alert:state.alert,
        setAlert,
        removeAlert
    }}
    >
        {props.children}
    </AlertContext.Provider>
}
export default AlertState;