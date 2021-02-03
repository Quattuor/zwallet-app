import React, {useContext, useState, useEffect} from 'react';
import {io} from 'socket.io-client';

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

import {API_URL} from '@env';

export function SocketProvider({id, children}) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocketConnection = io(`${API_URL}`, {
      query: {id},
    });
    setSocket(newSocketConnection);

    return () => newSocketConnection.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
