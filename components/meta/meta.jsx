import Head from 'next/head'
import { useRouter } from 'next/router'

import {siteMeta} from 'lib/constants'
const{siteTitle,siteDesc,siteUrl,siteLang,siteLocale,siteType,siteIcon}=siteMeta

import siteImg from '../images/ogp.jpg'

export default function Meta({pageTitle,pageDesc,pageImg,pageImgW,pageImgH}){
const title=pageTitle ? '${pageTitle}|${siteTitle}':siteTitle
const desc=pageDesc ?? siteDesc 

const router=useRouter()
const url='${siteUrl}${router.asPath}'

const img=pageImg||siteImg.src
const imgW=pageImgW||siteImg.width
const imgH=pageImgH||siteImg.height
const imgUrl=img.startsWith('https') ? img:'${siteUrl}${img}'

    return(
        <Head>
            <title>{title}</title>
            <meta property='og:title' content={title}/>

            <meta name="description" content={desc}/>
            <meta property="og:description"content={desc}/>
            <link rel='canoncial' href={url}/>

            <meta property='og:url' content={url}/>
            <meta property='og:site_name' content={siteTitle}/>
            <meta property='og:site_type' content={siteType}/>
            <meta property='og:site_locale' content={siteLocale}/>

            <link rel='icon' href={siteIcon}/>
            <link rel='apple-touch-icon' href={siteIcon}/>

            <meta property='og:image'content={imgUrl}/>
            <meta property='og:image:width'content={imgW}/>
            <meta property='og:image:height'content={imgH}/>
            <meta property='twitter:card'content="summary_large_image"/>
        </Head>
    )
}