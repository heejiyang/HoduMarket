import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={login} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
