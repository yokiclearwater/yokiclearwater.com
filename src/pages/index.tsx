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
  mongo: string;
  baseURL: string;
  data: any;
}

export default function Home(props: Props) {
  console.log(props);

  return (
    <>
      <Box fontSize={"5xl"} textColor={"green.600"}>{props.mongo}</Box>
      <Box fontSize={"5xl"} textColor={"red.600"}>{props.baseURL}</Box>
      <Box fontSize={"5xl"} textColor={"blue."}>{props.data.name}</Box>
      {/* <Layout>
        <LandingPage />
        <About data={props.data[0]}/>
      </Layout> */}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await api.get("api/hello");
  console.log(data);
  return {
    props: {
      mongo: process.env.MONGO_URI,
      baseURL: process.env.BASE_URL,
      data: data,
    },
  };
}



// export const getStaticProps: GetServerSideProps = async () => {
//   // const data = await api.get("/api/hello").then(res => res.data);
//   // const hello = await res.json();
//   // console.log(hello);
//   const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//   const stringRes = JSON.stringify(res);
//   return {
//     props: {
//       mongo: process.env.MONGO_URI,
//       baseURL: process.env.BASE_URL,
//     },
//   };
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   await connectMongo();
//   const { data } = await api.get('api');

//   return {
//     props: {
//       data: data.data,
//     }
//   }
// }