import React from "react";
import { Box, Center, Flex, HStack, Image, Text } from "native-base";
import { WebView } from "react-native-webview";

const Apod = ({ ...rest }) => {
  const handleClick = () => {
    let dateLikesRefCopy = { ...rest.dateLikesRef };
    rest.dateLikesRef[rest.date]["liked"] =
      !dateLikesRefCopy[rest.date]["liked"];
    /* Frowned upon, however, a forced re-render is utilized in order 
    to update the useRef dateLikesRef when the heart is clicked. Usually, dateLikesRef would be in a useState in order
    to update state naturally instead of through forced re-renders, however, useState does not 
    contain perpetual data through re-renders which is needed for dateLikesRef
    so as to contain a perpetual reference of all liked photos regardless of date-range and
    whether it changes or not. */
    rest.setDateLikes({ ...rest.dateLikesRef });
  };

  return (
    <Flex borderWidth={1} apodIdx={rest.index}>
      {
        rest.media_type === "image" ? (
          <Image src={rest.imgURL} alt={rest.title} size={"lg"} />
        ) : rest.media_type === "video" ? (
          <WebView
            originWhitelist={["*"]}
            scalesPageToFit={false}
            bounces={false}
            javaScriptEnabled
            style={{ height: 96, width: 96 }}
            source={{
              html: `<iframe src=${rest.imgURL} title=${rest.title}  />`,
            }}
          />
        ) : null // ></iframe> //   allowFullScreen //   frameBorder="0" //   height="400vw" //   width="100%" //   title={rest.title} //   src={rest.imgURL} // <iframe
      }
      {/* <Text>{rest.title}</Text> */}
      {/* <Text>{rest.date}</Text> */}
      {/* <HeartStyled
          liked={rest.dateLikesRef[rest.date]["liked"]}
          onClick={() => handleClick()}
        /> */}
    </Flex>
  );
};

export default function Apods({
  apods,
  enteredDate,
  setEnteredDate,
  dateLikesRef,
  dateLikes,
  setDateLikes,
}) {
  return (
    <Box>
      <HStack
        justifyContent={"center"}
        flexWrap={"wrap"}
        borderWidth={1}
        space={2}
      >
        {apods.length !== 0 &&
          apods.map((apod, index) => (
            <Apod
              key={index}
              date={apod.date}
              imgURL={apod.url}
              title={apod.title}
              media_type={apod.media_type}
              dateLikesRef={dateLikesRef}
              dateLikes={dateLikes}
              setDateLikes={setDateLikes}
              index={index}
            />
          ))}
      </HStack>
    </Box>
  );
}
