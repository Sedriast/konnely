export function InputDate(props) {
  const place = props.place;
  const iden = props.iden;
  const clName = props.clName;
  const { handleChanche } = props;

  window.addEventListener("load", function () {
    document.getElementById(iden).type = "text";
    document.getElementById(iden).addEventListener("blur", function () {
      document.getElementById(iden).type = "text";
    });
    document.getElementById(iden).addEventListener("focus", function () {
      document.getElementById(iden).type = "date";
    });
  });

  return (
    <input
      className={clName}
      name={place}
      type="date"
      id={iden}
      placeholder={place}
      onChange={handleChanche}
    />
  );
}
