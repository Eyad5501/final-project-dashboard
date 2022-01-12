import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function EmployeeAddModal(props) {
  const { show, setShow } = props
  const { addEmployee,fields } = useContext(SQBContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addEmployee}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Phone
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="phone" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            Fields
            </Form.Label>
            <Col md="8">
              {fields.map(fieldObject => (
                <Row>
                  <Col md="2">
                    <Form.Check type="checkbox" name="fields" value={fieldObject._id} />
                  </Col>
                  <Col md="2">
                    <span>{fieldObject.typeField}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Employee
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EmployeeAddModal
