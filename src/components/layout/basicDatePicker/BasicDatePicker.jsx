import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function BasicDatePicker({ date, setDate }) {
  dayjs.locale("pt-br");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <DatePicker
        views={["day", "month", "year"]}
        format="DD/MM/YYYY"
        label="Data de nascimento"
        value={date}
        onChange={(newValue) => setDate(newValue)}
      />
    </LocalizationProvider>
  );
}
