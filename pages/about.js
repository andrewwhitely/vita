import Footer from '../components/footer';
import Head from 'next/head'

export default function About() {
  return (
    <div className="dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Andrew Whitely | About</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/face-with-raised-eyebrow_1f928.png" />
      </Head>

      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">about</h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full space-y-4">
          <p>i'm andrew whitely - a fullstack software engineer currently working at <a className='text-purple-600 dark:text-purple-400' href='https://capitalone.com/' target='_blank' rel='noopener noreferrer'>Capital One</a> with a focus in web development. outside of work, i'm busy exploring blockchain and web3 technologies and navigating the crypto space through nfts.</p>
          <p>you can view other things i've worked on under my <a className='text-purple-600 dark:text-purple-400' href='/projects'>projects</a> page.</p>
        </div>

      </div>
      <Footer></Footer>
    </div>
  )
}
