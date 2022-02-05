import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { addCashAction, getCashAction } from './store/cashReducer';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div>Balance {cash}</div>
      <div className='buttonsDiv'>
        <button onClick={() => addCash(Number(prompt()))}>Top up your account</button>
        <button onClick={() => getCash(Number(prompt()))}>Withdraw money from the account</button>
        <button onClick={() => addCustomer(prompt())}>Add customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Get all customers from database</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div onClick={() => removeCustomer(customer)} className='customerName'>{customer.name}</div>
          )}
        </div>
        : <div>No clients</div>
      }

    </div>
  );
}

export default App;
