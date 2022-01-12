import { Button, ListGroup, Modal } from "react-bootstrap"

function StudyCompanyViewModal(props) {
  const { show, setShow, study } = props

  console.log(show)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Employee</Modal.Title>
      </Modal.Header>
       <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Company:</strong> {study.companyid?.nameCompany}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>photo:</strong>   <img src={study.companyid?.photo} style={{width:"50px",clipPath: "circle()",marginLeft:"50px"}}/>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {study.companyid?.email}
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

export default StudyCompanyViewModal
