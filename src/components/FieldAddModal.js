import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function FieldeAddModal(props) {
  const { show, setShow } = props
  const { addField } = useContext(SQBContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={addField}>
        <Modal.Header closeButton>
          <Modal.Title>Add fielde</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            TypeField
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="typeField" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add fielde
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default FieldeAddModal
