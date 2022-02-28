import { Link } from 'react-router-dom';
import style from '../css/ListView/ListViews.module.css';
import cardStyle from '../css/ListView/CardMin.module.css';
import { Paragraphs } from '../helpers/Paragraphs';

export function CardMin(props) {
	const url = props.url;
	const rabitDataName = props.rabitDataName;
	const data1 = props.data1;
	const data2 = props.data2;

	return (
		<>
			<div className={cardStyle.Container_} >
				<Link to='/data'>
					<div className={cardStyle.Panel_}  >
						<img className={cardStyle.Image_} src={url} alt="" style={{ objectFit: "cover" }}/>
						<h1 className={cardStyle.Name_} >{rabitDataName}</h1>
						<Paragraphs clName_ = {cardStyle.expParagPanel} 
									b1={data1} b2={data2} t1='Raza' t2='Estado'/>
					</div>
				</Link>
			</div>
		</>
	);
}
