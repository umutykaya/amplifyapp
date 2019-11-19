import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from '../components/footerpage'

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto', height: '75%' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://umutyalcinkaya.s3-eu-west-1.amazonaws.com/images/hi.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Software Engineer</h1>
              <hr></hr>
              <p>HTML/CSS | Java | JavaScript | React | Vue | Swift | Python</p>
            </div>
          </Cell>
       </Grid>
       <Footer></Footer>
       
      </div>
    )
  }
}

export default Landing;
