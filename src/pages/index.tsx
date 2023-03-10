import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Home from '@/components/pages/home';

const HomePage: NextPage = () => {
  const router = useRouter();
  const transitToMenusPage = (): void => {
    router.push(`/menus`);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ホーム | Stock Word</title>
      </Head>
      <Home transitToMenusPage={transitToMenusPage}></Home>
    </>
  );
};

export default HomePage;
