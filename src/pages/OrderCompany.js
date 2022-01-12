import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import AddIcon from "@mui/icons-material/Add"
import OrderCompanyRow from "../components/OrderCompanyRow"

function OrderCompany() {
  const { profile } = useContext(SQBContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Orders</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
         
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "16%" }}>#</th>
            <th style={{ width: "15%" }}>Customer name</th>
            <th style={{ width: "15%" }}>Order</th>
            <th style={{ width: "18%" }}>Feild</th>
            <th style={{ width: "25%" }}>OrdersCompany</th>
          </tr>
        </thead>
        <tbody>
          { profile.orders.map(order => (
            <OrderCompanyRow key={order._id} order={order} />
          ))}
        </tbody>
    
      </Table>
  
    </>
  )
}

export default OrderCompany

