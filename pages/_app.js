import '../styles/globals.css'
import TopHeader from '../component/TopHeader'
function MyApp({ Component, pageProps }) {
  return(
  <>
  <TopHeader/> 
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
