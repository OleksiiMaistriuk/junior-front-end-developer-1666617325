import { data } from "mock-data/data";
import { useState } from "react";

import s from "./BusinessContext.module.css";
import { MessageDetails } from "./message/MessageDetails";
import { MessageCard } from "./messageCard/MessageCard";
export const BusinessContext = () => {
  const [messageDetails, setMessageDetails] = useState();
  const handleGetDifference = (date) => {
    const msDiff = new Date(date).getTime() - new Date().getTime();
    const difference = Math.floor(-msDiff / (1000 * 60 * 60 * 24));
    return difference;
  };

  return (
    <div className={s.main}>
      <div className={s.messageList}>
        {data.context.map((contextData, index) => (
          <MessageCard
            key={index}
            title={contextData.title}
            text={contextData.content}
            author={contextData.author}
            created={handleGetDifference(contextData.created_at)}
            date={contextData.created_at}
            onSetDatails={(event) => setMessageDetails(event)}
          />
        ))}
      </div>
      {messageDetails && <MessageDetails messageDetails={messageDetails} />}
    </div>
  );
};
