export const UTILS = {
  numbersWithCommas(x) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
  },
};
