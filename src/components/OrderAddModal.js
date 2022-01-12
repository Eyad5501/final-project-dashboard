import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function OrderAddModal(props) {
  const { show, setShow } = props
  const { addOrder } = useContext(SQBContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addOrder}>
        <Modal.Header closeButton>
          <Modal.Title>Add Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
               Namep
            </Form.Label>
            <Col md="8">
              <Form.Control name="nameP" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            descriptionP
            </Form.Label>
            <Col md="8">
              <Form.Control name="descriptionP" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            posterP
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="posterP" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            areaP
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="areaP" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            LocationP
            </Form.Label>
            <Col md="8">
            <Form.Control type="text" name="LocationP" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Order
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default OrderAddModal