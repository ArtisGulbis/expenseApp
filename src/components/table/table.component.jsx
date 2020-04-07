import React from "react";
import { connect } from "react-redux";
import "./table.styles.scss";

import Entry from "../Entry/entry.component";

const Table = ({ entries }) => {
  return (
    <div className="income-expense-container">
      <div className="income-container">
        <Entry type="income" className="income" entries={entries} />
      </div>
      <div className="expense-container">
        <Entry type="expense" className="expense" entries={entries} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ entryFields: { entries } }) => ({
  entries,
});

export default connect(mapStateToProps)(Table);
