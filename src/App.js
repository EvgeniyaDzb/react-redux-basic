import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const addCash = () => {
    dispatch({type:"ADD_CASH", payload: 5})
  }

  const getCash = () => {
    dispatch({type:"GET_CASH", payload: 5})
  }

  return (
    <div className="App">
      <div className='cashDiv'>{cash}</div>
      <div className='buttonsDiv'>
        <button onClick={() => addCash()}>Top up your account</button>
        <button onClick={() => getCash()}>Withdraw money from the account</button>
      </div>
    </div>
  );
}

export default App;
