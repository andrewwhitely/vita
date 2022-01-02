import Footer from '../components/footer';
import Head from 'next/head'

function pick() {
  let cookbooks = ['The Food Lab', 'Cravings, Hungry for More', 'Josh Weissman', 'Skinnytaste', 'FTD', 'HBH (Yellow)', 'HBH (Brown)', 'Matty (White)', 'Matty (Yellow)', 'Well Plated'];

  let book = (cookbooks[Math.floor(Math.random() * cookbooks.length)]);

  return book; 
}

export default function About() {
  return (
    <div className="dark:bg-dark-grey dark:text-white flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Andrew Whitely | Cookbook Selector</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/face-with-raised-eyebrow_1f928.png" />
      </Head>

      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">cookbooks</h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full space-y-4">
          <p className='text-xl'>because we're indecisive</p>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full space-y-4">
          <p className='text-xl'>cookbook: {pick()}</p>
        </div>

      </div>
      <Footer></Footer>
    </div>
  )
}
