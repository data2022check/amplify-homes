/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="400px"
      height="400px"
      overflow="hidden"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="37.5px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="380px"
        height="50px"
        position="absolute"
        top="341px"
        left="10px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Price : $"}${home?.price}${"/night"}`}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="37.5px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="380px"
        height="50px"
        position="absolute"
        top="291px"
        left="10px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.address}
        {...getOverrideProps(overrides, "title")}
      ></Text>
      <Image
        position="absolute"
        top="0%"
        bottom="32.86%"
        height="67.14%"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}
