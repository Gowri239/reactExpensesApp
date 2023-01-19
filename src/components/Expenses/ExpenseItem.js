import ExpenseDate from './ExpenseDate'
import ExpenseAmount from './ExpenseDetails'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2>{props.location}</h2>
                <ExpenseAmount amount={props.amount}/>
            </div>
        </div>
    
    )

    
}

export default ExpenseItem