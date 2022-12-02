import Layout from "components/Layout/Layout"

function Myapp ({Component,pageProps}){
  return(
    <Layout>
      <Component  {...pageProps}/>
    </Layout>
  )
}

export default Myapp