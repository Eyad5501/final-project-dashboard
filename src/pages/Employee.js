import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import AddIcon from "@mui/icons-material/Add"
import EmployeeRow from "../components/EmployeeRow"
import EmployeeAddModal from "../components/EmployeeCompanyAddModal"
import EmployeeDeleteModal from "../components/EmployeeCompanyAddModal"

function Employee() {
  const { employees } = useContext(SQBContext)
  const [show, setShow] = useState(false)
  return (
    <>

      <h1 style={{ marginTop: 10 }}>employees</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> Add Employees
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>#</th>
            <th style={{ width: "18%" }}>Full Name</th>
            <th style={{ width: "20%" }}>Email</th>
            <th style={{ width: "15%" }}>Photo</th>
            <th style={{ width: "17%" }}>Phone</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <EmployeeRow key={employee._id} employee={employee} />
          ))}
        </tbody>
      </Table>
      <EmployeeAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Employee
