import React, { PureComponent } from 'react';

import { Layout, SEO } from '../components/elements';

class AboutPg extends PureComponent {
  render() {
    return (
      <Layout>
        <SEO title="About" />
        <h1>About Page</h1>
      </Layout>
    );
  }
}

export default AboutPg;
