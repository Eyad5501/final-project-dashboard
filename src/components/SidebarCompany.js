import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import MovieCreationIcon from "@mui/icons-material/MovieCreation"
import AddReactionIcon from "@mui/icons-material/AddReaction"
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import GroupIcon from "@mui/icons-material/Group"
import TheatersIcon from "@mui/icons-material/Theaters"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import { useContext } from "react"
import SQBContext from "../utils/SQBContext"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import BusinessIcon from "@mui/icons-material/Business"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logoutCompany } = useContext(SQBContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(5, 30, 52)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <TheatersIcon />
            </ListItemIcon>
            <ListItemText primary="My company dashboard" />
          </ListItem>
        </List>
        <List>
          <Link to="/employees">
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="employeeCompany" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Link to="/orders">
          <ListItem button>
            <ListItemIcon>
              <AddReactionIcon />
            </ListItemIcon>
            <ListItemText primary="OrderCompany" sx={{ color: "white", textDecoration: "none" }} />
          </ListItem>
        </Link>

        <List>
          <Link to="/profileCompany">
            <ListItem button>
              <ListItemIcon>
                <RecentActorsIcon />
              </ListItemIcon>
              <ListItemText primary="profileCompany" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        {localStorage.tokenDashboardAdmin ? (
          <List style={{ marginTop: "auto" }}>
            <Link to="/loginCompany">
              <ListItem button onClick={logoutCompany}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logoutCompany" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        ) : (
          <List style={{ marginTop: "auto" }}>
            <Link to="/loginCompany">
              <ListItem>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="loginCompany" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        )}
      </Drawer>
    </ThemeProvider>
  )
}