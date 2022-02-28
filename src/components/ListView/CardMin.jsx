import { Link } from 'react-router-dom';
import style from '../css/ListView/ListViews.module.css';
import cardStyle from '../css/ListView/CardMin.module.css';
import { Paragraphs } from '../helpers/Paragraphs';

export function CardMin(props) {
	const url = props.url;
	const rabitDataName = props.rabitDataName;
	const rabitData = props.rabitData;

	return (
		<>
			<div className={cardStyle.Container_} >
				<Link to='/data'>
					<div className={cardStyle.Panel_}  >
						<img className={cardStyle.Image_} src={url} alt="" style={{ objectFit: "cover" }}/>
						<h1 className={cardStyle.Name_} >{rabitDataName}</h1>
						<Paragraphs panel={cardStyle.ParagPanel} text_={rabitData}/>
					</div>
				</Link>
			</div>
		</>
	);
}
