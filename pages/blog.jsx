import Meta from '../components/meta/meta'
import Container from  "../components/container/container"
import Hero from  "components/Hero/Hero"

export default function Blog(){
    return (
        <Container>
            <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧"/>
        <Hero
        title="Blog"
        subtitle="Recent Posts"
        />
        </Container>
    )
}