import Meta from '../components/meta/meta'
import Container from  "../components/container/container"
import Hero from  "components/Hero/Hero"

export default function Blog(){
    return (
        <Container>
            <Meta pageTitle="ブログ"/>
        <Hero
        title="Blog"
        subtitle="Recent Posts"
        />
        </Container>
    )
}