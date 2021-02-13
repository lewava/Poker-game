export default {
    state: () => ({
        round: 1,
    }),
    getters: {
    },
    mutations: {
        nextRound(state){
            if(state.round > 3) state.round = 1
            else state.round++
        }
    },
    actions: {
        nextRound(context) {
            context.commit("nextRound")
        }
    }
}