/** @format */

import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={{xs: "start", sm: "center", md: "center"}}
      gap={2}>
      {videos.map((item, idx) => (
        <Box
          key={idx}
          maxWidth={{ sm: "385px" }}
          width="100%"
          display='flex'
          alignItems='center'
          justifyContent='center'>
          {item?.id.videoId && <VideoCard video={item} />}
          {item?.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
