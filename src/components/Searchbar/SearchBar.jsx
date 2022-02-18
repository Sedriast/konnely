import style from '../css/SearchBar.module.css';

export function SearchBar(){
	return(
	<div className={style.subPanelSe}>
		<input className={style.inputSe} type='text' />
		<div className={style.iconSe}>
			<image src='' href=''></image>    
		</div>
	</div>
	); 
}