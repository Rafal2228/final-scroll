import React from 'react';
import ReactDOM from 'react-dom';
import { Scroll } from './scroll/scroll.jsx';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.getContacts(1);
  }

  render() {
    return (
      <div className="app-container">
        <Scroll contacts={this.state.contacts}/>
      </div>
    );
  }

  getContacts(page) {
    var url = new URL('http://localhost:9000/contact');
    url.searchParams.append('page', page);

    return fetch(url)
      .then((res) => {
        const { headers } = res;
        return res.json();
      })
      .then((contacts) => {
        this.setState({
          contacts: [...this.state.contacts, contacts]
        });
      });
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
