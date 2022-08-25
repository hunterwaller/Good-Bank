function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const {user, setUser} = React.useContext(UserContext)
  
  if(user == null){
    return(
      <Card
        bgcolor="danger"
        header="Access Denied"
        status="Please Sign-in to Continue">
        </Card>
    )
  }

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm user={user} setUser={setUser} setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg user={user} setUser={setUser} setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
  const [amount, setAmount] = React.useState('');

  function handle(){
    fetch(`/account/update/${props.user.email}/-${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(`$${amount} has been removed from ${data.value.name}'s account!`);
            props.setUser(data.value);
            props.setShow(false);
            console.log('JSON:', data.value);
        } catch(err) {
            props.setStatus('Deposit failed')
            console.log('err:', text);
        }
    });
  }


  return(<>

    Withdraw from: {props.user.name}<br/>

    Amount<br/>
    <input 
      type="number" 
      min="0"
      max={props.user.balance}
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Withdraw</button>

  </>);
}
