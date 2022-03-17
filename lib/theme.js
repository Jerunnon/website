import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode("#F0E7DB", "#24343A")(props)
        }
    })
};

const components = {
    Heading: {
      variants: {
        'section-title': {
          textDecoration: 'underline',
          fontSize: 20,
          textUnderlineOffset: 6,
          textDecorationColor: '#525252',
          textDecorationThickness: 4,
          marginTop: 3,
          marginBottom: 4
        }
      }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
};

const fonts = {
    heading: "Fredoka, Open-Sans"
};

const colors = {
    grassTeal: "#88ccca"
};

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
};

const theme = extendTheme({ styles, components, fonts, colors, config });
export default theme;