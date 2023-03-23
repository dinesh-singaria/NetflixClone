import "./login.scss"

export default function login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo"/>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign up now.</h1>
              <input type="email" placeholder="Email or Phone no." />
              <input type="password" placeholder="Password" />
              <button className="loginButton">Sign up now.</button>
              <span>New to netflix? <b>Sign up now.</b></span>
              <small>this page is protected by Google reCAPTA to enure you're not a bot. <b>Learn more</b></small>
        </form>
      </div>
    </div>
  )
}
