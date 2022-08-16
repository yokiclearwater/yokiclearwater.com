import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Head from "next/head";
import Sidebar from './Sidebar';
import Script from "next/script";

type Props = {
  title?: string;
  children: React.ReactNode;
}

function Layout({ title = "yokiclearwater", children } : Props) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>        
      </Head>        
      <Sidebar /> 
      <Box>
        {children}
      </Box>      
    </React.Fragment>
  );
}

export default Layout;
