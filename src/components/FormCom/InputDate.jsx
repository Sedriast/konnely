import style from '../css/Form.module.css';

export function InputDate(props){

    const place = props.place;
	const iden = props.iden;

    window.addEventListener(
        'load',function(){ 
            document.getElementById(iden).type= 'text';
            document.getElementById(iden).addEventListener('blur', function(){
                                                                    document.getElementById(iden).type= 'text';
                                                                });
			document.getElementById(iden).addEventListener('focus',function(){document.getElementById(iden).type= 'date';});});

    return(
        <input type='text' id={iden} className={style.dateDestete} placeholder={place} />
    );
}