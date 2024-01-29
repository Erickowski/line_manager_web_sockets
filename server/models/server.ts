const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const { Server } = require("socket.io");

const { Sockets } = require("./socket");

export class ServerModel {
  app: any;
  port: string;
  server: any;
  io: any;
  socket: any;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = http.createServer(this.app);
    this.io = new Server(this.server);
    this.socket = new Sockets(this.io);
  }

  middlewares() {
    this.app.get("/", (_, res) => {
      res.sendFile(path.resolve(__dirname, "../public/index.html"));
    });

    // Configure cors
    this.app.use(cors());

    this.app.get("/last-tickets", (_, res) => {
      res.json({
        ok: true,
        lastTicketsAssigned: this.socket.ticketList.getLastTickets,
      });
    });
  }

  execute() {
    this.middlewares();

    this.server.listen(this.port, () => {
      console.log("listening on *:", this.port);
    });
  }
}
