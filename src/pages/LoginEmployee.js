import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function LoginEmployee() {
  const { loginEmployee } = useContext(SQBContext)

  return (
    <div className="ms-4">
      <h1>LoginEmployee</h1>
      <Form className="mt-5" onSubmit={loginEmployee}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Password
          </Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="my-4">
          <Row md={{ span:100, offset: 1 }}>
            <Col>
            <Button type="submit">Login Employee</Button>
            </Col>
            <Col>
            <a className="dropdown-item" href="http://localhost:3000">
                GO Bake
              </a>
              </Col>
          </Row>
          
         
             
        </Form.Group> 
      </Form>
    </div>
  )
}

export default LoginEmployee
