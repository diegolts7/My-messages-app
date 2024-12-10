import React, { createContext, useState } from "react";
import { MessageRoutes } from "../../provider/api/messageRoutes/MessageRoutes";

const ContextHome = createContext();

const HomeContext = ({ children }) => {
  const messagesRoutes = new MessageRoutes();
  

  const pegarMessages = async(id, token, setLoading)=>{
      try {
        setLoading(true);
        const response = await messagesRoutes.getMessagesByUser(id, token);

      } catch (error) {
        if(error.response.status)
        
      }finally{
        setLoading(false);
      }
  }

  return <ContextHome.Provider>{children}</ContextHome.Provider>;
};

export { HomeContext, ContextHome };
