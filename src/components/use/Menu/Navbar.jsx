import '../../css/Menu/Active.css';
import { Data } from './Data';
import { useState } from "react";
import style_M from '../../css/Menu/Navbar.module.css';
import { Link } from "react-router-dom";


export function Navbar(props) {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className={props.clsName}>
				<div className={style_M.panel_}>
					<Link className={style_M.link_} to="#">
						<div className={style_M.gradient_} onClick={showSidebar}>
							<div className={style_M.moon_} />
						</div>
					</Link>
				</div>
				<nav className={sidebar ? "menu_ active" : "menu_"}>
					<ul className={style_M.items_} onClick={showSidebar}>
						<li>
							<Link className={style_M.link_} to="#">
								<div className={style_M.toggle_} />
							</Link>
						</li>
						{Data.map((item, index) => {
							return (
								<li key={index} className={style_M.text_}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</>
	);
}