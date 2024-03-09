export function Lists({ name, defaultValue, options, placeholder, required }) {
	return (
		<select name={name} defaultValue={defaultValue} required={required}>
			<option hidden value="">
				{placeholder}
			</option>
			{options?.map((option_, index) => (
				<option key={index} value={option_}>
					{option_}
				</option>
			))}
		</select>
	);
}
