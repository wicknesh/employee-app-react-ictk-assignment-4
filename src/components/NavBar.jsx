import { AppBar, Autocomplete, Box, Button, Toolbar } from "@mui/material"
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor:'#1a1a1a'}}>
          <Toolbar>
            <Link to={'/'}><img src="/public/employeea-white.png" alt="employeea-logo" style={{ width: 150, height: Autocomplete, marginLeft: '1.5rem' }}/></Link>
            <Box sx={{ ml: 'auto' }}>
              <Button sx={{fontSize: '1.3rem', fontFamily: "Oswald", '& .MuiTouchRipple-root': {color: 'white'}}}><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
              <Button sx={{fontSize: '1.3rem', fontFamily: "Oswald", '& .MuiTouchRipple-root': {color: 'white'}, marginLeft: '2em' }}><Link to={'/form'} style={{ textDecoration: 'none', color: 'white' }}>Employee Form</Link></Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default NavBar