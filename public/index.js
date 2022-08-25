function Spa() {
  const [user, setUser] = React.useState(null)

  return (
    <HashRouter>
      <div>
        <UserContext.Provider value={{ user, setUser }}>
          <NavBar/>
          <div className="container" style={{padding: "20px", display: "flex", justifyContent: "center"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
