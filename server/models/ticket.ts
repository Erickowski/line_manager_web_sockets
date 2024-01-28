const { v4: uuidV4 } = require("uuid");

export interface ITicket {
  id: string;
  number: number;
  desktop: string;
  username: string;
}

export class Ticket implements ITicket {
  id: string;
  number: number;
  desktop: string;
  username: string;

  constructor(number: number) {
    this.id = uuidV4();
    this.number = number;
    this.desktop = null;
    this.username = null;
  }
}
