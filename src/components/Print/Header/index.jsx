import UDEC_logo from "../../../constants/assets/logos/UDEC_103633.svg";

export function Header({ languaje, isFemale }) {
	const {
		code,
		date,
		vertion,
		validity,
		format: {
			code_,
			vertion_,
			validityDate_,
			titles: { sizeProject, process, type },
		},
	} = languaje;

	const currentDate = new Date().toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	return (
		<header>
			<div>
				<img src={UDEC_logo} alt="UDEC_logo" />
			</div>
			<div>
				<h3>{sizeProject}</h3>
				<h3>{process}</h3>
				<h3>{isFemale ? type[0] : type[1]}</h3>
			</div>
			<div>
				<span>
					<h3>{code}</h3>
					<h3>{vertion}</h3>
					<h3>{validity}</h3>
					<h3>{date}</h3>
				</span>
				<span>
					<h4>{code_}</h4>
					<h4>{vertion_}</h4>
					<h4>{validityDate_}</h4>
					<h4>{currentDate}</h4>
				</span>
			</div>
		</header>
	);
}
