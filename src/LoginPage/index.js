// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const history = useHistory();

//   const handleLogin = () => {
//     // check login credentials with backend here, set message accordingly
//     setMessage('Login successful!');
//     setTimeout(() => {
//       history.push('/');
//     }, 2000);
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form onSubmit={handleLogin}>
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default LoginPage;