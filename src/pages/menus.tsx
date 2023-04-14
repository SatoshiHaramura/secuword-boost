import Head from 'next/head';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Menus from '@/components/pages/menus';
import { categoryData, lessonData } from '@/data';
import { buildCategories } from '@/repositories';
import { CategoryWithLessons, UserSetting } from '@/types';

type Props = {
  categories: CategoryWithLessons[];
  localStorage: {
    userSetting: UserSetting;
    setUserSetting: (userSetting: UserSetting) => void;
  };
};

export const getStaticProps = () => {
  const categories = buildCategories(categoryData, lessonData);

  return {
    props: { categories },
  };
};

const MenusPage: NextPage<Props> = ({ categories, localStorage }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>メニュー | Stock Word</title>
        <meta
          name="description"
          content="セキュリティに関する英文記事を読むセキュリティエンジニア向けの英単語学習サービス。出題する英単語の品詞を選択します。"
        />
        <meta name="keywords" content="セキュリティ, 英単語, 学習" />
      </Head>
      <NextSeo
        openGraph={{
          url: 'https://stock-word.vercel.app/menus',
        }}
      />
      <Menus categories={categories} localStorage={localStorage}></Menus>
    </>
  );
};

export default MenusPage;
