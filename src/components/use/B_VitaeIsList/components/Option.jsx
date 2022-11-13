import { SendRabbitData } from "../../F-Forms/NewRabbit/SendRabbitData";
import { List } from "./List/List";

export function Option({ op }) {
  switch (op) {
    case false:
      return <List />;
    case true:
      return <SendRabbitData />;
    default:
      break;
  }
}
