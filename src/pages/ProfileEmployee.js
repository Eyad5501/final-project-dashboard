import { useContext,useState } from "react"
import SQBContext from "../utils/SQBContext"
import { Button,Container } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import ProfileEmployeeRow from "../components/ProfileEmployeeRow"

function ProfileEmployee() {
  const { profile } = useContext(SQBContext)
  const [show, setShow] = useState(false)
  if (!profile) return <h1>Loading...</h1>
  return (
    <Container>
         <h1 style={{ marginTop: 10 }}>ProfileEmployee</h1>
     <div style={{ display: "flex", justifyContent: "flex-end" }}>
       
      </div>
        
          <img variant="top" src={profile.photo} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        
        {profile.companyid}
        
          <h1>
            {profile.firstName} {profile.lastName}
          </h1>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
          <ProfileEmployeeRow key={profile.Employee} profileEmployee={profile.Employee} />
       
      
    
     
    </Container>
  )
}

export default ProfileEmployee