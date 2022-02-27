import style from "../css/SearchBar.module.css";

export function SearchBar(props) {
  const clName = props.clName;
  return (
    <div className={clName}>
      <div className={style.iconSePanel}>
        <image className={style.iconSe} src="" href="" />
      </div>
      <div>
        <input className={style.inputSe} type="text" placeholder="Buscar" />
      </div>
    </div>
  );
}
