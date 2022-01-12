import { useState } from "react"
import { Button } from "react-bootstrap"
import EmployeeDeleteModal from "./EmployeeDeleteModal"
import EmployeeEditModal from "./EmployeeEditModal"
import EmployeeViewModal from "./EmployeeViewModal"

function EmployeeRow(props) {
  const { employee } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
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
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <EmployeeViewModal show={viewShow} setShow={setViewShow}  employee={employee} />
      <EmployeeDeleteModal show={deleteShow} setShow={setDeleteShow}  employeeid={employee._id} />
      <EmployeeEditModal show={editShow} setShow={setEditShow}  employee={ employee} />
    </tr>
  )
}

export default EmployeeRow