import { Box } from '@chakra-ui/react'
import ContentView from '../views/content'

const ContentPage = (props) => {
  //wrapper to provide specific data context etc to View
  return <Box h="100vh" w="100vw">
    <ContentView />
  </Box>
}
export default ContentPage;