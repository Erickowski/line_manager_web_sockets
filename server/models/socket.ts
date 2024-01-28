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

      socket.on(
        "assign-ticket",
        (
          user: { username: string; desktop: string },
          cb: (newTicket: typeof ITicket) => void
        ) => {
          const { username, desktop } = user;
          const assignedTicket = this.ticketList.assignTicket(
            username,
            desktop
          );
          cb(assignedTicket);

          this.io.emit("new-ticket-assigned", this.ticketList.getLastTickets);
        }
      );
    });
  }
}
