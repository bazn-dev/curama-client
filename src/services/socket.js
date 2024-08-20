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
    socket.on("modules/get", (data) => {
      // console.log(data);
      store.dispatch("adminModules/setModules", data.data);
    });

    socket.on("modules/add", () => {
      // console.log(data);
      // store.dispatch("adminClasses/setClasses", data.data);
    });

    socket.on("modules/edit", () => {
      // console.log(data);
      // store.dispatch("adminClasses/setClasses", data.data);
    });

    socket.on("modules/delete", () => {
      // console.log(data);
      // store.dispatch("adminClasses/setClasses", data.data);
    });

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

    socket.on("skills/get", (data) => {
      // console.log(data);
      store.dispatch("adminSkills/setSkills", data.data);
    });

    socket.on("skills/add", () => {
      // console.log(data);
      // store.dispatch("adminClasses/setClasses", data.data);
    });

    socket.on("skills/edit", () => {
      // console.log(data);
      // store.dispatch("adminClasses/setClasses", data.data);
    });

    socket.on("skills/delete", () => {
      // console.log(data);
      // store.dispatch("adminClasses/setClasses", data.data);
    });
  };
}
