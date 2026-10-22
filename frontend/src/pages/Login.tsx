

function Login() {
  return (
    <main>
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={() => { window.location.href = "/intro"; }}>login</button>
    </main>
  );
}

export default Login;