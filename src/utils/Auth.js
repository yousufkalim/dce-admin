import Constants from "./services/socket.io/utils/Constants";
import Helpers from "./services/socket.io/utils/Helpers";

import SS from "./services/socket.io/utils/state";
import * as EventHandlers from "./services/socket.io/EventHandlers";

import { io } from "socket.io-client";

export const initSocket = (updateStore) => {
  const token = localStorage.getItem("token");
  console.log(SS.socket, "SS.socket");
  console.log(token);
  if (SS.socket == null && token) {
    console.log("REINIT");
    const socket = io(process.env.REACT_APP_SOCKET_URL, {
      query: {
        token: `Bearer ${token}`,
      },
    });
    Helpers.registerEvent(socket, Constants.E_CONNECTION, () =>
      EventHandlers.connectHandler(socket, updateStore)
    );
    Helpers.registerEvent(socket, Constants.E_DISCONNECT, () =>
      EventHandlers.disconnectHandler(socket, updateStore)
    );
    Helpers.registerEvent(socket, Constants.E_RECEIVE_CHAT, (_) =>
      EventHandlers.receiveChatHandler(socket, updateStore, _)
    );
    Helpers.registerEvent(socket, Constants.E_RECEIVE_MESSAGE, (_) =>
      EventHandlers.receiveMessageHandler(socket, updateStore, _)
    );
  }
};

export const handleLogin = (token, user, updateStore) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  initSocket(updateStore);
  return true;
};

export const handleLogout = (navigate, store, updateStore) => {
  localStorage.clear();
  navigate("/login");
  store.socket.disconnect();
  updateStore({
    socket: null,
    chats: [],
    chat: null,
    messages: [],
  });
}; // Handle here.

export const getUser = () => {
  let cookie = localStorage.getItem("user");
  let user = cookie && JSON.parse(cookie);
  return user;
};

export const setUser = (user) => {
  return localStorage.setItem("user", JSON.stringify(user));
};

export const getToken = () => {
  let token = localStorage.getItem("token");
  return token;
};
