import Head from 'next/head';
import { useRouter } from 'next/router';
import { InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Menus from '@/components/pages/menus';
import { categoryData, lessonData } from '@/data';
import { buildCategories } from '@/repositories';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = () => {
  const categories = buildCategories(categoryData, lessonData);

  return {
    props: { categories },
  };
};

const MenusPage: NextPage<Props> = ({ categories }) => {
  const router = useRouter();
  const transitToLessonsPage = (): void => {
    router.push('/lessons');
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>メニュー | Stock Word</title>
        <meta name="keywords" content="セキュリティ, 英単語, 学習" />
      </Head>
      <NextSeo
        openGraph={{
          url: 'https://stock-word.vercel.app/menus',
        }}
      />
      <Menus
        categories={categories}
        transitToLessonsPage={transitToLessonsPage}
      ></Menus>
    </>
  );
};

export default MenusPage;
