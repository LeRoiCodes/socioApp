import React from 'react'
import { useState } from 'react'
import { Box, IconButton, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery } from '@mui/material'
import { Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { setMode, setLogout } from '../../redux/redux'
import { useNavigate } from 'react-router-dom'
import FlexBetween from '../../components/FlexBetween'


function Navbar() {

  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const isNotMobileScreen = useMediaQuery("(min-width: 1000px)")
  const theme = useTheme()




  return (
    <div>navbar</div>
  )
}

export default Navbar