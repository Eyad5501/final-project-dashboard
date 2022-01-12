import { Button, ListGroup, Modal } from "react-bootstrap"

function StudyViewModal(props) {
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
          
          </ListGroup.Item> 
          <ListGroup.Item>
            <strong>Full Name:</strong> {study.uesrid?.firstName} {study.uesrid?.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>email:</strong> {study.uesrid?.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>photo:</strong>   <img src={study.uesrid?.avatar} style={{width:"50px",clipPath: "circle()",marginLeft:"50px"}}/>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>phone:</strong> {study.uesrid?.phone}
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

export default StudyViewModal
