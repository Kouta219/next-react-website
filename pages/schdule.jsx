import { getPostBySlug } from '../lib/api'
import Container from '../components/container/container'

export default function Schdule({
    title,
    publish,
    content,
    eyecatch,
    categories
}) {
    return(
        <Container>
            <h1>{title}</h1>
        </Container>
    )
}

import {client} from '../lib/api'

export async function getStaticProps(){
    const slug='schdule'

    const 
}