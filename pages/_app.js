import '../styles/globals.css'
import '../styles/product.css'
import 'bootstrap/dist/css/bootstrap.css'
import SSRProvider from 'react-bootstrap/SSRProvider'

export default function App({ Component, pageProps }) {
  return <SSRProvider><Component {...pageProps} /></SSRProvider>

}



