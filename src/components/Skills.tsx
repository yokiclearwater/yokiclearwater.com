import { Box, Flex, Heading, Image, Img, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { themeColor } from "../data/themeColor";
import { skills } from "../data/skills";

type Props = {};

const Skills = (props: Props) => {
  return (
    <Box minH={"80vh"} bg={"brand.300"} id="about" textColor={"brand.500"}>
      <Flex
        gap={8}
        flexDir={"column"}
        w={["85%", "80%"]}
        m={"auto"}
        py={[10, 10, 20, 100]}
      >
        {skills.map((skill, index) => {
          return (
            <Flex key={index} flexDir={"column"} gap={12}>
              <Heading
                as={"h1"}
                fontSize={["4xl", "5xl", "6xl", "7xl"]}
                w={"fit-content"}
                textTransform={"lowercase"}
              >
                {skill.title}
              </Heading>
              <Wrap spacing={[6, 8, 12, 16]} justify={"center"} bg={"white"} p={8} borderRadius={"xl"}>
                {skill.items.map((item, index) => (
                  <Flex
                    key={index}
                    flexDir={"column"}
                    align="center"
                    justify={"center"}
                    width={"fit-content"}
                    gap={4}
                  >
                    <Image
                      src={`/images/${item.image}`}
                      alt={item.name}
                      width={["75px", "90px", "110px", "120px"]}
                    />
                    <Text
                      fontSize={["md", "xl", "2xl", "3xl"]}
                      fontWeight="semibold"
                    >
                      {item.name}
                    </Text>
                  </Flex>
                ))}
              </Wrap>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Skills;
