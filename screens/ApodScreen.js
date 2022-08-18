import React from "react";
import { Box, Center, Flex, Image, ScrollView, Text } from "native-base";
import { ApodContext } from "../App";

export default function ApodScreen({ route, navigation }) {
  const apods = React.useContext(ApodContext);
  const { apodIdx } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: apods[apodIdx].title,
    });
  }, [navigation]);

  return (
    <Flex flex={1}>
      <Image
        src={apods[apodIdx].url}
        alt={apods[apodIdx].title}
        w={"full"}
        h={"330px"}
      />
      <ScrollView px={4} my={2}>
        <Text>{apods[apodIdx].explanation}</Text>
      </ScrollView>
    </Flex>
  );
}
