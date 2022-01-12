import { useContext } from "react"
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function OrderCompanyEmployeModal(props) {
  const { show, setShow, order } = props
  const { employees, assemp } = useContext(SQBContext)

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => assemp(e, order._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Employees</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-5">
            <Form.Label column md="5">
              employees
            </Form.Label>
            <Col md="15" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {employees.map(employee => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="radio" name="employeeid" value={employee._id} />
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
            Ok
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default OrderCompanyEmployeModal
