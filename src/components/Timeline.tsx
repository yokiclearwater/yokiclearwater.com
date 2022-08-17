import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ImOffice } from "react-icons/im";
import "react-vertical-timeline-component/style.min.css";
import { Box, color, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { themeColor } from "../data/themeColor";
import { timelineData } from "../data/timeline";

type Props = {};

const Timeline = (props: Props) => {
  return (
    <Box background={"brand.500"}>
      <style jsx global>
        {`
          .vertical-timeline-element-date {
            color: ${themeColor[500]};
            font-size: 1.3rem !important;
            background: ${themeColor[300]};
            opacity: 1 !important;
            padding: 0.5rem !important;
            margin: 0.5rem !important;
            width: max-content !important;
            border-radius: 0.5rem !important;
          }
        `}
      </style>
      <Heading
        as={"h1"}
        textAlign={"center"}
        py={4}
        fontWeight={"black"}
        textColor={"brand.200"}
        fontSize={["5xl", "6xl", "8xl", "9xl"]}
        textTransform={"uppercase"}
      >
        Timeline
      </Heading>
      <Box py={[0, 0, 0, 10, 100]}>
        <VerticalTimeline animate={true}>
          {timelineData.map((timeline, index) => {
            const colors = !(index % 2) ? {
                primary: themeColor[400],
                secondary: themeColor[200],
            } : {
                primary: themeColor[200],
                secondary: themeColor[500],
            };

            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: colors.primary,
                  color: colors.secondary,
                }}
                contentArrowStyle={{
                  borderRight: `10px solid  ${themeColor[200]}`,
                }}
                date={timeline.date}
                iconStyle={{ background: colors.primary, color: colors.secondary }}
                icon={<timeline.icon />}
              >
                <Flex flexDir={"column"} gap={2}>
                  <Heading
                    as={"h3"}
                    className="vertical-timeline-element-title"
                    fontSize={["xl", "2xl", "3xl", "4xl"]}
                  >
                    {timeline.title}
                  </Heading>
                  <Heading
                    as={"h4"}
                    fontWeight={"semibold"}
                    className="vertical-timeline-element-subtitle"
                    fontSize={["lg", "xl", "2xl", "xl"]}
                  >
                    {timeline.location}
                  </Heading>
                  <Box fontSize={["lg", "xl", "xl", "xl"]}>
                    {timeline.description}
                  </Box>
                </Flex>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Box>
    </Box>
  );
};

export default Timeline;
