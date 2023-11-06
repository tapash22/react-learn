import './App.css';
import Footer from './components/Footer';
// import Container1 from './check/Container1';
// import Counter from './counter/Counter';
import Routes from './router';
// import Header from './components/Header';

function App() {
  return (
    <div className="App">
     {/* <h2 className='bg-red-600 text-lg font-bold text-center text-green-500 uppercase'>hi this is react</h2>
     <div>
      <Counter name="tapash" age={30} />
     </div> */}
     {/* <Header /> */}
     <div>
      <Routes />

      <Footer />
      {/* <Container1 /> */}
     </div>
    </div>
  );
}

export default App;
