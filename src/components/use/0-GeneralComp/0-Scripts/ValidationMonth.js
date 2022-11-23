export const ValidationMonth = (props) => {
  const month_message = {
    0: "Ene",
    1: "Feb",
    2: "Mar",
    3: "Abr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Ago",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dic",
  };
  const month_message_default = "Sin Datos";

  return <>{month_message[props] || month_message_default}</>;
};
