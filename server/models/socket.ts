const { TicketList, ITicketList } = require("./ticket-list");
const { ITicket } = require("./ticket");

export class Sockets {
  io: any;
  ticketList: InstanceType<typeof ITicketList>;

  constructor(io) {
    this.io = io;
    this.ticketList = new TicketList();
    this.socketEvent();
  }

  socketEvent() {
    this.io.on("connection", (socket) => {
      console.log("Client connected");

      socket.on(
        "create-ticket",
        (_, cb: (newTicket: typeof ITicket) => void) => {
          const newTicket = this.ticketList.createTicket();
          cb(newTicket);
        }
      );
    });
  }
}
