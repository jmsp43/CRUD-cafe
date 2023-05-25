import React from "react";
import LoginForm from "../../components/Login/LoginForm";
import SignUpForm from "../../components/SignUp/SignUpForm";

export default function AuthPage({ user, setUser }) {
  return (

    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm />

      {/* {user ? <LoginForm/> : <SignUpForm setUser = {setUser}/>} */}
    </main>
  );
}
