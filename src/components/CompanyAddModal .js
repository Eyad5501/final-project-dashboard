import { useContext } from "react"
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"


function CompanyddModal(props) {
  const { show, setShow } = props
  const { employees , addCompany } = useContext(SQBContext)
  if (!employees.length) return null
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addCompany}>
        <Modal.Header closeButton>
          <Modal.Title>Add Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              nameCompeny
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="nameCompany" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-5">
            <Form.Label column md="5">
              employees
            </Form.Label>
            <Col md="15" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {employees.map(employee => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="checkbox" name="employees" value={employee._id} />
                  </Col>
                  <Col md="7">
                    <Image src={employee.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                    <span style={{ marginLeft: 10 }}>
                      {employee.firstName} {employee.lastName}
                    </span>

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
            Add Company
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CompanyddModal
