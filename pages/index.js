import Head from 'next/head'

export default function Home() {
  return (
    <div className="dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Andrew Whitely</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/face-with-raised-eyebrow_1f928.png" />
      </Head>

      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">andrew whitely</h1>
        <p className="mt-3 text-2xl">frontend engineer</p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a href="/about" className="p-6 mt-6 text-left border w-96 rounded-xl hover:border-purple-600 hover:text-purple-600 focus:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-400 dark:focus:text-purple-400">
            <h3 className="text-2xl font-bold">about</h3>
            <p className="mt-4 text-xl">get to know me &rarr;</p>
          </a>

          <a href="/projects" className="p-6 mt-6 text-left border w-96 rounded-xl hover:border-purple-600 hover:text-purple-600 focus:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-400 dark:focus:text-purple-400">
            <h3 className="text-2xl font-bold">projects</h3>
            <p className="mt-4 text-xl">view past/present work &rarr;</p>
          </a>
        </div> 
      </div>
      
    </div>
  );
};
