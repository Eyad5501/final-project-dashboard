import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import AddIcon from "@mui/icons-material/Add"
import OrderAddModal from "../components/OrderAddModal"
import OrderRow from "../components/OrderRow"




function Order() {
  const { orders } = useContext(SQBContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Orders</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "16%" }}>#</th>
            <th style={{ width: "15%" }}>nameP</th>
            <th style={{ width: "18%" }}>descriptionP</th>
            <th style={{ width: "18%" }}>posterP</th>
            <th style={{ width: "9%" }}>areaP</th>
            <th style={{ width: "15%" }}>LocationP</th>
            <th style={{ width: "25%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <OrderRow key={order._id} order={order} />
          ))}
        </tbody>
      </Table>
      <OrderAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Order

