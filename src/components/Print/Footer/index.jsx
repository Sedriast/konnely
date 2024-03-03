export function Footer({ language }) {
	const { address_, web } = language;
	return (
		<footer>
			<address>
				{address_[0]}
				<br />
				{address_[1]}
				<a href="tel:+0918553055" target="_blank" rel="noreferrer">
					(091) 855 3055/3056
				</a>
				<br />
				{address_[2]}
				<a href="tel:018000180414" target="_blank" rel="noreferrer">
					018000180414
				</a>
			</address>
			<p>
				<a
					href="http://www.ucundinamarca.edu.co"
					target="_blank"
					rel="noreferrer">
					www.ucundinamarca.edu.co
				</a>
				<br />
				{web}
				<a
					href="mailto:info@ucundinamarca.edu.co"
					target="_blank"
					rel="noreferrer">
					info@ucundinamarca.edu.co
				</a>
			</p>
			<p>NIT: 890.680.062-2</p>
		</footer>
	);
}
