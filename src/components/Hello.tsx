import * as React from "react";
import { MockDataEntity } from "./MockDataEntity/MockDataEntityInterface";
import { HelloComponent } from "./HelloComponent";

interface UsefulState {
  description: string;
}

const { useState } = React;

export const Hello: HelloComponent<MockDataEntity[], UsefulState> = ({
  data,
  usefulState
}) => {
  return (
    <div>
      <h1>{usefulState.description}</h1>
      {data.map(
        ({
          id,
          isActive,
          description,
          meta: { lastUpdatedDateTime, edited }
        }) => {
          return (
            <div key={id}>
              <br></br>
              <h3>{id}</h3>
              <div>
                <div>{isActive ? "Active" : "Inactive"}</div>
                <div>{description}</div>
                <div>{lastUpdatedDateTime.toString()}</div>
                <div>{edited ? "Edited Data" : "Original"}</div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
