import { useState } from "react"
import { Button } from "react-bootstrap"
import FieldeDeleteModal from "./FieldDeleteModal"
import FieldeEditModal from "./FieldEditModal"

function FieldeRow(props) {
  const { field } = props

  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{field._id}</td>
      <td>{field.typeField}</td>
      <td>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <FieldeDeleteModal show={deleteShow} setShow={setDeleteShow} fieldid={field._id} />
      <FieldeEditModal show={editShow} setShow={setEditShow} field={field} />
    </tr>
  )
}

export default FieldeRow
