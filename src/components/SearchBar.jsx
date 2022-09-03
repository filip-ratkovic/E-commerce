import {useState} from 'react'
import {Navigation} from 'react-router-dom'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'
function SearchBar() {
  return (
    <Paper>
        <input
        placeholder="Search..."
        onChange={()=> {}}
        />
        <IconButton>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar