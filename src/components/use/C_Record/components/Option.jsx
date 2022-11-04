import { Panel_ } from "./Panel/Panel_";

export function Option({ op }) {
  switch (op) {
    case false:
      return <Panel_ />;
    case true:
      return <></>;
    default:
      break;
  }
}
