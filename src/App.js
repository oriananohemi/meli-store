import Router from './router/Router';
import './assets/styles/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Router/>
      <Footer/>
    </>
  );
}

export default App;
