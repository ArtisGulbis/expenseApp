import React from "react";
import { connect } from "react-redux";
import { UTILS } from "../../utils/utils";

import { removeEntry } from "../../redux/entry/entry.actions";
import {
  increaseAmount,
  decreaseAmount,
} from "../../redux/total/total.actions";

import {
  decreaseAnimationTrue,
  increaseAnimationTrue,
} from "../../redux/headerAnimation/hAnimation.actions";

import "./entry.styles.scss";

const Entry = ({
  entries,
  type,
  removeE,
  inc,
  dec,
  increaseAnim,
  expenseAnim,
  toBottom,
}) => {
  return (
    <div>
      {entries.map((el, idx) => {
        if (el.type === type) {
          return (
            <div key={idx}>
              {type === "income" ? (
                <div className="green entry-container income">
                  <p>{el.name}</p>
                  <span
                    className="remove-entry"
                    data-id={el._id}
                    data-value={el.value}
                    onClick={(e) => {
                      removeE(e.target.dataset.id);
                      dec(e.target.dataset.value);
                      expenseAnim();
                    }}
                  >
                    X
                  </span>
                  <p>+ {UTILS.numbersWithCommas(el.value)}</p>
                </div>
              ) : (
                <div className="red entry-container expense">
                  <p>- {UTILS.numbersWithCommas(el.value)}</p>
                  <span
                    className="remove-entry"
                    data-id={el._id}
                    data-value={el.value}
                    onClick={(e) => {
                      removeE(e.target.dataset.id);
                      inc(e.target.dataset.value);
                      increaseAnim();
                    }}
                  >
                    X
                  </span>
                  <p>{el.name}</p>
                </div>
              )}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

const mapStateToProps = ({ headerAnim: { toBottom } }) => ({
  toBottom,
});

const mapDispatchToProps = {
  removeE: removeEntry,
  inc: increaseAmount,
  dec: decreaseAmount,
  increaseAnim: increaseAnimationTrue,
  expenseAnim: decreaseAnimationTrue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
