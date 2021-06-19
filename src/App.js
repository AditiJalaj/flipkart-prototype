import './App.css';
import Filter from './components/Filter';
import ProductListings from './components/ProductListing';
import Context from './context/context'

function App() {
  return (
    <>
    <h2>Wannabe Flipkart </h2>
    

    <Context>
    <Filter/>
    <ProductListings/>
    </Context>
    
    </>

  );
}

export default App;
