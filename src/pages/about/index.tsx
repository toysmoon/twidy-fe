import Intro from 'shared/components/Templates/Intro';
import Layout from 'shared/components/Templates/Layout';
import { NextPage } from 'next';
import React from 'react';

const About: NextPage = () => {
  return (
    <Layout>
      <Intro />
    </Layout>
  );
};

export default About;
