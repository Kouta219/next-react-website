import Layout  from "components/layout"

function Myapp({
    Component,pageProps}){
        return(
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        )
    }