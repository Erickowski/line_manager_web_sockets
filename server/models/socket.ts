export class Sockets {
  io: any;

  constructor(io) {
    this.io = io;

    this.socketEvent();
  }

  socketEvent() {
    this.io.on("connection", (socket) => {
      console.log("Client connected");
      socket.on("message-to-server", (data) => {
        this.io.emit("message-from-server", data);
      });
    });
  }
}
