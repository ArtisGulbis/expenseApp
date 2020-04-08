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
  className,
  removeE,
  inc,
  dec,
  increaseAnim,
  expenseAnim,
}) => {
  return (
    <div>
      <div className={className}>
        {entries.map((el, idx) => {
          if (el.type === type) {
            return (
              <div key={idx}>
                <div className="entry-container">
                  {type === "income" ? (
                    <div className="green fromLeft">
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
                    <div className="red fromRight">
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
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  removeE: removeEntry,
  inc: increaseAmount,
  dec: decreaseAmount,
  increaseAnim: increaseAnimationTrue,
  expenseAnim: decreaseAnimationTrue,
};

export default connect(null, mapDispatchToProps)(Entry);
