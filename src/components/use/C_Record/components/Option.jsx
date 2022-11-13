import { PanelChanges } from "./PanelChanges/PanelChanges";
import { PanelInvoice } from "./PanelInvoices/PanelInvoice";

export function Option({ op }) {
  switch (op) {
    case false:
      return <PanelChanges />;
    case true:
      return <PanelInvoice />;
    default:
      break;
  }
}
