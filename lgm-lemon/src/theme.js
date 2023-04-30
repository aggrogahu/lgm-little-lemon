import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: `'Markazi Text', serif`,
        body: `'Karla', sans-serif`,
    },
    colors: {
        pGreen: "#495e57",
        pYellow: "#f4ce14",
        sPeach: '#ee9972',
        sSkin: '#fbdabb',
        sGray: '#edefee',
        sDGray: '#333333',
    },
    components: {
        Button: {
            variants: {
                'lnav': {
                bg: 'pGreen',
                },
            },
        },
    },
})

export default theme