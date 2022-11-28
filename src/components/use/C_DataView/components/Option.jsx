import { Healt } from './Healt/Healt';
import { Semen } from './Semen/Semen';
import { Vitae } from './Vitae/Vitae';

export function Option({ setOptionSelect, op, rabbit }) {
    switch (op) {
        case 0:
            return <Vitae rabbit={rabbit} />;
        case 1:
            return <Healt setOptionSelect={setOptionSelect} />;
        case 2:
            return <Semen setOptionSelect={setOptionSelect} />;
        default:
            break;
    }
}
