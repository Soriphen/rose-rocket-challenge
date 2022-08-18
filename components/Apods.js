import React from "react";
import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import { WebView } from "react-native-webview";

const Apod = ({ ...rest }) => {
  return (
    <Flex mt={2} overflow={"hidden"} borderRadius={4}>
      {rest.media_type === "image" ? (
        <Pressable
          onPress={() =>
            rest.navigation.navigate("Apod", { apodIdx: rest.index })
          }
        >
          <Image src={rest.imgURL} alt={rest.title} size={"100px"} />
        </Pressable>
      ) : rest.media_type === "video" ? (
        <WebView
          originWhitelist={["*"]}
          scalesPageToFit={false}
          bounces={false}
          javaScriptEnabled
          style={{ height: 96, width: 100 }}
          source={{
            html: `<iframe src=${rest.imgURL} title=${rest.title}  />`,
          }}
        />
      ) : null}
    </Flex>
  );
};

export default function Apods({ apods, navigation }) {
  return (
    <ScrollView
      _contentContainerStyle={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: "2",
      }}
      h={"340px"}
    >
      {apods.length !== 0 &&
        apods.map((apod, index) => (
          <Apod
            key={index}
            date={apod.date}
            imgURL={apod.url}
            title={apod.title}
            media_type={apod.media_type}
            index={index}
            navigation={navigation}
          />
        ))}
    </ScrollView>
  );
}
