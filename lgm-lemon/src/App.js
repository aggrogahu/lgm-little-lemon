import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import * as React from 'react'
import '@fontsource/karla'
import '@fontsource/markazi-text'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </ChakraProvider>
  )
}

// function App() {
//   return (
//     <>
//     <Header/>
//     <Nav/>
//     <Main/>
//     Homepage
//     <Footer/>
//       </>
//   );
// }

export default App;
