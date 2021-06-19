
import './App.css';
import Filter from './components/Filter';
import ProductListings from './components/ProductListing';

function App() {
  return (
    <>
    <h2>Flipkart </h2>
    <h5>Sort By</h5>
    <div className="flx">
    <Filter/>
    <ProductListings/>
    </div>
    </>

  );
}

export default App;
