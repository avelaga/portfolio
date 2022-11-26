import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import './layout.scss'

export class Navbar extends Component {
  constructor(props) {
    super(props);

    if (this.props.activeLink === "HOME" || !this.props.mobile) {
      this.state = {
        collapsed: false
      };
    } else {
      this.state = {
        collapsed: true
      };
    }
  }

  onClick = (event) => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const activeStyle = {
      backgroundColor: 'black',
      color: 'white',
      width: '160px'
    }

    const activeMobileStyle = {
      backgroundColor: 'black',
      color: 'white',
      width: '203px'
    }

    const activeTextStyle = {
      color: 'white',
    }
    const black = {
      color: 'black'
    }

    const photoPages = [
      'PHOTO',
      'PORTFOLIO',
      'MIAMI',
      'USERVOID',
      'PUBLISHED'
    ]

    return (
      <div className={!this.state.collapsed && this.props.activeLink != "HOME" ? "nav-back" : ""} >
        <div className={this.state.collapsed && (this.props.activeLink != "PHOTO" && this.props.activeLink != "MIAMI" && this.props.activeLink != "PORTFOLIO" && this.props.activeLink != "USERVOID" && this.props.activeLink != "HOME" && this.props.activeLink != "PUBLISHED") ? "header-back" : {}} >
        <div className="navbar">
          <div>

            {/* desktop  */}
            < MediaQuery minDeviceWidth={500} >
              <a href="/"><div className="nav-title" >ABHI VELAGA</div></a>
            </MediaQuery>

            {/* mobile  */}
            < MediaQuery maxDeviceWidth={500} >
              <div className="nav-header">
                <a href="/"><div className="nav-title" >ABHI VELAGA</div></a>

                {this.state.collapsed && <div className="menu-button" onClick={this.onClick}>+ MENU</div>}

                {!this.state.collapsed && <div className="menu-button" onClick={this.onClick}>- MENU</div>}

              </div>
            </MediaQuery>
          </div>

          <div className="subtitle">austin, tx.</div>

          {!this.state.collapsed &&
            <div className="appear">
              <a href="/about">
                <div className="link">
                  <div className="link-color" style={this.props.activeLink === "ABOUT" ? activeStyle : {}}></div>
                  <div className="link-text" style={this.props.activeLink === "ABOUT" ? activeTextStyle : {}}>
                    <div>ABOUT</div>
                  </div>
                </div>
              </a>

              <a href="/portfolio">
                <div className="link">
                  <div className="link-color" style={this.props.activeLink === "PHOTO" ? activeStyle : {}}></div>
                  <div className="link-text" style={this.props.activeLink === "PHOTO" ? activeTextStyle : {}}>
                    <div>PHOTO</div>
                  </div>
                </div>
              </a>

              {photoPages.includes(this.props.activeLink) && 
              <div>
                <a href="/portfolio">
                  <div className='submenu link'>
                    <div className="submenu-color" style={this.props.activeLink === "PORTFOLIO" ? activeStyle : {}}/>
                    <div className="link-text" style={this.props.activeLink === "PORTFOLIO" ? black : {}}>
                      <div>portfolio</div>
                    </div>
                  </div>
                </a>
                <a href="/miamivice">
                  <div className='submenu link'>
                    <div className="submenu-color" />
                    miami vice cocaine dream
                  </div>
                </a>
                <a href="/uservoid">
                  <div className='submenu link'>
                    <div className="submenu-color" />
                    user void
                  </div>
                </a>
                <a href="/published">
                  <div className='submenu link'>
                    <div className="submenu-color" />
                    published work
                  </div>
                </a>
              </div>
              }
              <a href="/music">
                <div className="link">
                  <div className="link-color" style={this.props.activeLink === "MUSIC" ? activeStyle : {}}></div>
                  <div className="link-text" style={this.props.activeLink === "MUSIC" ? activeTextStyle : {}}>
                    <div>MUSIC</div>
                  </div>
                </div>
              </a>

              <a href="/software">
                <div className="link">
                  < MediaQuery minDeviceWidth={500} >
                    <div className="link-color" style={this.props.activeLink === "SOFTWARE" ? activeStyle : {}}></div>
                  </ MediaQuery>
                  < MediaQuery maxDeviceWidth={500} >
                    <div className="link-color" style={this.props.activeLink === "SOFTWARE" ? activeMobileStyle : {}}></div>
                  </ MediaQuery>
                  <div className="link-text" style={this.props.activeLink === "SOFTWARE" ? activeTextStyle : {}}>
                    <div>SOFTWARE</div>
                  </div>
                </div>
              </a>

              <a href="/hi">
                <div className="link">
                  <div className="link-color" style={this.props.activeLink === "HI" ? activeStyle : {}}></div>
                  <div className="link-text" style={this.props.activeLink === "HI" ? activeTextStyle : {}}>
                    <div>SAY HI</div>
                  </div>
                </div>
              </a>

              <div className="external-link"></div>

              <a href="https://open.spotify.com/artist/7JCVu8JTFAFrHqnYnGVPhi?si=wAs1clwUTiqOqS8e8RUJqg" target="_blank">
                <div className="external-link">SPOTIFY</div>
              </a>
              <a href="https://www.instagram.com/abhi.velaga/" target="_blank">
                <div className="external-link">INSTAGRAM</div>
              </a>

              <a href="https://www.instagram.com/abhi.film/" target="_blank">
                <div className="external-link">PHOTO INSTAGRAM</div>
              </a>

              <a href="youtube.com/@abhi.velaga" target="_blank">
                <div className="external-link">YOUTUBE</div>
              </a>

              <a href="mailto:abhinav.velaga@utexas.edu"><div className="external-link">CONTACT</div></a>
            </div>
          }

        </div>
      </div >
      </div>
    )
  }
}

export default Navbar

