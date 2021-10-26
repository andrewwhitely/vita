import Footer from '../components/footer';
import Head from 'next/head'

export default function Home() {
  return (
    <div className="dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Andrew Whitely | Projects</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/face-with-raised-eyebrow_1f928.png" />
      </Head>

      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">projects</h1>
        
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <p>none yet :/</p>
        </div>

      </div>
      <Footer></Footer>
    </div>
  )
}
