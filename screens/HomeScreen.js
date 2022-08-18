import React from "react";
import { Text, Heading, VStack, Flex } from "native-base";
import Apods from "../components/Apods";
import DateRange from "../components/DateRange";

export default function HomeScreen({
  apods,
  navigation,
  setApods,
  error,
  setError,
  enteredDate,
  setEnteredDate,
}) {
  return (
    <Flex flex={1} pt={5}>
      <VStack px={4} w={"full"}>
        <Text fontSize={"lg"} fontWeight={700}>
          Picture of the day:
        </Text>
        <Text mb={2}>Search for Astronomy: Picture of the day by date.</Text>
        <DateRange
          enteredDate={enteredDate}
          setEnteredDate={setEnteredDate}
          apods={apods}
          setApods={setApods}
          setError={setError}
        />
        <Text fontWeight={700}>Results ({!error ? apods.length : 0}):</Text>
        {error ? (
          <Text>{error}</Text>
        ) : apods.length ? (
          <Apods apods={apods} navigation={navigation} />
        ) : (
          <Text>No Results Found.</Text>
        )}
      </VStack>
    </Flex>
  );
}
