import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { UserTable } from '../../components';
import { setUsers } from '../../redux/states/people';
import './Dashboard.scss';

const Dashboard = () => {
  const dispatch = useDispatch();

  /**
   * 
   * useRef returns a mutable ref object whose 
   * .current property is initialized to the passed 
   * argument (initialValue). The returned object will 
   * persist for the full lifetime of the component.
   * 
   */
  const dataFetchedRef = useRef(false); // dataFetchedRef.current = false

  const requestAPI = async() => {
    const payload = await axios.get('http://localhost:8080/users')
    .then(response => response.data);

    dispatch(setUsers(payload)); 
  }

  useEffect(() => { // hook initiated ONCE
    
    // To execute useffect hook once
    // if dataFetchedRef.current = true pass
    if (dataFetchedRef.current) return;
    // set to true
    dataFetchedRef.current = true;
    
    // make an initial http request
    requestAPI();
  }, [])
  
  return (
    <div className="global-container">
      <UserTable />
    </div>
  )
}

export default Dashboard
