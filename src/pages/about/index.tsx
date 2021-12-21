import { NextPage } from 'next';
import React from 'react';
import Intro from 'shared/components/Templates/Intro';
import Layout from 'shared/components/Templates/Layout';

const About: NextPage = () => {
  return (
    <Layout>
      <Intro />
    </Layout>
  );
};

export default About;
