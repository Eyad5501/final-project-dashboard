import { useState } from "react"
import { Button } from "react-bootstrap"
import  OrderDeleteModal from "./OrderDeleteModal"
import  OrderEditModal from "./OrderEditModal"
import  OrderViewModal from "./OrderViewModal"

function OrderRow(props) {
  const { order } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{order._id}</td>
      <td>{order.nameP}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{order.descriptionP}
      <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button></td>
      <td>
        <img src={order.posterP} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{order.areaP}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{order. LocationP}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <OrderViewModal show={viewShow} setShow={setViewShow} order={order} />
      <OrderDeleteModal show={deleteShow} setShow={setDeleteShow} orderid={order._id} />
      <OrderEditModal show={editShow} setShow={setEditShow} order={order} />
    </tr>
  )
}

export default OrderRow