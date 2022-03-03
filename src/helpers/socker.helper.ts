import jwt from "jsonwebtoken";
import { USER_RESPONSE } from "../constants/response.constant";

const initSocketIO = (io: any) => {
  let chatRooms = {}; //Don't use this to emit message
  let isAuthenticated = true;
  io.on("connection", (socket) => {
    // Socket Authentication
    // if (socket.handshake.query && socket.handshake.query.token) {
    //   const token = socket.handshake.query.token.replace("Bearer ", "");
    //   jwt.verify(token, process.env.SECRET, function (error, decoded) {
    //     if (error) {
    //       console.log("error", error);
    //       isAuthenticated = false;
    //       return;
    //     }
    //     isAuthenticated = true;
    //     socket.decoded = decoded.data;
    //   });
    // } else {
    //   socket.emit("exception", { errorMessage: USER_RESPONSE.TOKEN_ERROR });
    // }

    if (!isAuthenticated) {
      socket.emit("exception", { errorMessage: USER_RESPONSE.TOKEN_ERROR });
    } else {
      socket.emit("connected", socket.id);
      console.log("socket connected & authenticated", socket.id);

      //Global socket to emit
      global.gSocket = socket;

      socket.on("join-room", (data: { room_id: string }) => {
        chatRooms[data.room_id] = { socket: socket.id };
        socket.join(data.room_id);
        io.to(data.room_id).emit("user-connected", socket.id);
      });

      socket.on("update-game", (data) => {
        io.to(data.room_id).emit("update-game", data);
      });

      socket.on("update-all-guesses", (data) => {
        io.to(data.room_id).emit("update-all-guesses", data);
      });
    }
  });
};

export default initSocketIO;
