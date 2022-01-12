import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import AddIcon from "@mui/icons-material/Add"
import CompanyRow from "../components/CompanyRow"
import CompanyAddModal from "../components/CompanyAddModal "

function Company() {
  const { companise } = useContext(SQBContext)
  const [show, setShow] = useState(false)
  if(!companise.length) return<h1>Loading</h1>
  return (
    <>
   
      <h1 style={{ marginTop: 10 }}>companise</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> Add Company
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>#</th>
            <th style={{ width: "40%" }}> nameCompany</th>
            <th style={{ width: "6%" }}>Rating</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companise.map(company => (
            <CompanyRow key={company._id} company={company} />
          ))}
        </tbody>
      </Table>
      <CompanyAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Company
