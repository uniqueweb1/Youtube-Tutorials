import React, {useEffect, useState} from 'react'
import '../Component/Table.css'
import { useLocation } from 'react-router-dom';
import  { useNavigate } from 'react-router-dom';

function Table() {
  const location = useLocation()
  const [state, setLocationState] = useState({FormData})

  //location state
  useEffect (()=>{
    let state = location.state
    setLocationState(state)
  }, [location.state])

  const navigate = useNavigate();
   const handleRowClick = () => {
    navigate('/form');
   }
  return (
    <div className='table-container'>
      <table>
        <thead>
            <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone no</th>
                <th>Password</th>
            </tr>
        </thead>
  {/*- mapping table body to display form data using the map method */}
        <tbody>
        {state && (
            <tr onClick={handleRowClick}>
                <td>{state.email}</td>
                <td>{state.firstname}</td>
                <td>{state.lastname}</td>
                <td>{state.phoneno}</td>
                <td>{state.password}</td>
            </tr>
              )}
            <tr onClick={handleRowClick}>
                <td>Email</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Phone no</td>
                <td>Password</td>
            </tr>
            <tr onClick={handleRowClick}>
                <td>Email</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Phone no</td>
                <td>Password</td>
            </tr>

        </tbody>

      </table>
    </div>
  )
}

export default Table
