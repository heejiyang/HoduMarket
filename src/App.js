import { BrowserRouter } from 'react-router-dom';
import ProductList from './common/productList/ProductList.Style';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={login} />
        <ProductList />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
