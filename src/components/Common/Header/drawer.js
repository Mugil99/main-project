import {useEffect, useState} from 'react';
import { IconButton, Switch } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [darkMode,setDarkMode]=useState(
    localStorage.getItem("theme") == "dark" ? true : false
    );
    useEffect(()=>{
      if (localStorage.getItem('theme') === 'dark'){
          setDark();
      }else{
          setLight();
      }
    },[]);
  const changeMode=()=>{
    setDarkMode(!darkMode);
    toast.success("Theme Changed");
    const mode=localStorage.getItem("theme");
    if(mode=="dark"){
        setLight();
    }
    else{
        setDark() ;
    }
};

const setDark=()=>{
  localStorage.setItem("theme","dark");
  document.documentElement.setAttribute("data-theme","dark");
}

const setLight=()=>{
  localStorage.setItem("theme","light");
  document.documentElement.setAttribute("data-theme","light");
}
  return (
    <div>
     
          <IconButton onClick={()=>setOpen(true)}>
             <MenuRoundedIcon className='link'/>
          </IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
           <div className='drawer-div'>
           
           <NavLink to='/'>
               <p className="link">Home</p>
            </NavLink>
            <NavLink to='/compare'>
                <p className="link">Compare</p>
            </NavLink>
            <NavLink to='/watchlist'>
                <p className="link">Watchlist</p>
            </NavLink>
            <NavLink to='/dashboard'>
                <p className="link">Dashboard</p>
            </NavLink>

            <Switch
            checked={darkMode}
            onClick={() => {
                changeMode();
            }}
            />
           </div>
          </Drawer>
      
    
    </div>
  );
}