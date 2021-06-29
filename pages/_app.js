import '../styles/globals.css'
import TopHeader from '../component/TopHeader'
function MyApp({ Component, pageProps }) {
  return(
  <div>
  <TopHeader/> 
  <Component {...pageProps} />
  </div>
  )
}

export default MyApp
