import { data } from "mock-data/data";
import { useState } from "react";

import s from "./BusinessContext.module.css";
import { MessageDetails } from "./message/MessageDetails";
import { MessageCard } from "./messageCard/MessageCard";
export const BusinessContext = () => {
  const [messageDetails, setMessageDetails] = useState();
  // const handleSetDatails = (details) => {
  //   setMessageDetails(details);
  // };
  console.log(messageDetails);
  return (
    <div className={s.main}>
      <div className={s.messageList}>
        {data.context.map((contextData) => (
          <MessageCard
            key={contextData.title}
            title={contextData.title}
            text={contextData.content}
            author={contextData.author}
            created={contextData.created_at}
            onSetDatails={(event) => setMessageDetails(event)}
          />
        ))}
      </div>
      {messageDetails && <MessageDetails messageDetails={messageDetails} />}
    </div>
  );
};
