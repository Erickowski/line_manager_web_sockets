const { Ticket, ITicket } = require("./ticket");

export interface ITicketList {
  lastNumber: number;
  pending: InstanceType<typeof ITicket>[];
  assigned: InstanceType<typeof ITicket>[];
  getNextNumber: number;
  getLastTickets: InstanceType<typeof ITicket>[];
  createTicket: () => InstanceType<typeof ITicket>;
  assignTicket: (username: string, desktop: number) => void;
}

export class TicketList implements ITicketList {
  lastNumber: number;
  pending: InstanceType<typeof ITicket>[];
  assigned: InstanceType<typeof ITicket>[];

  constructor() {
    this.lastNumber = 0;
    this.pending = [];
    this.assigned = [];
  }

  get getNextNumber() {
    this.lastNumber++;
    return this.lastNumber;
  }

  get getLastTickets() {
    return this.assigned.slice(0, 13);
  }

  createTicket() {
    const newTicket = new Ticket(this.getNextNumber);
    this.pending.push(newTicket);
    return newTicket;
  }

  assignTicket(username: string, desktop: number) {
    if (!this.pending.length) {
      return null;
    }

    const nextTicket = this.pending.shift();

    nextTicket.username = username;
    nextTicket.desktop = desktop;

    this.assigned.unshift(nextTicket);

    return nextTicket;
  }
}
