
import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import Footer from '../Footer/Footer.js';

const Layout = React.createClass({

  getInitialState () {
    return {
      mobileMenuOpen: false,
      mobile: true,
      linkState: [
        {
          name: "Home",
          href: "/",
          show: true
        }, {
          name: "Videos",
          href: "/videos",
          show: true
        }, {
          name: "Merch",
          href: "/merch" ,
          show: true   
        }, {
          name: "Photos",
          href: "/photos",
          show: true
        }, {
          name: "Tour",
          href: "/tour",
          show: true
        }
      ]
    };
  },

  componentDidMount () {
    if (!matchMedia('(max-width: 768px)').matches) {
      this.setState({ mobile: false });
    } 
  },

  componentWillUnmount () {
    setScroll();
  },

  toggleMenu (e) {
    this.setScroll();
    this.setState({mobileMenuOpen: !this.state.mobileMenuOpen});
    this.linksIn();
  },

  linksIn () {
    let start, length, newLinks;

    start = 0;
    newLinks = this.state.linkState.slice();
    length = newLinks.length;
    
    const stagger = (i) => {
      if (i < length) {
        setTimeout(() => {
          newLinks[i].show = !newLinks[i].show;
          this.setState({linkState: newLinks});
          stagger(i + 1);
        },70);
      }
    };
    
    stagger(start);
  },

  setScroll () {

    const handle = function handle (e) {
      e.preventDefault();
    }

    if (this.state.mobileMenuOpen) {
      document.body.style.overflow = null;
      document.body.ontouchmove = null;

    } else {
      document.body.style.overflow = "hidden";
      document.body.ontouchmove = handle;
    }
  },


  render () {

    return (  
      <div className="layout-wrapper">
        <div className="layout">
        <Navigation 
          mobile={this.state.mobile}
          mobileMenuOpen={this.state.mobileMenuOpen}
          toggleMenu={this.toggleMenu}
          linkState={this.state.linkState}
        />
          {this.props.children}
        <Footer mobile={this.state.mobile} />
        </div>
      </div>
    );
  }
});


Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
