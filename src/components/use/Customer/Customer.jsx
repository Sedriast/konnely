import style_C from "../../css/Customer/Customer.module.css";
import { Data } from "../Customer/Data";
//import { useState } from "react";

export function Customer(props) {
	const f = Data.map((a) => {
		return a.backgroud;
	});

	function c(st) {
		console.log(st);
	}

	console.log(
		<button className={style_C.ch} onClick={console.log("LPM")}></button>
	);

	return (
		<>
			<div className={props.clsName}>
				<div className={style_C.panel_}>
					<div className={style_C.theme}>
						<button
							className={style_C.ch}
							onClick={console.log("LPM")}
						>
							Nada
						</button>
					</div>

					<div className={style_C.theme}>
						<button className={style_C.ch} onClick={c(0)}>
							<img
								className={style_C.preview_}
								src="https://drive.google.com/uc?export=download&id=171YQUEx7BERY3MqrCQhk2mpR_Qwp7DLL"
								href=""
								alt=""
							/>
						</button>
					</div>

					<div className={style_C.theme}>
						<button className={style_C.ch} onClick={c(1)}>
							<img
								className={style_C.preview_}
								src="https://drive.google.com/uc?export=download&id=1lJhUinD1j3LSRRLtbXYR5V5k0Mz6dXnO"
								href=""
								alt=""
							/>
						</button>
					</div>

					<div className={style_C.theme}>
						<button className={style_C.ch} onClick={c(2)}>
							<img
								className={style_C.preview_}
								src="https://drive.google.com/uc?export=download&id=1vAb2vSBiGQlzc_FQMFYGW0N0jbabRKw2"
								href=""
								alt=""
							/>
						</button>
					</div>

					<div className={style_C.theme}>
						<button className={style_C.ch} onClick={c(3)}>
							<img
								className={style_C.preview_}
								src="https://drive.google.com/uc?export=download&id=1udAanIgzMRTlXu3V7YNtTAP0X7L5hG59"
								href=""
								alt=""
							/>
						</button>
					</div>

					<div className={style_C.theme}>
						<button className={style_C.ch} onClick={c(4)}>
							<img
								className={style_C.preview_}
								src="https://drive.google.com/uc?export=download&id=11aszYhyH-Hq0-mq1QIo-t9cLYCl88TnE"
								href=""
								alt=""
							/>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
