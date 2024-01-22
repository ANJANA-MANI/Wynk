import React, { useEffect, useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#454545",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
function Header() {

  const[show,setShow]=useState(false)
  useEffect(()=>{
      window.addEventListener("scroll",()=>{
          if(window.scrollY>350)
          {
              setShow(true)
          }
          else{
              setShow(false)
          }
      })
  })
  console.log(show);


  return (
   
<div className={`${show&&'nav-black'} nav`} style={{marginTop:"0px",paddingTop:"0px"}}>

<Box sx={{ flexGrow: 1 ,backgroundColor:"black",marginTop:"0px"}}>
      <AppBar position="static" style={{backgroundColor:"#131313"}}>
        <Toolbar>
        <img
              src='https://wynk.in/assets/icons/icon-192x192.png'
              height='50'
              width='50'
              alt=''
              loading='lazy'
             padding='10px'
            />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Wynk Musik
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Songs"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <SubscriptionsIcon style={{marginLeft:"5px"}}></SubscriptionsIcon>
          <Button color="inherit">Mangae Subscription</Button>|
          
          <Button color="inherit">
            <PersonIcon></PersonIcon>
            Login</Button>
           
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className row style={{display:"flex",
    FlexDirection:"column",
    justifyContent:"space-around",
    height:"60px",
    marginTop:"15px"}}>
        <div></div>
        <div style={{marginTop:"8px"}}><a href=""className='text-white'>All</a></div>
        <div style={{marginTop:"8px"}} ><a href=""className='text-white'>Trending Now</a></div>
        <div style={{marginTop:"8px"}} ><a href=""className='text-white'>Old Songs</a></div>
        <div style={{marginTop:"8px"}}><a href=""className='text-white'>Newer Songs</a></div>
        
        <div>
        <MDBDropdown group className='shadow-0'>
        <MDBDropdownToggle color='black' style={{fontSize:"16px",marginTop:"0px",textTransform: "capitalize"}}>Moods & Genere</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
        </div>
  
    
        <div style={{marginTop:"8px"}}><a href="" className='text-white'>Top Artists</a></div>
        <div>
        <MDBDropdown group className='shadow-0'>
        <MDBDropdownToggle color='black' style={{fontSize:"16px",marginTop:"0px",textTransform: "capitalize"}}>Top Albums</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
        </div>
        <div style={{marginTop:"8px"}}><a href=""className='text-white'>Podcast</a></div>
        <div>
        <MDBDropdown group className='shadow-0'>
        <MDBDropdownToggle color='black' style={{fontSize:"16px",marginTop:"0px",textTransform: "capitalize"}}>Top Playlist</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
        </div>
        <div></div>
      
      </div>
    </Box>
</div>
    
    




  )
}

export default Header