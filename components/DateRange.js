import React from "react";
import DatePicker from "react-native-datepicker";
import { Flex, Button } from "native-base";

export default function DateRange({
  enteredDate,
  setEnteredDate,
  setApods,
  setError,
}) {
  const maxDate = new Date().toISOString().match(/[\d-]+/)[0];

  const fetchApod = async () => {
    const apodsAPIURL = `https://api.nasa.gov/planetary/apod?api_key=SqFFo6cwJlXTax6FWe2m1nB5TXGiN3LdkQku2hw4&start_date=${enteredDate[0]}&end_date=${enteredDate[1]}`;

    try {
      const response = await fetch(apodsAPIURL, {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (!response.ok) {
        const error = (data && data.msg) || response.status;
        setError(error);
        await Promise.reject(error);
      } else {
        setError(null);
      }

      setApods(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex justify={"space-between"}>
      <DatePicker
        style={{ width: "100%", marginBottom: 10 }}
        date={enteredDate[0]}
        mode="date"
        placeholder="Start Date"
        format="YYYY-MM-DD"
        maxDate={maxDate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{}}
        showIcon={false}
        onDateChange={(date) => {
          const enteredDateCopy = [...enteredDate];
          enteredDateCopy[0] = date;
          setEnteredDate(enteredDateCopy);
        }}
      />
      <DatePicker
        style={{ width: "100%", marginBottom: 10 }}
        date={enteredDate[1]}
        mode="date"
        maxDate={maxDate}
        placeholder="End Date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{ borderRadius: 5 }}
        showIcon={false}
        onDateChange={(date) => {
          const enteredDateCopy = [...enteredDate];
          enteredDateCopy[1] = date;
          setEnteredDate(enteredDateCopy);
        }}
      />
      <Button mb={7} onPress={() => fetchApod()}>
        Search
      </Button>
    </Flex>
  );
}
