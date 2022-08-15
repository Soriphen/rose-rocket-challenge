import React from "react";
import TextField from "@mui/material/TextField";
// import { DateRangePicker } from "@mui/x-date-pickers/DateRangePicker";
import MobileDatePicker from "@mui/x-date-pickers/MobileDatePicker";
import { Flex, Box } from "native-base";

export default function DateRange({ enteredDate, setEnteredDate }) {
  return (
    <Flex justify={"space-between"}>
      <Flex
        alignItems={"center"}
        direction={"column"}
        fontSize={"45px"}
        // fontWeight={300}
      >
        Spacestagram
        <Box fontSize={12} my={"5px"}>
          Brought to you by NASA's Astronomy Picture of the Day (APOD) API
        </Box>
      </Flex>
      <MobileDatePicker
        label="Start date"
        maxDate={new Date()}
        value={enteredDate[0]}
        onChange={(newDate) => {
          setEnteredDate(newDate);
        }}
        renderInput={(props) => <TextField {...props} />}
      />
    </Flex>
  );
}
