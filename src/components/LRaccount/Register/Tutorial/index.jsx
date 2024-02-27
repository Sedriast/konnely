import firstStep from "../../../../constants/assets/tutorial/one_config.png";
import secondstep from "../../../../constants/assets/tutorial/two_menuConf.png";
import tirthStep from "../../../../constants/assets/tutorial/tirth_unwantedMail.png";
import fourthStep from "../../../../constants/assets/tutorial/fourth_safeDomains.png";

export function Tutorial({
	st,
	steps: {
		first,
		second,
		tirth,
		fourth,
		fifth,
		sixth,
		seventh,
		eighth,
		ninth,
		tenth,
	},
}) {
	return (
		<div className={st.tutorial_panel}>
			<section>
				<li>{first}</li>
				<li>{second}</li>
				<li>{tirth}</li>
			</section>

			<img src={firstStep} alt="" />

			<img src={secondstep} alt="" />

			<section>
				<li>{fourth}</li>
				<li>{fifth}</li>
				<li>{sixth}</li>
			</section>

			<section>
				<li>{seventh}</li>
				<li>{eighth}</li>
				<li>{ninth}</li>
			</section>

			<img src={tirthStep} alt="" />

			<img src={fourthStep} alt="" />

			<section>
				<li>{tenth}</li>
				<br />
				<h1>Konnely@konnely-67d6a.firebaseapp.com</h1>
			</section>
		</div>
	);
}
