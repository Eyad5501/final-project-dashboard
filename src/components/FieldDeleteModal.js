import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function FieldeDeleteModal(props) {
  const { deleteFielde } = useContext(SQBContext)
  const { show, setShow, fieldeid } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Fielde</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this fielde ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteFielde(fieldeid)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default FieldeDeleteModal
