import { useState } from "react"
import { Button } from "react-bootstrap"
import CompanyDeleteModal from "./CompanyDeleteModal"
import CompanyEditModal from "./CompanyEditModal"
import CompanyViewModal from "./CompanyAddModal "

function CompanyRow(props) {
  const { company } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{company._id}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{company.nameCompany}</td>
      <td>{company.ratingAverage}</td>
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
      <CompanyViewModal show={viewShow} setShow={setViewShow} company={company} />
      <CompanyDeleteModal show={deleteShow} setShow={setDeleteShow} companyid={company._id} />
      <CompanyEditModal show={editShow} setShow={setEditShow} company={company} />
    </tr>
  )
}

export default CompanyRow
