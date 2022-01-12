import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import AppBar from "@mui/material/AppBar"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
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
import { FiUser } from "react-icons/fi";
import MenuBookIcon from "@mui/icons-material/MenuBook"
import BusinessIcon from "@mui/icons-material/Business"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logoutEmployee } = useContext(SQBContext)
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
              <FiUser />
            </ListItemIcon>
            <ListItemText primary="My companise dashboard" />
          </ListItem>
        </List>
        <Link to="/orders">
          <ListItem button>
            <ListItemIcon>
              <AddReactionIcon />
            </ListItemIcon>
            <ListItemText primary="orders" sx={{ color: "white", textDecoration: "none" }} />
          </ListItem>
        </Link>
        <List>
          <Link to="/profileEmployee">
            <ListItem button>
              <ListItemIcon>
                <RecentActorsIcon />
              </ListItemIcon>
              <ListItemText primary="profileEmployee" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to="/studies">
            <ListItem button>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="studies" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        {localStorage.tokenDashboardAdmin ? (
          <List style={{ marginTop: "auto" }}>
            <Link to="/loginEmployee">
              <ListItem button onClick={logoutEmployee}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logoutEmployee" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        ) : (
          <List style={{ marginTop: "auto" }}>
            <Link to="/loginEmployee">
              <ListItem>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="loginEmployee" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        )}
      </Drawer>
    </ThemeProvider>
  )
}
