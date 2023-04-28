import { useEffect, useState } from 'react';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  const[appState,setAppState] = useState()
  useEffect(()=>{
    
  })
  return <Component appState {...pageProps} />

}
