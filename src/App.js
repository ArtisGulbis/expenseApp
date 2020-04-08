import React from "react";
import "./App.scss";
import _ from "lodash";

import { connect } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
  resetAmount,
} from "././redux/total/total.actions";

import { setNewEntry, clearEntries } from "././redux/entry/entry.actions";

import {
  decreaseAnimationTrue,
  increaseAnimationTrue,
} from "./redux/headerAnimation/hAnimation.actions";

import CustomField from "./components/CustomField/customField.component";
import CustomInput from "./components/customInput/customInput.component";
import Header from "./components/Header/header.component";
import Table from "./components/table/table.component";

class App extends React.Component {
  INITIAL_STATE = {
    value: 0,
    name: "",
    error: "",
    btnDisabled: false,
  };

  constructor() {
    super();
    this.state = {
      value: 0,
      name: "",
      type: "",
      error: "",
      btnDisabled: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  replaceWhiteSpaces = (value) => {
    const trimmedValue = value.replace(/ /g, "");
    return trimmedValue;
  };

  handleTransaction = (type, e) => {
    e.preventDefault();
    //regex for checking if value only contains numbers
    const onlyNumber = /^[0-9]+$/;

    //if value is not given or name is empty, return
    if (this.state.value === 0 || this.state.name === "") {
      this.setState({ error: "Please fill out the fields" });
      return;
    }

    const { newEntry, incomeAnimTrue, expenseAnimTrue } = this.props;

    const value = this.replaceWhiteSpaces(this.state.value);

    if (value.match(onlyNumber)) {
      if (type === "income") {
        this.setState({ value, btnDisabled: true });
        incomeAnimTrue();
        newEntry({
          name: this.state.name,
          value,
          type,
          _id: _.uniqueId(),
        });
      } else if (type === "expense") {
        this.setState({ value, btnDisabled: true });
        expenseAnimTrue();
        newEntry({
          name: this.state.name,
          value,
          type,
          _id: _.uniqueId(),
        });
      }
    } else {
      this.setState({ error: "Invalid value" });
    }
  };

  resetOnAnimationEnd = (income, expense) => {
    const { inc, dec, expenseAnimTrue, incomeAnimTrue } = this.props;

    // income ? inc(this.state.value) : dec(this.state.value);
    if (income) {
      inc(this.state.value);
      incomeAnimTrue();
    } else if (expense) {
      dec(this.state.value);
      expenseAnimTrue();
    }

    //clears input fields
    const fields = document.querySelectorAll("input");
    fields.forEach((el) => {
      el.value = "";
    });
    //set state to default values
    this.setState(() => this.INITIAL_STATE);
  };

  componentDidMount() {
    const { res, clearEntry } = this.props;
    res();
    clearEntry();
    this.resetOnAnimationEnd();
  }

  render() {
    const { res, clearEntry, fromTop, toBottom } = this.props;

    return (
      <div>
        <Header
          value={this.state.value}
          onAnimationEnd={() => this.resetOnAnimationEnd(fromTop, toBottom)}
        />
        <form>
          <div className="input-field-container">
            <CustomField
              type="text"
              name="name"
              onChange={this.handleChange}
              placeholder="entry"
              required="required"
            />
            <CustomField
              type="text"
              name="value"
              onChange={this.handleChange}
              placeholder="value"
              required="required"
            />
          </div>
          <div className="error">
            {this.state.error ? <div>{this.state.error}</div> : null}
          </div>
          <div className="btn-container">
            <CustomInput
              type="submit"
              value="Income"
              onClick={(e) => {
                this.handleTransaction("income", e);
              }}
              disabled={this.state.btnDisabled}
              name="income"
            >
              Income
            </CustomInput>
            <CustomInput
              type="submit"
              value="Expense"
              onClick={(e) => this.handleTransaction("expense", e)}
              disabled={this.state.btnDisabled}
              name="expense"
            >
              Expense
            </CustomInput>
          </div>
        </form>
        <div className="btn-container">
          <CustomInput
            onClick={() => {
              res();
              clearEntry();
            }}
          >
            Reset
          </CustomInput>
        </div>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = ({
  totalAmount: { total },
  headerAnim: { fromTop, toBottom },
}) => ({
  total,
  fromTop,
  toBottom,
});

const mapDispatchToProps = {
  inc: increaseAmount,
  dec: decreaseAmount,
  res: resetAmount,
  newEntry: setNewEntry,
  clearEntry: clearEntries,
  incomeAnimTrue: increaseAnimationTrue,
  expenseAnimTrue: decreaseAnimationTrue,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
