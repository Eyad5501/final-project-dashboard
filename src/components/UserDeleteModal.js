import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function UserDeleteModal(props) {
  const { deleteUser } = useContext(SQBContext)
  const { show, setShow, userid } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this user ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteUser(userid)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserDeleteModal
