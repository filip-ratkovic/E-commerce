import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import {NavBar, Feed, SearchFeed, VideoDetail, ChannelDetail} from './components'


const App = () => (
<BrowserRouter>
<Box >
  <NavBar/>

  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/video/:id" element={<VideoDetail/>} />
    <Route path="/channel/:id" element={<ChannelDetail/>} />
    <Route path="/" element={<Feed />} />
    <Route path="/search/:searchTerm" element={<SearchFeed/>} />
  </Routes>

</Box>
</BrowserRouter>
) 

export default App