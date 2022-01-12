import { useState } from "react"
import { Button } from "react-bootstrap"
import StudyViewModal from "./StudyViewModal"
import StudyCompanyViewModal from "./StudyCompanyViewModal "
import StudyOrderViewModal from "./StudyOrderViewModal"
import Company from "../pages/Company"

function StudyRow(props) {
  const { study,company } = props
 
  const [viewUShow, setViewUShow] = useState(false)
  const [viewCShow, setViewCShow] = useState(false)
  const [viewOShow, setViewOShow] = useState(false)
  const [editCOShow, setViewCOShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{study._id}</td>
      <td><a href={study.study} className="btn btn-primary" target="_blank">view study</a></td>
      <td> <Button variant="info" className="me-2" onClick={() => setViewUShow(true)}>
          View User
        </Button> </td>
        <td> <Button variant="info" className="me-2" onClick={() => setViewCShow(true)}>
          View company
        </Button> </td>
        <td> <Button variant="info" className="me-2" onClick={() => setViewOShow(true)}>
          View order
        </Button> </td>
        <td> <Button variant="info" className="me-2" onClick={()=>setViewCOShow(company._id)}>
          Set Order
        </Button> </td>
     
      <td>
        {/* <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button> */}
      </td>
      <StudyViewModal show={viewUShow} setShow={setViewUShow} study={study} />
      <StudyCompanyViewModal show={viewCShow} setShow={setViewCShow} study={study} />
      <StudyOrderViewModal show={viewOShow} setShow={setViewOShow} study={study}  />
    </tr>
  )
}

export default StudyRow
