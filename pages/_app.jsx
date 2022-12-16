import Layout from "../components/Layout/Layout"
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss=false

function Myapp ({Component,pageProps}){
  return(
    <Layout>
      <Component  {...pageProps}/>
    </Layout>
  )
}

export default Myapp