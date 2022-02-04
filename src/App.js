import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);

  const addCash = (cash) => {
    dispatch({type:"ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type:"GET_CASH", payload: cash})
  }

  return (
    <div className="App">
      <div className='cashDiv'>{cash}</div>
      <div className='buttonsDiv'>
        <button onClick={() => addCash(Number(prompt()))}>Top up your account</button>
        <button onClick={() => getCash(Number(prompt()))}>Withdraw money from the account</button>
      </div>
    </div>
  );
}

export default App;
