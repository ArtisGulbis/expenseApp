import React from "react";
import "./header.styles.scss";
import { UTILS } from "../../utils/utils";
import { connect } from "react-redux";

function Header({ total, fadeIncome, fadeExpense, value, onAnimationEnd }) {
  const editedVal = UTILS.numbersWithCommas(value);
  const editedTotal = UTILS.numbersWithCommas(total);

  return (
    <div className="header-container">
      <p
        className={
          "before " +
          (fadeIncome ? "fromTop " : "") +
          (fadeExpense ? "toBottom " : "") +
          (value < 0 ? "expense" : "income")
        }
        onAnimationEnd={onAnimationEnd}
      >
        {fadeExpense ? "-" : "+"}
        {editedVal}
      </p>
      <p className={"middle " + (total < 0 ? "expense" : "income")}>
        {total > 0 ? "+" : ""}
        {editedTotal}
      </p>
    </div>
  );
}

const mapStateToProps = ({ totalAmount: { total } }) => ({
  total,
});

export default connect(mapStateToProps)(Header);
