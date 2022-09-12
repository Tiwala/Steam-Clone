import Head from 'next/head'
import Layout from '../components/Layout'
import {RecoilRoot} from 'recoil';
import MainBody from '../components/MainBody';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Steam Clone App</title>
        <meta name="description" content="Generated by create next app" />
        <link  href="http://fonts.cdnfonts.com/css/motiva-sans"  rel="stylesheet"></link>
      </Head>
      <MainBody />
    </div>
  )
}
