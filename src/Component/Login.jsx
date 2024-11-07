import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      dispatch(setUser(savedUser));
      navigate('/dashboard');
    }
  }, [dispatch, navigate]);

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem('username', username); // Save user in local storage
      dispatch(setUser(username));
      navigate('/dashboard');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
        Login
      </Button>
    </Container>
  );
}

export default Login;
