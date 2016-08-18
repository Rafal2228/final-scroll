import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollContent } from './scroll-content/scroll-content.jsx';
import './scroll.scss';

export class Scroll extends React.Component {
  constructor(props) {
    super(props);
  }

  calculate() {
    console.log('calc');
  }

  componentDidMount() {
    window.requestAnimationFrame(() => {
      const element = ReactDOM.findDOMNode(this);
      element.addEventListener('scroll', this.scrollHandler);
      this.calculate();
    });
  }

  componentDidUpdate() {
    window.requestAnimationFrame(() => {
      const element = ReactDOM.findDOMNode(this);
      this.calculate();
    });
  }

  componentWillUnmount() {
    window.requestAnimationFrame(() => {
      const element = ReactDOM.findDOMNode(this);
      element.off('scroll', this.scrollHandler);
    });
  }

  render() {
    const { contacts } = this.props;

    let res = contacts.map((arr, index) => (
      arr.map((contact, inner) => (
        <ScrollContent key={`${index}_${inner}`} contact={contact} />
      ))
    ));

    return (
      <div className="scroll-wrapper">
        {res}
      </div>
    );
  }

  scrollHandler(e) {
    const { target } = e;
    console.log(target.getBoundingClientRect());
  }
}
