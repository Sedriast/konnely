import '../css/Navbar/Active.css'
import { useState } from 'react';
import style from '../css/Navbar/Navbar.module.css'
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';

export function Navbar(){
	
	const [sidebar, setSidebar] = useState(false); 
	const showSidebar = () => setSidebar(!sidebar);

	return(
		<>
			<div className={style.navbarMenu}>
				<Link className={style.bars} to="#">
					<div className={style.iconMenu} onClick={showSidebar} >
						<div className={style.decor}></div>
					</div>
				</Link>
			</div>
			<nav className={sidebar ? "navMenu active" : "navMenu"}>
				<ul className={style.navMenuItems} onClick={showSidebar}>
					<li>
						<Link className={style.bars} to='#'>
							<div className={style.navbarToggle} />
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={style.navText}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	);
}