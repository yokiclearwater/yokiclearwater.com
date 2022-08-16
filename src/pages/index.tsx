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
      <Layout>
        <LandingPage />
        <About data={props.data[0]}/>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await api.get('/api/');
  return {
    props: {
      data: data.data,
    }
  }
}