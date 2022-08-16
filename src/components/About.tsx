import React from "react";
import { Box, Container, Flex, Heading, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import CustomIcon from './CustomIcon';

interface Props {
  userData: User.UserData;
}

const About: React.FC<Props> = ({ userData }) => {
  return (
    <Box minH={"50vh"} h={"100vh"} bg={"brand.300"} id="about" textColor={"brand.500"}>
      <Box w={["85%", "80%"]} m={"auto"} py={[10, 10, 20, 100]}>
        <Heading
          as={"h1"}
          fontSize={["4xl", "5xl", "6xl", "7xl"]}
          borderBottom={"8px solid white"}
          w={"fit-content"}
        >
          About Me
        </Heading>
        <Text as={"p"} fontSize={["2xl", "2xl", "3xl", "5xl"]} my={10}>
          {userData.description}
        </Text>
        <Heading
          as={"h1"}
          fontSize={["4xl", "5xl", "6xl", "7xl"]}
          borderBottom={"8px solid white"}
          w={"fit-content"}
        >
          Hobbies
        </Heading>
        <Flex my={6} py={6} fontSize={["2xl", "3xl", "4xl"]} gap={4} flexWrap={"wrap"}>
          {userData.hobbies.map((hobby, index) => (<Flex key={index} bg={"brand.100"} w={"fit-content"} p={4} borderRadius={8} alignItems={"center"} justifyContent={"center"} gap={4} fontStyle={"italic"} shadow={"lg"}>
            <CustomIcon name={hobby.icon} />
            {hobby.name}
          </Flex>))}
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
