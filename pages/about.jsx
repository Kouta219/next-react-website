import Meta from '../components/meta/meta'
import Container from  "../components/container/container"
import Hero from  "components/Hero/Hero"
import PostBody from '../components/post-body/post-body'
import Contact from "../components/contact/contact"
import { TwoColumn,TwoColumnMain, TwoColumnSidebar } from "../components/two-column/two-column"
import Image from 'next/image'
import eyecatch from '../components/images/about.jpg'


export default function About(){
    return (
        <Container>
            <Meta pageTitle="アバウト" pageDesc="About development activities"
            pageImg={eyecatch.src}
            pageImgW={eyecatch.width}
            pageImgH={eyecatch.height}
            />
        <Hero
        title="About"
        subtitle="About development activities"
        />
        <figure>
            <Image
            src={eyecatch}
            alt=""
            layout="responsive"
            sizes="(min-width:1152px) 1152px,100vw"
            priority
            placeholder="blur"
            />
        </figure>
        <TwoColumn>
            <TwoColumnMain>
        <PostBody>
            <p>Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、
                様々な技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けます。
            </p>
            <h2>モノづくりで目指していること</h2>
                <p>モノづくりではデータの解析からクリエイティブで幅広いことを担当しています。新しいことを取り入れながら、
                ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供がが数多くありますが、
                時にそこを磨く作業に力を入れています。
                </p>
            <p>単純に形するだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらモノづくりをしています。
                毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にある
                モヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
                <p>今までと違うものを作ることに愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから
                取り入れて、いいものを作れるようにしています。小さなヒントから新しいものを生み出すような
                モノづくりは、これからも続けていきたいです。
                </p>
        </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
            <Contact/>
        </TwoColumnSidebar>
        </TwoColumn>
        </Container>
        )
}