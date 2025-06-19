import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';

function Home() {
  return <h2>Home (Product List)</h2>;
}
function Product() {
  return <h2>Product Details</h2>;
}
function Cart() {
  return <h2>Cart</h2>;
}
function Login() {
  return <h2>Login</h2>;
}
function Register() {
  return <h2>Register</h2>;
}

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-commerce
          </Typography>
          <Button color="inherit" href="/cart">Cart</Button>
          <Button color="inherit" href="/login">Login</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
