import React from "react";
import { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

export default function compmap<T>(
  dataArray: T[],
  Component: React.ComponentType<T>
): ReactNode[] {
  const keyGenerator = (dataItem: any) => {
    return dataItem.key ? dataItem.key : uuidv4();
  };

  return dataArray.map((dataItem) => (
    <Component key={keyGenerator(dataItem)} {...dataItem} />
  ));
}
