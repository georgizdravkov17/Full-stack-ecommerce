import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { HomeScreen, LoginScreen, RegisterScreen, ProductsScreen, UsersScreen, NotFoundScreen, ShoppingCardScreen } from './Screens/screens.js';
import { Header, Footer, NavBar } from './Components/components';
import { ProductsProvider } from './Contexts/productsContext.js';
import { UsersProvider } from './Contexts/usersContext';
import { ShoppingCardProvider } from './Contexts/shoppingCardContext.js';
import './App.css';

function App() {
  return (
    <Router>
      <ProductsProvider>
        <UsersProvider>
          <ShoppingCardProvider>
    <div className="App">
      <NavBar />
       <Routes>
           <Route exact path="/" element={<HomeScreen />} />
           <Route exact path="/home" element={<HomeScreen />} />
           <Route exact path="/products" element={<ProductsScreen />} />
           <Route exact path="/shopping-card" element={<ShoppingCardScreen />} />
           <Route exact path="/users" element={<UsersScreen />} />
           <Route exact path="/login" element={<LoginScreen />} />
           <Route exact path="/register" element={<RegisterScreen />} />
           <Route path="/*" element={<NotFoundScreen />}/>
       </Routes>
       <Footer />
    </div>
    </ShoppingCardProvider>
    </UsersProvider>
    </ProductsProvider>
    </Router>
  );
}

export default App;
