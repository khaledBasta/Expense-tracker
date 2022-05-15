import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // You can store JSX content in a variables, u are not limited to using JSX only if u return
  // You can also use it to create a value, which is stored in a variable
  let expensesContent = <p>No Expense items found.</p>;
  return (
    <div>
      <Card className="expenses">
        {/* controlled component Basically, whenever you use two way binding you are controlling a component, value passed to parent through props & value received from the parent component*/}
        <ExpensesFilter
          defaultSelected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        {/* Mehtod-02: Using AND operator */}
        {/* {filteredExpenses.length === 0 && <p>No Expense Items Found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              // You should always add such a key when mapping out list of items
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* Method-01: Using ternary Operator */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expense Items Found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              // You should always add such a key when mapping out list of items
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
}

export default Expenses;
