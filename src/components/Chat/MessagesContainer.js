import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import SendMessage from "./SendMessage";
import Messages from "./Messages";
import Box from "@mui/material/Box";

import { Store, UpdateStore } from "../../StoreContext";

const MessagesContainer = ({ width, mobiletoggle }) => {
  const store = Store();
  const updateStore = UpdateStore();
  return (
    <>
      <Box
        sx={{
          display:
            width <= 768 && mobiletoggle
              ? "block"
              : width > 768
              ? "block"
              : "none",
          width: width <= 768 ? "100%" : "55%",
        }}
        className="c-body"
      >
        {store.chat ? (
          <>
            <ChatHeader />
            <Messages />
            <SendMessage />
          </>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default MessagesContainer;
