import * as React from "react";
import * as ReactDOM from "react-dom";

import { MockDataEntity } from "./components/MockDataEntity/MockDataEntityInterface";

import { Hello } from "./components/Hello";
import { HelloWorld } from "./components/HelloWorld";

const testData: MockDataEntity[] = [
  {
    id: 1,
    isActive: true,
    description: "this is test data",
    meta: {
      edited: false,
      lastUpdatedDateTime: new Date()
    }
  },
  {
    id: 2,
    isActive: false,
    description: "more test data",
    meta: {
      edited: true,
      lastUpdatedDateTime: new Date()
    }
  },
  {
    id: 3,
    isActive: true,
    description: "ID 3 has some data also",
    meta: {
      edited: false,
      lastUpdatedDateTime: new Date()
    }
  },
  {
    id: 4,
    isActive: true,
    description: "Wow this typescript stuff is new and exciting",
    meta: {
      edited: false,
      lastUpdatedDateTime: new Date()
    }
  }
];

ReactDOM.render(
  <div>
    <Hello
      usefulState={{ description: "Welcome to Typescript Generic React!" }}
      data={testData}
    />
    <HelloWorld
      usefulState={{ title: "Additional Type With Same Generic Interface!" }}
      data={testData[0]}
    />
  </div>,
  document.getElementById("example")
);
