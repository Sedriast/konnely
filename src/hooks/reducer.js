import { reducer_keys } from "../constants/keys";

const object_reducer = (state, payload) => ({
    [reducer_keys.setUser]: {
        ...state,
        user_: payload,
        loading: false
    },
    [reducer_keys.newEmail]: {
        ...state,
        email: payload,
        loading: false
    },
    [reducer_keys.setRabbit]: {
        ...state,
        rabbit: payload,
    },
    [reducer_keys.setRabbitsList]: {
        ...state,
        rabbitsList: payload,
    },
    [reducer_keys.setLitters]: {
        ...state,
        litters: payload,
    },
    [reducer_keys.setLitterList]: {
        ...state,
        littersList: payload,
    },
    [reducer_keys.setFilter]: {
        ...state,
        filter: payload,
    },
    [reducer_keys.setRabbits]: {
        ...state,
        rabbits: payload,
    },
});

function reducer(state, { type, payload }) {
    if (object_reducer(state)[type]) {
        return (object_reducer(state, payload)[type])
    } else {
        return (state);
    }
};

export { reducer };