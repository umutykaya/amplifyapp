import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Footer, FooterSection, FooterLinkList } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div style={{ width: '100%', margin: 'auto', height: '75%', padding: '0' }}>
          <Grid>
            <Cell col={4}>
              {/* Project 1 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>

              {/* Project 2 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell>

              {/* Project 3 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={4}>
              {/* Project 1 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>

              {/* Project 2 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell>

              {/* Project 3 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div style={{ width: '100%', margin: 'auto', height: '75%', padding: '0' }}>
          {/* <h1>This is Java</h1> */}
          <Grid>
          <Cell col={4}>
              {/* Project 1 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(https://download.logo.wine/logo/Spring_Framework/Spring_Framework-Logo.wine.png) center / cover'}}>Spring Framework</CardTitle>
                <CardText>
                  Spring Boot React sample Employee application
            </CardText>
                <CardActions border>
                  <Button colored>Article</Button>
                  <Button colored><a href="https://github.com/umutykaya/spring-boot-react">Github</a></Button>
                  <Button colored><a href="http://spring.umutykaya.com">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>

              {/* Project 2 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell>

              {/* Project 3 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={4}>
              {/* Project 1 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>

              {/* Project 2 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell>

              {/* Project 3 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div style={{ width: '100%', margin: 'auto', height: '75%', padding: '0' }}>
          {/* <h1>This is Java</h1> */}
          <Grid>
          <Cell col={4}>
              {/* Project 1 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(https://download.logo.wine/logo/Spring_Framework/Spring_Framework-Logo.wine.png) center / cover'}}>Spring Framework</CardTitle>
                <CardText>
                  Spring Boot React sample Employee application
            </CardText>
                <CardActions border>
                  <Button colored>Article</Button>
                  <Button colored><a href="https://github.com/umutykaya/spring-boot-react">Github</a></Button>
                  <Button colored><a href="http://spring.umutykaya.com">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>

              {/* Project 2 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell>

              {/* Project 3 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={4}>
              {/* Project 1 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>

              {/* Project 2 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell>

              {/* Project 3 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div style={{ width: '100%', margin: 'auto', height: '75%', padding: '0' }}>
          {/* <h1>This is Java</h1> */}
          <Grid>
          <Cell col={4}>
              {/* Project 1 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(https://download.logo.wine/logo/Spring_Framework/Spring_Framework-Logo.wine.png) center / cover'}}>Spring Framework</CardTitle>
                <CardText>
                  Spring Boot React sample Employee application
            </CardText>
                <CardActions border>
                  <Button colored>Article</Button>
                  <Button colored><a href="https://github.com/umutykaya/spring-boot-react">Github</a></Button>
                  <Button colored><a href="http://spring.umutykaya.com">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>

              {/* Project 2 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell>

              {/* Project 3 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={4}>
              {/* Project 1 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>

              {/* Project 2 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell>

              {/* Project 3 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{color: 'rgb(63,81,181)', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: 'rgb(63,81,181)' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Python</Tab>
          <Tab>Java</Tab>
          <Tab>Typescript</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
        <Footer size="mega" className="footer-list">
          <FooterSection type="bottom">
            <FooterLinkList>
            </FooterLinkList>
          </FooterSection>
          <FooterSection type="bottom">
            <FooterLinkList>
            </FooterLinkList>
          </FooterSection>
          <FooterSection type="bottom" >
            <FooterLinkList className="footer-part">
            © {new Date().getFullYear()} Built with ♥️ by
            {` `}
            <a href="https://umutykaya.com/">umutyalcinkaya</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>
    )
  }
}

export default Projects;
