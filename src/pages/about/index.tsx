import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Intro from 'shared/components/Templates/Intro';
import Layout from 'shared/components/Templates/Layout';

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Intro />
    </Layout>
  );
};

export default About;
