export const state = () => ({
    content: {},
});

export const getters = {};

export const mutations = {
    insertContent: (state, payload) => {
        state.content = payload;
    },
};

export const actions = {
    getContent({ commit, state }, payload) {
        // Don't fetch data when data is available
        if (Object.keys(state.content).length > 0) return;
        commit('insertContent', payload);
    },
};
