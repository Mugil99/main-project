import {useState} from 'react';
import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link, NavLink } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

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
            <NavLink to='/wathlist'>
                <p className="link">Watchlist</p>
            </NavLink>
            <NavLink to='/dashboard'>
                <p className="link">Dashboard</p>
            </NavLink>
           </div>
          </Drawer>
      
    
    </div>
  );
}