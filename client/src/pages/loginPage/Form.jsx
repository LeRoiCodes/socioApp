import React, {useState} from 'react'
import { Box, Button, TextField, useMediaQuery, Typography, useTheme } from '@mui/material'
import { EditOutlinedIcon } from '@mui/icons-material/EditOutlined'
import { Formik } from 'formik'
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'
import { UseDispatch, useDispatch } from 'react-redux'
import { setLogin } from '../../redux/redux'
import Dropzone from 'react-dropzone'
import FlexBetween from '../../components/FlexBetween'


const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
})

const loginSchema = yup.object().shape({
  email: yup.email("invalid email").required("required"),
  password: yup.string().required("required"),
})

const initialValueRegister = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  location: '',
  occupation: '',
  picture: ""
}

const initialValueLogin = {
  email: '',
  password: ''
}

function Form() {

  const [page, setPage] = useState("login")
  const {palette} = useTheme()
  const dispatch =  useDispatch()
  const navigate = useNavigate()
  const isNotMobile = useMediaQuery("(min-width:600px)")
  const isLogin = page === "login"
  const isRegister = page === "register"

  const handleFormSubmit = async (values, onSubmitProps) => {

  }

  return (
    <Formik onSubmit={handleFormSubmit} 
    initialValues={isLogin? initialValueLogin : initialValueRegister}
    validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values, errors,touched, handleBLur, handleChange, handleSubmit, setFieldValue, resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box display={"grid"} gap={"30px"} gridTemplateColumns={"repeat(4, minmax(0, 1fr))"} sx={{
            "& > div" : {gridColumn: isNotMobile ? undefined : "sapn 4"}
          }}>

          </Box>
        </form>
      )}
    </Formik>
  )
}

export default Form