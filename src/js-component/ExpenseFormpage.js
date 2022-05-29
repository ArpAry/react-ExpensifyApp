import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseFormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      description: props.expense ? props.expense.description : "",
      Amount: props.expense ? (props.expense.Amount / 100).toString() : "",
      Note: props.expense ? props.expense.Note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = (e) => {
    const Amount = e.target.value;
    if (!Amount || Amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ Amount }));
    }
  };
  onNoteChange = (e) => {
    const Note = e.target.value;
    this.setState((e) => ({ Note }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };
  onSubmitPage = (e) => {
    e.preventDefault();

    if (!this.state.Amount || !this.state.description) {
      this.setState(() => ({ error: "Please Provide Description and Amount" }));
    } else {
      console.log("submittted");
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        Amount: parseFloat(this.state.Amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        Note: this.state.Note,
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <h1>Expense Page</h1>
        <form onSubmit={this.onSubmitPage}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.Amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense "
            value={this.state.Note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
