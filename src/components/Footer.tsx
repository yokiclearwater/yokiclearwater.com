import React from "react";
import { Box, Flex, Image, Link, Text, Wrap } from "@chakra-ui/react";
import { themeColor } from "../data/themeColor";
import { socials } from "../data/footer";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Flex
      flexDir={"column"}
      gap={10}
      p={10}
      bg={themeColor[500]}
      textColor={themeColor[200]}
    >
      <Text
        borderBottom={"5px solid white"}
        fontWeight={"semibold"}
        fontSize={["5xl", "6xl"]}
      >
        Social Link
      </Text>
      <Wrap py={10} spacing={10} justify="justify">
        {socials.map((social, index) => (
          <Link key={index} href={social.url}>
            <Flex flexDir={"row"} gap={4} align="center">
              <Image
                height={["50px", "60px", "70px", "80px"]}
                src={`/images/${social.image}`}
                alt=""
              />
              <Text
                className={social.lang === 'kh' ? "khmer" : ""}
                fontSize={["2xl", "3xl"]}
              >
                {social.username}
              </Text>
            </Flex>
          </Link>
        ))}
      </Wrap>
    </Flex>
  );
};

export default Footer;
