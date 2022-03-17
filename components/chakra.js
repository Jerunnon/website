import { ChakraProvider, cookieStorageManager, localStorageManager } from "@chakra-ui/react";
import theme from '../lib/theme'

export default function Chakra({cookies, children }) {

    const colorModeManger = 
    typeof cookies === 'string'
    ? cookieStorageManager(cookies) :
    localStorageManager 

    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManger}>
            {children}
        </ChakraProvider>
    )
};

export async function getServerSideProps({ req }) {
    return {
      props: {
        cookies: req.headers.cookie ?? ''
      }
    }
  }