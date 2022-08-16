import { Button, Divider, Flex, Link, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";

function Sidebar() {
  return (
    <>
      <Flex
        w={"auto"}
        h={"100vh"}
        position="fixed"
        right={0}
        justifyContent={"space-around"}
        flexDir={"column"}
        fontSize={["3xl", "4xl", "6xl"]}
        alignItems={"center"}
        p={8}
        zIndex={2}       
        display={["none", "none", "flex"]} 
      >
        <Flex
          fontWeight={"semibold"}
          width={"100%"}
          textColor={"brand.500"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          gap={100}
          shadow={"xl"}
          bg={"brand.100"}
          // opacity={0.8}
          padding={8}
          borderRadius={"lg"}
        >
          <Link _hover={{ textColor: "brand.300" }} href="#home">
              <FaHome />
            </Link>
          <Link _hover={{ textColor: "brand.300" }} href="#about">
            <SiAboutdotme />
          </Link>
        </Flex>
      </Flex>
    </>
  );
}

export default Sidebar;
