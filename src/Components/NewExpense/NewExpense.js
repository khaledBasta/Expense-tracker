import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // Use state of showing the form conditionally
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);

    // When the form is submited call the function setIsEditing(false)
    setIsEditing(false);
  };

  const startEditingHanlder = () => {
    setIsEditing(true);
  };

  const stopEditingHanlder = () => {
    setIsEditing(false);
  };

  let newExpenseContent = (
    <button onClick={startEditingHanlder}>Add New Expense</button>
  );

  if (isEditing) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHanlder}
      />
    );
  }

  return (
    <div className="new-expense">
      {newExpenseContent}

      {/* Using Ternary operator to show the form conditionally */}
      {/* {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHanlder}
        />
      ) : (
        <button onClick={startEditingHanlder}>Add New Expense</button>
      )} */}

      {/* Using AND operator to show the form conditionally */}
      {/* {!isEditing && (
        <button onClick={startEditingHanlder}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHanlder}
        />
      )} */}
    </div>
  );
};

export default NewExpense;
