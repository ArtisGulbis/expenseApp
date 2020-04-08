import React from "react";
import "./header.styles.scss";
import { UTILS } from "../../utils/utils";
import { connect } from "react-redux";
import _ from "lodash";

function Header({
  total,
  value,
  onAnimationEnd,
  fromTop,
  toBottom,
  entryToRemove,
  currentEntry,
}) {
  let editedVal;
  if (!_.isEmpty(entryToRemove)) {
    editedVal = UTILS.numbersWithCommas(entryToRemove[0].value);
  } else {
    editedVal = UTILS.numbersWithCommas(currentEntry.value);
  }
  const editedTotal = UTILS.numbersWithCommas(total);

  return (
    <div className="header-container">
      <p
        className={
          "before " +
          (fromTop ? "fromTop " : "") +
          (toBottom ? "toBottom " : "") +
          (value < 0 ? "expense" : "income")
        }
        onAnimationEnd={onAnimationEnd}
      >
        {toBottom ? "-" : "+"}
        {editedVal}
      </p>
      <p className={"middle " + (total < 0 ? "expense" : "income")}>
        {total > 0 ? "+" : ""}
        {editedTotal}
      </p>
    </div>
  );
}

const mapStateToProps = ({
  totalAmount: { total },
  headerAnim: { fromTop, toBottom },
  entryFields: { entryToRemove, currentEntry },
}) => ({
  total,
  fromTop,
  toBottom,
  entryToRemove,
  currentEntry,
});

export default connect(mapStateToProps)(Header);
