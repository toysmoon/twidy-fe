import { NextPage } from 'next';
import React from 'react';
import Intro from 'shared/components/Templates/Intro';
import Layout from 'shared/components/Templates/Layout';

const About: NextPage = () => {
  return (
    <div className="bg-gray1 fixed inset-0">
      <Layout>
        <Intro />
      </Layout>
    </div>
  );
};

export default About;
