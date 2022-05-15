import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // If what ur component returns changes entirely based on different conditions, we can use this approach
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expense items.</h2>;
  }

  return (
    <ul className="expenses-list ">
      {props.items.map((expense) => (
        <ExpenseItem
          // You should always add such a key when mapping out list of items
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
