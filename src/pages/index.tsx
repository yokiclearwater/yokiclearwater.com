import LandingPage from "./../components/LandingPage";
import { Box, Flex } from "@chakra-ui/react";
import Layout from "./../components/Layout";
import Script from "next/script";
import About from './../components/About';
import { useEffect } from 'react';
import connectMongo from './../utils/connectMongo';
import mongoose from "mongoose";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import api from "../utils/api";
import axios from "axios";

interface Props {
  data: User.UserData[];
}

export default function Home(props: Props) {
  const userData = props.data[0];

  return (
    <>
      <Box fontSize={"5xl"} textColor={"green.600"}>{userData.description}</Box>
      {/* <Box fontSize={"5xl"} textColor={"red.600"}>{props.URL}</Box>
      <Box fontSize={"5xl"} textColor={"blue."}>{props.data.name}</Box> */}
      {/* <Layout>
        <LandingPage />
        <About data={props.data[0]}/>
      </Layout> */}
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { data } = await api.get("api/hello");
//   console.log(data);
//   return {
//     props: {
//       mongo: process.env.MONGO_URI,
//       baseURL: process.env.URL,
//       data: data,
//     },
//   };
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await api.get('/api/');
  return {
    props: {
      data: data.data,
    }
  }
}