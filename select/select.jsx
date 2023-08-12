import {useState} from 'react'

function Select() {

  const options = [{
    label: "Oyinlola",
    value: "employee1",
  },
  {
    label: "Babatunde",
    value: "employee2",
  },
  {
    label: "Rasheed",
    value: "employee3",
  },
  {
    label: "Ayinde",
    value: "employee4",
  }
]

const [showEmployee, setShowEmployee] = useState(options.label)
const handleOptionChange = e => {
  const getvalue = e.target.value
  if (getvalue === 'employee1'){
    setShowEmployee(options[0].label)
  }
  else if(getvalue === 'employee2'){
    setShowEmployee(options[1].label)
  }
  else if (getvalue === 'employee3'){
    setShowEmployee(options[2].label)
  }
  else if (getvalue === 'employee4'){
    setShowEmployee(options[3].label)
  }
}

  return (
    <div className="em" style={{padding:"8px", margin:"auto", border:"1px solid #fff", textAlign:"center"}}>
      <div className='flex'>
     <h2>FORM</h2>
     <label htmlFor="select" style={{padding:"8px", margin:"10px"}}>
      <span>Choose The Name Of Employee</span>
      <select name="" onChange={handleOptionChange} style={{padding:"8px", margin:"10px"}}>
        {options.map(option => (
     <option  key={option.value} value={option.value}> {option.label}</option>
        ))}
   
      </select>
     </label>
     <div>
      <span>Employee Name</span>
      <input type="text" name="" value={showEmployee} style={{padding:"8px", margin:"10px"}}/>
     </div>
     <button type="submit" style={{padding:"8px", color:"#fff", margin:"6px",textAlign:"center",width:"100px", backgroundColor:"green", borderRadius:"5px", border:"1px solid black"}}>Submit</button>
      </div>
    </div>
  )
}

export default Select
