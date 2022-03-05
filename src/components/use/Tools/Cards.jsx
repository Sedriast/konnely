import { Link } from 'react-router-dom';
import style_Ca from '../../css/Tools/Cards.module.css';
import { Paragraphs } from '../Tools/Paragraphs';

export function Cards(props) {

	return (
		<>
			<div className={style_Ca.Container_} >
				<Link to='/data'>
					<div className={style_Ca.Panel_}  >
						<img className={style_Ca.Image_} src={props.url} alt="" style={{ objectFit: "cover" }}/>
						<h1 className={style_Ca.Name_} >{props.rabitDataName}</h1>
						{/* <Paragraphs clName_ = {style_Ca.expParagPanel} 
									b1={props.data1} b2={props.data2} t1='Raza' t2='Estado'/> */}
					</div>
				</Link>
			</div>
		</>
	);
}