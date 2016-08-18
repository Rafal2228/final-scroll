import React from 'react';
import './scroll-content.scss';

export class ScrollContent extends React.Component {
  render() {
    const { contact } = this.props;

    return (
      <div className="scroll-content">
        <span className="scroll-item">{contact.firstName}</span>
        <span className="scroll-item">{contact.lastName}</span>
        <span className="scroll-item">{contact.number}</span>
      </div>
    );
  }
}
