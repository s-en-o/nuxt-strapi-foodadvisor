export const state = () => ({
    homePage: [],
});

export const getters = {};

export const mutations = {
    insertContent: (state, payload) => {
        state.homePage = payload;
    },
};

export const actions = {
    getContent({ commit, state }, payload) {
        // Don't fetch data when data is available
        if (state.homePage.length) return;
        commit('insertContent', payload);
    },
};
