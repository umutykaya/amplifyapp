import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
//import Footer from '../components/footerpage'

class Contact extends Component {
  render() {
    return (
      <div>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Umut Yalçınkaya</h2>
            <img
              src="https://umutyalcinkaya.s3.eu-west-1.amazonaws.com/images/bye.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4W6RACP2TQUS6ZYK%2F20201130%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20201130T085656Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b1be59a1a98796b33e7bc3ac36fb1234bfe6f9e512f5bc7fb25aeb4dd9c8fbeb"
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              I'm really curios person about technology and innovation.
              Please feel free to chat with me about ideas.
              I believe that innovation valuable whether it has been shared.
            </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <h4>Phone</h4>
              <p><a href="callto://+905340345553">+90 534 034 55 53</a></p>
              <h4>Email</h4>
              <p><a href="mailto:yalcinkayaumut@outlook.com">yalcinkayaumut@outlook.com</a></p>
              <h4>Skype</h4>
              <p><a href="skype:+905340345553?call">live:yalcinkayaumut</a></p>
            </div>
          </Cell>
        </Grid>
       
      </div>
    )
  }
}

export default Contact;
