function NavBar(){
  const [show, setShow] = React.useState(true);
  const {user, setUser} = React.useContext(UserContext)

  return(
    <>
      { (user == null) ?
        <LoggedOut user={user} setUser={setUser} show={show} setShow={setShow}/> :
        <LoggedIn user={user} setUser={setUser} setShow={setShow}/>
      }
    </>
    )
}

function LoggedIn(props){

  function Logout(){
    props.setUser(null);
    props.setShow(true);
  };

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">GoodBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">Alldata</a>
          </li>
        </ul>
      </div>
      <button id="logout" className="btn btn-info" onClick={Logout}>Logout</button>
      <h3 style={{margin: '10px', color: 'white'}}>{props.user.email}</h3>
    </nav>
  );
}
    
function LoggedOut(props){

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">GoodBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}