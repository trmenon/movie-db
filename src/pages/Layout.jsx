import React, {useState, useEffect} from "react";
import {Outlet, useNavigate, useLocation} from "react-router-dom";
import { useDispatch } from "react-redux";
import './Layout.styles.scss';

// MUI Imports
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Logo } from "../assets/movie";
import { getMovies } from "../reducers/feature/movieSlice";

export const Layout = ()=> {
    // Globals
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const navigate = useNavigate();
    console.log(pathname);

    // State 
    const [controls, setControls] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(()=> {
        if(pathname === '/') {
            setControls(false);
        }else {
            setControls(true);
        }
    }, [pathname]);
    useEffect(()=> {
        dispatch(getMovies(search));
    }, [search]);

    const navigateHome = ()=> navigate("/");

    return(
        <React.Fragment>
            <div className="layout-wrapper">
                <div className="header">
                    <div className="header-bar">
                        {
                            controls && (
                                <IconButton 
                                    color="secondary" 
                                    onClick={navigateHome}
                                >
                                    <Logo />
                                </IconButton>
                            )
                        }
                        <Typography variant={"h6"} sx={{color: "#464bd8"}}>Movie Database</Typography>
                        {
                            !controls && (
                                <TextField
                                    color="secondary"
                                    label="Search"  
                                    size="small"  
                                    variant="standard"
                                    value={search}
                                    onChange={(event)=> setSearch(event.target.value)}
                                    // InputProps={{
                                    //     endAdornment: <InputAdornment position="end">
                                    //         ...
                                    //         </InputAdornment>,
                                    // }}                                
                                />
                            )
                        }
                    </div>                    
                </div>
                <div className="main"><Outlet/></div>
            </div>
        </React.Fragment>
    )
}