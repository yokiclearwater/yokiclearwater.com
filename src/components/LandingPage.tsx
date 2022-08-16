import { Box, Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import GLOBE from '../scripts/vanta.globe.js';
import * as THREE from '../scripts/three';

const LandingPage: React.FC = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: "#DDFFBC",
      backgroundColor: "#393939",
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <Flex
      maxW={"100vw"}
      width={"100%"}
      height={"100vh"}
      alignItems={"center"}
      id="home"
    >
      <Box
        ref={vantaRef}
        w={"100%"}
        h={"100vh"}
        position={"absolute"}
        zIndex={0}
      ></Box>
      <Container
        pos={"absolute"}
        textColor={"white"}
        fontSize={["4xl", "5xl"]}
        zIndex={1}
        p={8}
        mx={["0", "1rem", "8rem", "8rem"]}
        width={"fit-content"}
      >
        Hello, I&apos;m{" "}
        <Text
          as={"span"}
          fontWeight={"bold"}
          textColor={"blue.300"}
          textDecor={"underline"}
        >
          Yon KimKosal
        </Text>
        <br />
        also known as {""}
        <Text
          as={"span"}
          fontWeight={"bold"}
          textColor={"pink.400"}
          fontStyle={"italic"}
        >
          yokiclearwater
        </Text>
        .
        <Box
          bg={"white"}
          width={"fit-content"}
          py={2}
          px={4}
          fontWeight={"bold"}
          textColor={"brand.300"}
          fontStyle={"italic"}
          borderRadius={4}
          my={4}
        >
          <Typewriter
            options={{
              strings: [
                "I am a web developer",
                "a musicophile",
                "a k-on enthusiast",
                "or just a random guy you know",
              ],
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("i love computer")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </Box>
        <Link
          href="#about"
          bg={"transparent"}
          fontSize={["2xl", "3xl"]}
          p={5}
          fontWeight={"semibold"}
          borderRadius={"md"}
          border={"5px solid white"}
          _hover={{
            textColor: "brand.300",
            fontWeight: "bold",
            bg: "white",
          }}
        >
          GetToKnowMe 🎸
        </Link>
      </Container>
    </Flex>
  );
};

export default LandingPage;
