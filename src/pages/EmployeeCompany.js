import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import AddIcon from "@mui/icons-material/Add"
import EmployeeCompanyRow from "../components/EmployeeCompanyRow"
import EmployeeCompanyAddModal from "../components/EmployeeCompanyAddModal"
import EmployeeDeleteModal from "../components/EmployeeCompanyAddModal"

function EmployeeCompany() {
  const { profile } = useContext(SQBContext)
  const [show, setShow] = useState(false)
  console.log("kkkkk");
  return (
    <>
      <h1 style={{ marginTop: 10 }}>EmployeesCompany</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> Add EmployeesCompany
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
          {profile.employees.map(employee => (
            <EmployeeCompanyRow key={employee._id} employee={employee} />
          ))}
        </tbody>
      </Table>
      <EmployeeCompanyAddModal show={show} setShow={setShow} />
    </>
  )
}

export default EmployeeCompany
