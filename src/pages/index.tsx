import type { NextPage } from 'next';
import { trpc } from '@/utils/trpc';

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['hello', { text: 'from tRPC' }]);

  return (
    <div>
      <h1>
        Create <span>T3</span> App
      </h1>

      <div>
        <h3>This Boilerplate uses:</h3>
        <ul>
          <li>
            <a href="https://nextjs.org" target="_blank" rel="noreferrer">
              Next.js
            </a>
          </li>
          <li>
            <a href="https://trpc.io" target="_blank" rel="noreferrer">
              tRPC
            </a>
          </li>
          <li>
            <a
              href="https://typescriptlang.org"
              target="_blank"
              rel="noreferrer"
            >
              TypeScript
            </a>
          </li>
        </ul>

        <div>{data ? <p>{data.greeting}</p> : <p>Loading..</p>}</div>
      </div>
    </div>
  );
};

export default Home;
