import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <ul>
        <li>
          <Link href='about'>ABOUT</Link>
        </li>
        <li>
          <Link href='post'>POST</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
