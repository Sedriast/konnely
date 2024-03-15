import { useRabbits } from "../../../hooks/useContexts";
import { UI } from "./UI";

export function AddLitter({ language }) {
	const { litters_, rabbits_, rabbit } = useRabbits();
	return (
		<UI
			language={language}
			rabbits_={rabbits_}
			litters_={litters_}
			femaleBunnie={rabbit}
		/>
	);
}
