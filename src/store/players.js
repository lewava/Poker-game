export default {
    state: () => ({
        player: {
            name: 'Leon Wass Vallin',
            cards: [],
            money: 1500,
            img: 'profilbild',
            fold: false
        }
    }),
    mutations: {
        fold(state) {
            state.player.fold = true
        }
    },
    actions: {
        fold(context) {
            context.commit("fold")
        }
    }
}