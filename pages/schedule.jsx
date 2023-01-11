import { getPostBySlug } from '../lib/api'
import Container from '../components/container/container'
import PostHeader from '../components/PostHeader/post-header'
import Image from 'next/image'

export default function Schdule({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) {
    return(
        <Container>
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish}/>
                <figure>
                    <Image
                        src={eyecatch.url}
                        alt=""
                        layout="responsive"
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width:1152px) 1152px, 100vw"
                        priority
                    />
                </figure>
            </article>
        </Container>
    )
}


export async function getStaticProps(){
    const slug='schedule'

    const post=await getPostBySlug(slug)

    return{
        props:{
            title:post.titile,
            publish:post.publishDate,
            content:post.content,
            eyecatch:post.eyecatch,
            categories:post.categories,
        },
    }
}