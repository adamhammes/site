import React from "react";
import { formatCalendarDate } from "../utils";

const DateTime = ({ dateString }) => (
  <time dateTime={dateString}>{formatCalendarDate(dateString)}</time>
);

export default DateTime;
