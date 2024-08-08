import { reactive } from "vue";
import { io } from "socket.io-client";

export const socketState = reactive({
  connected: false,
});

export const socket = io(process.env.VUE_APP_SOCKET_API_URL, {
  transports: ["websocket"],
});

socket.on("connect", () => {
  socketState.connected = true;
});

socket.on("disconnect", () => {
  socketState.connected = false;
});

export function asyncEmit(eventName, data) {
  return new Promise(function (resolve, reject) {
    socket.emit(eventName, data);
    socket.on(eventName, (result) => {
      resolve(result);
    });
    setTimeout(reject, 1000);
  });
}

export function createSocketPlugin() {
  return (store) => {
    socket.on("classes/get", (data) => {
      // console.log(data);
      store.dispatch("adminClasses/setClasses", data.data);
    });

    // socket.on("classes/add", (data) => {
    socket.on("classes/add", () => {
      // console.log(data);
      // store.dispatch("adminClasses/setClasses", data.data);
    });

    socket.on("classes/edit", () => {
      // console.log(data);
      // store.dispatch("adminClasses/setClasses", data.data);
    });

    socket.on("classes/delete", () => {
      // console.log(data);
      // store.dispatch("adminClasses/setClasses", data.data);
    });
  };
}
