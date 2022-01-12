import { Button, ListGroup, Modal } from "react-bootstrap"

function StudyOrderViewModal(props) {
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
            <strong>Name Project:</strong> {study.orderid?.nameP}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Image Project:</strong> <img src={study.orderid?.posterP} style={{width:"50px",clipPath: "circle()",marginLeft:"50px"}}/>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>description Project:</strong> {study.orderid?.descriptionP}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Area Project:</strong> {study.orderid?.areaP}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Location Project:</strong> {study.orderid?.LocationP}
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

export default StudyOrderViewModal
