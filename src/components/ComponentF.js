import React from "react";
import { UserContext, ChannelContext } from "../App";
const ComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <>
              <ChannelContext.Consumer>
                {(channel) => <div>{channel}</div>}
              </ChannelContext.Consumer>
              <div>User context value {user}</div>
            </>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;
