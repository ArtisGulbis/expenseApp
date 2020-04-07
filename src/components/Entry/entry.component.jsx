import React from "react";
import { UTILS } from "../../utils/utils";
import "./entry.styles.scss";

const Entry = ({ entries, type, className }) => {
  return (
    <div>
      <div className={className}>
        {entries.map((el, idx) => {
          if (el.type === type) {
            return (
              <div key={idx}>
                <div>
                  {type === "income" ? (
                    <div className="entry-container green fromLeft">
                      <p>{el.name}</p>
                      <p>+ {UTILS.numbersWithCommas(el.value)}</p>
                    </div>
                  ) : (
                    <div className="entry-container red fromRight">
                      <p>- {UTILS.numbersWithCommas(el.value)}</p>
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

export default Entry;
