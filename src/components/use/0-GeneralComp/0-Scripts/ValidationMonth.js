export const ValidationMonth = (props) => {
  const month_message = {
    0: "En",
    1: "Febr",
    2: "Mzo",
    3: "Abr",
    4: "Myo",
    5: "Jun",
    6: "Jul",
    7: "Agto",
    8: "Sept",
    9: "Oct",
    10: "Nov",
    11: "Dic",
  };
  const month_message_default = "Sin Datos";

  return <>{month_message[props] || month_message_default}</>;
};
