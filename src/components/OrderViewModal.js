import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function OrderViewModal(props) {
  const { show, setShow, order } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>nameP:</strong> {order.nameP}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>descriptionP:</strong> {order.descriptionP}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>posterP:</strong>{" "}
            <img src={order.posterP} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>areaP:</strong> {order.areaP}
          </ListGroup.Item>
          <strong>LocationP:</strong> {order.LocationP}
          <ListGroup.Item>
            <strong>Company:</strong>
           {order.companyid}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default OrderViewModal
