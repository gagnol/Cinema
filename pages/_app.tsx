
import type { AppProps } from 'next/app'

import '../styles/globals.css';

export default function App({ 
  Component, 
  pageProps: {
  
    ...pageProps
  }
}: AppProps) {
  return (
    
        <Component {...pageProps} />
   
  )
}
