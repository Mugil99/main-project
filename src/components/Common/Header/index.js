import React from "react";
import {Switch} from "@mui/material";
import {useEffect,useState} from "react";
import {toast} from "react-toastify";
import './styles.css';
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link, NavLink } from "react-router-dom";

function Header(){
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


    return <div className="navbar">
        <h1 className="logo">
            CryptoTracker<span style={{color:"var(--blue)"}}>.</span>
        </h1>
        <div className="links">
            <Switch
            checked={darkMode}
            onClick={() => {
                changeMode();
            }}
            />
            <NavLink to="/">
                <p className="link">Home</p>
            </NavLink>
            <NavLink to="/compare">
                <p className="link">Compare</p>
            </NavLink>
            <NavLink to="/watchlist">
                <p className="link">Watchlist</p>
            </NavLink>
            <NavLink to="/dashboard">
                <Button text={"Dashboard"}
                onClick={()=>console.log("Btn Clicked")}/>
            </NavLink>
        </div>
        <div className="mobile-drawer">
            <TemporaryDrawer/>
        </div>
    </div>
}
export default Header;