import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return (
      <>
        <header>
          {<Header />}
        </header>
        <main>
          <section>
            {<Page />}
          </section>
        </main>
        <footer>
          {<Footer />}
        </footer>

      </>
    )
  }
}

export default App;
