import React, { Component } from 'react';
import { Grid, Cell, Footer,FooterLinkList,FooterDropDownSection,FooterSection } from 'react-mdl';

class Blog extends Component {
  render() {
    return(
      <div style={{ width: '100%', margin: 'auto', height: '75%' }}>
      <Grid className="landing-grid">
        <Cell col={12}>
       
          <div className="banner-text">
            <h1>Blog Posts</h1>
          </div>
        </Cell>
     </Grid>
     <Footer size="mega">
  <FooterSection type="middle">
      <FooterDropDownSection title="Features">
          <FooterLinkList>
              <a href="_blank">About</a>
              <a href="_blank">Terms</a>
              <a href="_blank">Partners</a>
              <a href="_blank">Updates</a>
          </FooterLinkList>
      </FooterDropDownSection>
      <FooterDropDownSection title="Details">
          <FooterLinkList>
              <a href="_blank">Specs</a>
              <a href="_blank">Tools</a>
              <a href="_blank">Resources</a>
          </FooterLinkList>
      </FooterDropDownSection>
      <FooterDropDownSection title="Technology">
          <FooterLinkList>
              <a href="_blank">How it works</a>
              <a href="_blank">Patterns</a>
              <a href="_blank">Usage</a>
              <a href="_blank">Products</a>
              <a href="_blank">Contracts</a>
          </FooterLinkList>
      </FooterDropDownSection>
      <FooterDropDownSection title="FAQ">
          <FooterLinkList>
              <a href="_blank">Questions</a>
              <a href="_blank">Answers</a>
              <a href="_blank">Contact Us</a>
          </FooterLinkList>
      </FooterDropDownSection>
  </FooterSection>
  <FooterSection type="bottom" logo="Title">
      <FooterLinkList>
          <a href="_blank">Privacy & Terms</a>
      </FooterLinkList>
  </FooterSection>
</Footer>
    </div>
    )
  }
}
export default Blog;