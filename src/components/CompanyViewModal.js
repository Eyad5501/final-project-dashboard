import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function CompanyViewModal(props) {
  const { show, setShow, company } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Company</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>nameCompany:</strong> {company.company}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup.Item>
            <strong>employees:</strong>
            <ListGroup>
              {company.employees.map(employee => (
                <ListGroup.Item>
                  <Image src={employee.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                    <span style={{ marginLeft: 10 }}>
                      {employee.firstName} {employee.lastName}
                    </span>
                    <span style={{ marginLeft: 10 }}>
                      {employee.phone} 
                    </span>
                    <span style={{ marginLeft: 10 }}>
                      {employee.email} 
                    </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CompanyViewModal
