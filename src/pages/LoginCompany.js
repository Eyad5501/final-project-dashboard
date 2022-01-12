import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"

function LoginCompany() {
  const { loginCompany } = useContext(SQBContext)

  return (
    <div className="ms-4">
      <h1>LoginCompany</h1>
      <Form className="mt-5" onSubmit={loginCompany}>
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
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Login Company</Button>
          </Col>
        </Form.Group> 
      </Form>
    </div>
  )
}

export default LoginCompany
