import { useContext } from "react"
import { Form, Col, Row, Button,Modal } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function AddStudy(props) {
  const { addStudy,users,orders,companise } = useContext(SQBContext)
  const { show, setShow } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
    <Form onSubmit={addStudy}>
      <Modal.Header closeButton>
        <Modal.Title>Add Study</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group as={Row} className="mb-3">
         <Form.Label column md="2">
        Stady
          </Form.Label>
         <Col md="6">
             <Form.Control type="file" accept="application/pdf" name="study"  />
        </Col>
        </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            Order
            </Form.Label>
            <Col md="8">
              {orders.map(orderObject => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="orders" value={orderObject._id} />
                  </Col>
                  <Col md="2">
                    <span>{orderObject.nameP}</span>
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
          Add Study
        </Button>
      </Modal.Footer>
    </Form>
  </Modal>
)
  //   <div className="ms-4">
  //     <h1>Add Study</h1>
  //     <Form className="mt-5" onSubmit={addStudy}>
     
  //       <Form.Group as={Row} className="mb-3">
  //         <Form.Label column md="2">
  //        Stady
  //         </Form.Label>
  //         <Col md="6">
  //           <Form.Control type="file" accept="application/pdf" name="study" required />
  //         </Col>
  //       </Form.Group>
  //       <Form.Group as={Row} className="mb-3">
  //           <Form.Label column md="3">
  //             User
  //           </Form.Label>
  //           <Col md="8">
  //             {users.map(userObject => (
  //               <Row>
  //                 <Col md="2">
  //                   <Form.Check type="checkbox" name="users" value={userObject._id} />
  //                 </Col>
  //                 <Col md="2">
  //                   <span>{userObject.name}</span>
  //                 </Col>
  //               </Row>
  //             ))}
  //           </Col>
  //         </Form.Group>
  //       <Form.Group as={Row} className="my-5">
  //         <Col md={{ span: 10, offset: 2 }}>
  //           <Button type="submit">Add </Button>
  //         </Col>
  //       </Form.Group>
  //     </Form>
  //   </div>
  // )
}

export default AddStudy