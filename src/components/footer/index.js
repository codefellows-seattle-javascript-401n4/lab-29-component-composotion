import './footer.scss';

import React from 'react';

class Footer extends React.Component {
  
  render() {
    
    return (
      
      <footer>
        <h1>
            {this.props.children}
        </h1>
      </footer>
    )
  }
}

export default Footer;