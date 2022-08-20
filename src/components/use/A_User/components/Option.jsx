import { ListUsers } from './ListUsers';
import { Preferences } from './Preferences';
import { Themes } from './Themes';

export function Option({ op }) {
    switch (op) {
        case 0:
            return <Preferences />;
        case 1:
            return <Themes />;
        case 2:
            return <ListUsers />;
        default:
            break;
    }
}
