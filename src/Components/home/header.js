import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import logo from  '../../assets/images/logos.png';
import red from '../../assets/images/red.png';


const pages = ['Home', 'Shop', 'About us' ,'Blog','Contact us','Cart (2)'];
// const settings = ['zerozero', 'Account', 'Dashboard', 'Logout'];

function ResponsivenavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar  sx={{maxWidth:"100vw"}} >
        
        <Toolbar disableGutters className='nav' >

          <Box sx={{flexGrow: 1,textAlign:"center",display: { xs: 'none', md: 'flex' } }}>
       
          <img className='image1'  style={{margin:"auto 251px auto 150px", height:"50px", width:"48px"}} src={logo}/>
          {/* <img className='image2' style={{margin:"auto 101px auto -100px", height:"44px", width:"42px" }} src={red}/>  */}
   
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block'}}
              >
          
              {page}
             
              </Button>  
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <div className='icon' style={{marginRight:100 }} >
              <SearchIcon style={{marginRight:20 }}/><PersonIcon  style={{marginRight:20 }}/><LocalMallIcon  style={{marginRight:20 }}/>
              </div> 
              
              </IconButton>
             
            </Tooltip>
            <Menu
              sx={{ mt: '85px'  }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
           
            </Menu>
          </Box>
        </Toolbar>
  
    </AppBar>
  );
}
export default ResponsivenavBar;