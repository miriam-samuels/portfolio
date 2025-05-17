

import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './tooltip';
import './index.scss';

class TooltipPortal extends React.Component {
  constructor(props) {
    super(props);
    // Create a div that we'll render the tooltip into
    this.el = document.createElement('div');
    this.el.className = 'tooltip-portal-container';
    this.portalRoot = document.getElementById('tooltip-portal-root');
    
    // If portal root doesn't exist, create it
    if (!this.portalRoot) {
      this.portalRoot = document.createElement('div');
      this.portalRoot.id = 'tooltip-portal-root';
      document.body.appendChild(this.portalRoot);
    }
  }

  componentDidMount() {
    // Append the element into the DOM on mount
    this.portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    this.portalRoot.removeChild(this.el);
    
    // If this is the last tooltip portal, clean up the root container
    if (this.portalRoot.children.length === 0) {
      document.body.removeChild(this.portalRoot);
    }
  }

  render() {
    // Use a portal to render the tooltip directly into the document body
    return ReactDOM.createPortal(
      <Tooltip {...this.props} />,
      this.el
    );
  }
}

export default TooltipPortal;