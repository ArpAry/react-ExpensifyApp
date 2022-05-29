import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import { setTextFilter, sortByDate, sortByAmount,sortByEndDate,sortByStartDate} from "../actions/filter";
class ExpenseListFilter extends React.Component{
  state={
    calanderFocused:null
  };
  onDatesChange=({startDate,endDate})=>{
    this.props.dispatch(sortByStartDate(startDate));
    this.props.dispatch(sortByEndDate(endDate));

  };

  onFocusChange=(calanderFocused)=>{
    this.setState(()=>({calanderFocused}))
  }
  render()
  {
    return (
      <div>
      <input
        type="text"
        defaultValue={this.props.filter.text}
        onChange={(e) => {
        this.props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        value={this.props.filter.sortby}
        onChange={(e) => {
          if (e.target.value === "date") {
            this.props.dispatch(sortByDate());
          } else if (e.target.value === "amount") {
            this.props.dispatch(sortByAmount());
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
      startDateId="MyDatePickerStart"
            endDateId="MyDatePickerEnd"
      startDate={this.props.filter.startDate}
      endDate={this.props.filter.endDate}
      onDatesChange={this.onDatesChange}
       focusedInput={this.state.calanderFocused}
      onFocusChange={this.onFocusChange}
      showClearDates={true}
      numberOfMonths={1}
      isOutsideRange={()=>false}

      />
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    filter: state.filters,
  };
};
//export default ExpenseListFilter;
export default connect(mapStatetoProps)(ExpenseListFilter);
