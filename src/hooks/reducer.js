import { reducer_keys } from "../constants/keys";

const object_reducer = (state, payload) => ({
    [reducer_keys.setUser]: {
        ...state,
        user: payload,
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
        littersList: payload,
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