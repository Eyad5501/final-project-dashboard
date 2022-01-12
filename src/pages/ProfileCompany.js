import { useContext,useState } from "react"



import SQBContext from "../utils/SQBContext"
import { Button,Container } from "react-bootstrap"

import AddIcon from "@mui/icons-material/Add"
// import ProfileCompanyRow from "../components/ProfileCompanyRow"


// function ProfileCompany() {
//   const { profile } = useContext(SQBContext)
//   // if (!profile) return <h1>Loading...</h1>
//   const [show, setShow] = useState(false)
//   return (
//     <>
//       <h1 style={{ marginTop: 10 }}>ProfileCompany</h1>
//       <div style={{ display: "flex", justifyContent: "flex-end" }}>
//         <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
//           <AddIcon />
//         </Button>
//       </div>
//       <Table bordered hover style={{ tableLayout: "fixed" }}>
        
//           <tr>
//             <th style={{ width: "20%" }}>#</th>
//             <th style={{ width: "20%" }}>photo</th>
//             <th style={{ width: "20%" }}>nameCompany</th>
//             <th style={{ width: "20%" }}>email</th>
//             <th style={{ width: "20%" }}>message</th>
//           </tr>
       
      
         
//             <ProfileCompanyRow key={profile.company} profilecompany={profile.company} />
      
      
//       </Table>
//       <ProfileCompanyAddModal show={show} setShow={setShow} />
//     </>
//   )
// }
// export default ProfileCompany


function ProfileCompany() {
  const { profile } = useContext(SQBContext)

  if (!profile) return <h1>Loading...</h1>
  return (
    
    
    <Container>
       <h1 style={{ marginTop: 10 }}>ProfileCompany</h1>
     <div style={{ display: "flex", justifyContent: "flex-end" }}>
        
      </div>
       
          <img variant="top" src={profile.photo} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
          <h1>{profile.nameCompany}</h1>
          <p>{profile.email}</p>
          {/* < key={profile.company} profilecompany={profile.company} /> */}
    
    </Container>
  )
}
export default ProfileCompany


