import React from "react";
import "./App.scss";

import { connect } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
  resetAmount,
} from "././redux/total/total.actions";

import { setNewEntry, clearEntries } from "././redux/entry/entry.actions";

import CustomField from "./components/CustomField/customField.component";
import CustomInput from "./components/customInput/customInput.component";
import Header from "./components/Header/header.component";
import Table from "./components/table/table.component";

class App extends React.Component {
  INITIAL_STATE = {
    value: 0,
    name: "",
    error: "",
    fadeIncome: false,
    fadeExpense: false,
    btnDisabled: false,
  };

  constructor() {
    super();
    this.state = {
      value: 0,
      name: "",
      type: "",
      error: "",
      fadeIncome: false,
      fadeExpense: false,
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
    //remove whitespace at beginning and end
    //remove whitespace in between
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

    const { newEntry, inc, dec } = this.props;

    const value = this.replaceWhiteSpaces(this.state.value);

    if (value.match(onlyNumber)) {
      if (type === "income") {
        this.setState({ fadeIncome: true, value, btnDisabled: true });
        newEntry({
          name: this.state.name,
          value,
          type,
        });
        inc(value);
      } else if (type === "expense") {
        this.setState({ fadeExpense: true, value, btnDisabled: true });
        newEntry({
          name: this.state.name,
          value,
          type,
        });
        dec(value);
      }
    } else {
      this.setState({ error: "Invalid value" });
    }
  };

  resetFieldsAndState = () => {
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
    this.resetFieldsAndState();
  }

  render() {
    const { res, clearEntry } = this.props;

    return (
      <div>
        <Header
          fadeIncome={this.state.fadeIncome}
          fadeExpense={this.state.fadeExpense}
          value={this.state.value}
          onAnimationEnd={this.resetFieldsAndState}
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
            >
              Income
            </CustomInput>
            <CustomInput
              type="submit"
              value="Expense"
              onClick={(e) => this.handleTransaction("expense", e)}
              disabled={this.state.btnDisabled}
            >
              Expense
            </CustomInput>
          </div>
        </form>
        <div className="btn-container">
          <CustomInput onClick={res}>reset</CustomInput>
          <CustomInput onClick={clearEntry}>clear entries</CustomInput>
        </div>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = ({ totalAmount: { total } }) => ({
  total,
});

const mapDispatchToProps = {
  inc: increaseAmount,
  dec: decreaseAmount,
  res: resetAmount,
  newEntry: setNewEntry,
  clearEntry: clearEntries,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
