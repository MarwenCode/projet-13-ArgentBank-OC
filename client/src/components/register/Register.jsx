// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../../redux/authSlice';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import "./register.scss"

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const authState = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(registerUser({ email, password, lastName, firstName }))
      
//       .then(() => {
//         navigate('/login');
//       })
//       .catch((error) => {
//         console.error('Register failed:', error);
//       });
//   };

//   return (
//     <div>
//       <main className="main bg-dark">
//         <section className="sign-in-content">
//           <h1>Sign Up</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="input-wrapper">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="input-wrapper">
//               <label htmlFor="firstName">First Name</label>
//               <input
//                 id="firstName"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </div>
//             <div className="input-wrapper">
//               <label htmlFor="lastName">Last Name</label>
//               <input
//                 id="lastName"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </div>
//             <div className="input-wrapper">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button className="sign-in-button" type="submit">Sign Up</button>
//           </form>
//           {authState.error && <p className="error">{authState.error}</p>}
//           <div className="register">
//             If you have an account, click <Link to="/login">here</Link>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Register;
