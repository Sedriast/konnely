import style from '../css/form.module.css';

export function InputDate(props){

    window.addEventListener('load',function(){

		document.getElementById('dateT').type= 'text';
		
		document.getElementById('dateT').addEventListener('blur',function(){
		
		document.getElementById('dateT').type= 'text';
		
		});
		
		document.getElementById('dateT').addEventListener('focus',function(){
		
		document.getElementById('dateT').type= 'date';
		
		});
		
	});

    const place = props.place;

    return(
        <input type='date' id='dateT' className={style.dateDestete} placeholder={place}/>
    );
}