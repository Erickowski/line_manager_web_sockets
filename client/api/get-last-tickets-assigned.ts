import { ITicket } from "@/types";

export interface ILastTicketsAssigned {
  ok: boolean;
  lastTicketsAssigned: ITicket[];
}

export async function getLastTicketsAssigned() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SOCKET_URL}/last-tickets`
  );

  const data = await response.json();

  return data;
}
