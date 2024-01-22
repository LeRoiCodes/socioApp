import { Box } from '@mui/material'
import styled from '@mui/system'


// function WidgetWrapper() {
//   return (
//     <div>WidgetWrapper</div>
//   )
// }

// export default WidgetWrapper

const WidgetWrapper = styled(Box)(({theme}) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem",
    backgroundColor: theme.palette.background.alt,
    borderRadius: "0.75rem"
}))

export default WidgetWrapper