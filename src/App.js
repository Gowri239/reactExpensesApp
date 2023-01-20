import ExpenseItem from "./components/Expenses/Expenses/ExpenseItem";
import NewExpense from "./components/Expenses/NewExpenses/NewExpenses";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Tirupati'
    },
    { 
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: 'Venkatagiri'
     },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Nellore'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Gudur'
    },
  ];
  return (
    <div>
      {/* {
        expenses.forEach(i => {
      
          <ExpenseItem
            title={expenses[i].title}
            amount={expenses[i].amount}
            date={expenses[i].date}
            location={expenses[i].location}
          ></ExpenseItem>

          
        })
      } */}
        
        
      <NewExpense />
      <ExpenseItem
        id={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
      />
      <ExpenseItem
        id={expenses[1].id}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].location}
      />
      <ExpenseItem
        id={expenses[2].id}
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].location}
      />
      <ExpenseItem
        id={expenses[3].id}
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        location={expenses[3].location}
      /> 
    </div>
  );
}

export default App;
