// @flow
import * as React from 'react';
import Page, { SectionHeading, Heading, Subheading } from '../components/Page';
import type { GetInitialProps } from '../types';
import Checklist from '../components/Checklist';
import ShareButtons from '../components/ShareButtons';

class Index extends React.Component<{}> {
  static async getInitialProps({ res }: GetInitialProps) {
    if (res && res.setHeader) {
      // cache podcasts for a month
      const cacheAge = 60 * 60 * 24 * 30;
      res.setHeader('Cache-Control', `public,s-maxage=${cacheAge}`);
    }

    return {};
  }

  render() {
    return (
      <Page>
        <SectionHeading>
          <Heading>Be safe on the internet.</Heading>
          <Subheading>
            An open source collection of resources designed to improve your
            online privacy and security.
          </Subheading>
        </SectionHeading>

        <ShareButtons />

        <Checklist />
      </Page>
    );
  }
}

export default Index;