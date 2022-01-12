import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function EmployeeViewModal(props) {
  const { show, setShow, employee } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Full Name:</strong> {employee.firstName} {employee.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {employee.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>phone:</strong> {employee.phone}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Photo:</strong>{" "}
            <img src={employee.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>fields:</strong>
            <ListGroup>
              {employee.fields.map(field => (
                <ListGroup.Item>{field.typeField}</ListGroup.Item>
              ))}
            </ListGroup>
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

export default EmployeeViewModal
