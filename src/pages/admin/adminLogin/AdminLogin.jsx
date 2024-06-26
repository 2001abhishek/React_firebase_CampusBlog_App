import React, { useContext, useEffect, useState } from "react";
import myContext from "../../../context/data/myContext";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../../components/layout/Layout";

export default function AdminLogin() {
  const context = useContext(myContext);
  const { mode } = context;

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Login Function
  const login = async () => {
    if (!email || !password) {
      return toast.error("Fill all required fields");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login Success');
      localStorage.setItem('admin', JSON.stringify(result));
      navigate('/');
    } catch (error) {
      toast.error('Login Failed');
      console.error(error);
    }
  };

  // Google Login Function
  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      toast.success('Login Success with Google');
      localStorage.setItem('admin', JSON.stringify(result));
      navigate('/');
    } catch (error) {
      toast.error('Google Login Failed');
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
  <Layout>
    <section
      style={{ background: mode === 'dark' }}
      className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image" />
      </div>

      <div className="md:w-1/3 max-w-sm">

        <div style={{ color: mode === 'dark' ? 'white' : 'black' }}
          className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">For User</p>
        </div>

        <div class="flex items-center justify-center mt-3 bg-gray- dark:bg-gray-700">
          <button onClick={googleLogin} class="flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
            <span>Continue with Google</span>
          </button>
        </div>


        <div style={{ color: mode === 'dark' ? 'white' : 'black' }}
          className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">For Admin</p>
        </div>

        <input
          label='Email'
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="email" placeholder="Admin Email Address" />
        <input
          label='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span style={{ color: mode === 'dark' ? 'white' : 'black' }}
            >Remember Me</span>
          </label>
        </div>
        <div className="text-center md:text-left">
          <button
            onClick={login}
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
      </div>
    </section>
  </Layout>
  );
}
