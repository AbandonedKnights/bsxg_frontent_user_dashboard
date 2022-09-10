import numeral from "numeral";
export const pretty_print = (stat) => stat ? `+${numeral(stat).format("0.0a")}` : "+0";