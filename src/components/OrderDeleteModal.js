import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function OrderDeleteModal(props) {
  const { deleteOrder } = useContext(SQBContext)
  const { show,setShow,orderid } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete order</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this order ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteOrder(orderid)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default OrderDeleteModal