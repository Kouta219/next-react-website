import Meta from '../components/meta/meta'
import Container from '../components/container/container'
import Hero from'components/Hero/Hero'



export default function Home() {
  return (
      <Container>
        <Meta/>
        <Hero
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
        />
      </Container>
    
  )
}
