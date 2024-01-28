import { ReactElement, createContext } from "react";

import { Socket } from "socket.io-client";

import { useSocket } from "@/hooks";

export interface SocketCtxState {
  socket: Socket;
  online: boolean;
}

export const SocketContext = createContext<SocketCtxState>(
  {} as SocketCtxState
);

interface ISocketProvider {
  children: ReactElement;
}

export const SocketProvider = ({ children }: ISocketProvider) => {
  const { socket, online } = useSocket(
    process.env.NEXT_PUBLIC_SOCKET_URL ?? ""
  );

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
