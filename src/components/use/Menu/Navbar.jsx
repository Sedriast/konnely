import '../../css/Menu/Active.css';
import { Data } from './Data';
import { useState } from "react";
import style_M from '../../css/Menu/Navbar.module.css';
import { Link } from "react-router-dom";


export function Navbar() {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className={style_M.navbarMenu}>
				<Link className={style_M.bars} to="#">
					<div className={style_M.iconMenu} onClick={showSidebar}>
						<div className={style_M.decor}></div>
					</div>
				</Link>
			</div>
			<nav className={sidebar ? "navMenu active" : "navMenu"}>
				<ul className={style_M.navMenuItems} onClick={showSidebar}>
					<li>
						<Link className={style_M.bars} to="#">
							<div className={style_M.navbarToggle} />
						</Link>
					</li>
					{Data.map((item, index) => {
						return (
							<li key={index} className={style_M.navText}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}