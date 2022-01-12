import { useState } from "react"
import { Button } from "react-bootstrap"
import EmployeeDeleteModal from "./EmployeeDeleteModal"
import EmployeeEditModal from "./EmployeeEditModal"


function EmployeeCompanyRow(props) {
  const { employee } = props
  const [deleteShow, setDeleteShow] = useState(false)
 
  return (
  <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{employee._id}</td>
      <td>
        {employee.firstName} {employee.lastName}
      </td>
      <td>{employee.email}</td>
      <td>
        <img src={employee.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{employee.phone}</td>
       <td>
        
        <Button variant="success" className="me-2" onClick>
         send to employee
        </Button>
        <Button variant="danger" onClick>
          Delete
        </Button>
      </td>
      <EmployeeDeleteModal show={deleteShow} setShow={setDeleteShow}  employeeid={employee._id} /> 
    </tr>
  )
}

export default EmployeeCompanyRow