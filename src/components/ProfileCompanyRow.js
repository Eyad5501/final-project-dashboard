// import { useState,useContext } from "react"
// import { Button } from "react-bootstrap"
// import SQBContext from "../utils/SQBContext"
// import ProfileCompanyEditModal from "./ProfileCompanyEditModal"
// import ProfileCompanyViewModal from "./ProfileCompanyViewModal"

// function ProfileCompanyRow(props) {
//   const { profile } = useContext(SQBContext)
//   const { company } = props


//   const [editShow, setEditShow] = useState(false)

//   return (
    
//     <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
//       <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{profile.nameCompany}</td>
//       <td>
//         <img src={profile.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
//       </td>
//       <td>{profile.email}</td>
//       <td>
//         <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
//           Edit
//         </Button>
      
//       </td>
     
//       <ProfileCompanyEditModal show={editShow} setShow={setEditShow} company={company} />
//     </tr>
//   )
// }

// export default ProfileCompanyRow
