import { useState,useContext } from "react"
import { Button } from "react-bootstrap"
import SQBContext from "../utils/SQBContext"
import ProfileEmployeeEditModal from "./ProfileEmployeeEditModal"


function ProfileEmployeeRow(props) {
  const { profile } = useContext(SQBContext)
  const { company } = props


  const [editShow, setEditShow] = useState(false)

  return (
    
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{profile.nameCompany}</td>

    
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
      

     
      <ProfileEmployeeEditModal show={editShow} setShow={setEditShow} employee={profile} />
    </tr>
  )
}

export default ProfileEmployeeRow
