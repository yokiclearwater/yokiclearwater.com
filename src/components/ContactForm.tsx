import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  color,
} from "@chakra-ui/react";
import React from "react";
import { themeColor } from "../data/themeColor";
import styles from "../styles/ContactForm.module.css";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <Box bgColor={themeColor[300]} h={"auto"} p={[0, 4, 6, 10]} width={"100%"}>
      <Flex
        minW={"60%"}
        width={["100%", "80%", "80%", "60%"]}
        m={"auto"}
        justify={"center"}
        p={5}
        flexDir={"column"}
        align={"center"}
        gap={8}
      >
        <Heading
          as={"h1"}
          fontSize={["2xl", "3xl", "4xl", "5xl"]}
          textTransform={"uppercase"}
          bgColor={themeColor[500]}
          textColor={themeColor[200]}
          p={7}
          borderRadius={"lg"}
          boxShadow={"lg"}
        >
          Contact Form
        </Heading>
        <form
          className={styles.form}
          name="portfolio-contact"
          data-netlify="true"
          method="POST"
        >
          <FormControl isRequired>
            <FormLabel fontSize={["xl", "3xl"]} htmlFor="fullName">Your Name</FormLabel>
            <Input
              type="text"
              fontSize={["xl", "2xl"]}
              bgColor={themeColor[200]}
              color={themeColor[500]}
              p={5}
              name="fullName"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email" fontSize={["xl", "3xl"]}>Your E-Mail</FormLabel>
            <Input
              type="email"
              fontSize={["xl", "2xl"]}
              bgColor={themeColor[200]}
              color={themeColor[500]}
              p={5}
              name="email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={["xl", "3xl"]} htmlFor="message">Message</FormLabel>
            <Textarea
              fontSize={["xl", "2xl"]}
              bgColor={themeColor[200]}
              color={themeColor[500]}
              p={5}
              name="message"
            ></Textarea>
          </FormControl>
          <Button
            type="submit"
            bgColor={"green.400"}
            fontSize={["2xl", "3xl"]}
            p={7}
            _hover={{
              bgColor: "green.800",
              color: "green.200",
            }}
          >
            Submit
          </Button>
        </form>
      </Flex>
    </Box>
  );
};

export default ContactForm;
