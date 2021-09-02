import * as React from "react";
import { MockDataEntity } from "./MockDataEntity/MockDataEntityInterface";
import { HelloComponent } from "./HelloComponent";

interface UsefulState {
  title: string;
}

const { useState } = React;

export const HelloWorld: HelloComponent<MockDataEntity, UsefulState> = ({
  data: {
    id,
    isActive,
    description,
    meta: { lastUpdatedDateTime, edited }
  },
  usefulState
}) => {
  return (
    <div>
      <h1>{usefulState.title}</h1>
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
    </div>
  );
};
