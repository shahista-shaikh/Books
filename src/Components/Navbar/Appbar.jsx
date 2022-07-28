import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import {Link} from 'react-router-dom';


export default function Appbar() {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{background:"#063970"}}>
            <Toolbar>
            <LibraryBooksIcon/>
            <Tabs textColor="inherit" value={value} onChange={(e,value)=>setValue(value)} indicatorColor="secondary">
                <Link style={{textDecoration:"none",color:'white'}} to='/StudentForm'><Tab label="Add Student"/></Link>
                <Link style={{textDecoration:"none",color:'white'}} to='/Addnewbook'><Tab label="Add Book"/></Link>
                <Link style={{textDecoration:"none",color:'white'}} to='/StudentList'><Tab label="Students List"/></Link>
                <Link style={{textDecoration:"none",color:'white'}} to='/BookList'><Tab label="Books List"/></Link>
                <Link style={{textDecoration:"none",color:'white'}} to='/Student'><Tab label="Student"/></Link>
                <Link style={{textDecoration:"none",color:'white'}} to='/BookData'><Tab label="Book"/></Link>
            </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}
