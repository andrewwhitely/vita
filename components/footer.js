export default function Footer() {
  return(
    <footer className="flex items-center justify-center w-full h-24 space-x-10 text-xl">
        <a className="hover:text-purple-600 flex items-center justify-center" href='/'>home</a>
        <a className="hover:text-purple-600 flex items-center justify-center" href='/about'>about</a>
        <a className="hover:text-purple-600 flex items-center justify-center" href='/projects'>projects</a>
        <a className="hover:text-purple-600 flex items-center justify-center" href='https://twitter.com/ndrewwhitely' target='_blank' rel='noopener noreferrer'>twitter</a> 
    </footer>
  );
};

