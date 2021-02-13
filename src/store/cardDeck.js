export default {
    mutations: {
        dealCards(state) {
            state.dealtCards = [];
            this.state.players.player.cards = [];
            state.flopp = [];
            state.fourthCard = [];
            state.fifthCard = [];
            state.dealtCards = state.deck.slice(0, 7);
            this.state.players.player.cards.push(state.dealtCards[0], state.dealtCards[1]);
            this.state.players.player.fold = false;
            state.flopp.push(state.dealtCards[2], state.dealtCards[3], state.dealtCards[4]);
            state.fourthCard.push(state.dealtCards[5]);
            state.fifthCard.push(state.dealtCards[6]);

        },
        shuffleDeck(state) {
            state.deck.sort(() => Math.random() - 0.5)
        },
    },
    actions: {
        shuffleDeck(context) {
            context.commit("shuffleDeck")
        },
        dealCards(context) {
            context.commit("dealCards")
        }
    },
    state: () => ({
        dealtCards: [],
        flopp: [],
        fourthCard: [],
        fifthCard: [],
        deck: [
            {
                value: '2h',
                img: 'hjärter-2.png'
            },
            {
                value: '3h',
                img: 'hjärter-3.png'
            },
            {
                value: '4h',
                img: 'hjärter-4.png'
            },
            {
                value: '5h',
                img: 'hjärter-5.png'
            },
            {
                value: '6h',
                img: 'hjärter-6.png'
            },
            {
                value: '7h',
                img: 'hjärter-7.png'
            },
            {
                value: '8h',
                img: 'hjärter-8.png'
            },
            {
                value: '9h',
                img: 'hjärter-9.png'
            },
            {
                value: 'Th',
                img: 'hjärter-10.png'
            },
            {
                value: 'Jh',
                img: 'hjärter-j.png'
            },
            {
                value: 'Qh',
                img: 'hjärter-dam.png'
            },
            {
                value: 'Kh',
                img: 'hjärter-kung.png'
            },
            {
                value: 'Ah',
                img: 'hjärter-ess.png'
            },
            {
                value: '2r',
                img: 'ruter-2.png'
            },
            {
                value: '3r',
                img: 'ruter-3.png'
            },
            {
                value: '4r',
                img: 'ruter-4.png'
            },
            {
                value: '5r',
                img: 'ruter-5.png'
            },
            {
                value: '6r',
                img: 'ruter-6.png'
            },
            {
                value: '7r',
                img: 'ruter-7.png'
            },
            {
                value: '8r',
                img: 'ruter-8.png'
            },
            {
                value: '9r',
                img: 'ruter-9.png'
            },
            {
                value: 'Tr',
                img: 'ruter-10.png'
            },
            {
                value: 'Jr',
                img: 'ruter-j.png'
            },
            {
                value: 'Qr',
                img: 'ruter-dam.png'
            },
            {
                value: 'Kr',
                img: 'ruter-kung.png'
            },
            {
                value: 'Ar',
                img: 'ruter-ess.png'
            },
            {
                value: '2s',
                img: 'spader-2.png'
            },
            {
                value: '3s',
                img: 'spader-3.png'
            },
            {
                value: '4s',
                img: 'spader-4.png'
            },
            {
                value: '5s',
                img: 'spader-5.png'
            },
            {
                value: '6s',
                img: 'spader-6.png'
            },
            {
                value: '7s',
                img: 'spader-7.png'
            },
            {
                value: '8s',
                img: 'spader-8.png'
            },
            {
                value: '9s',
                img: 'spader-9.png'
            },
            {
                value: 'Ts',
                img: 'spader-10.png'
            },
            {
                value: 'Js',
                img: 'spader-j.png'
            },
            {
                value: 'Qs',
                img: 'spader-dam.png'
            },
            {
                value: 'Ks',
                img: 'spader-kung.png'
            },
            {
                value: 'As',
                img: 'spader-ess.png'
            },
            {
                value: '2c',
                img: 'klöver-2.png'
            },
            {
                value: '3c',
                img: 'klöver-3.png'
            },
            {
                value: '4c',
                img: 'klöver-4.png'
            },
            {
                value: '5c',
                img: 'klöver-5.png'
            },
            {
                value: '6c',
                img: 'klöver-6.png'
            },
            {
                value: '7c',
                img: 'klöver-7.png'
            },
            {
                value: '8c',
                img: 'klöver-8.png'
            },
            {
                value: '9c',
                img: 'klöver-9.png'
            },
            {
                value: '10c',
                img: 'klöver-10.png'
            },
            {
                value: 'Jc',
                img: 'klöver-j.png'
            },
            {
                value: 'Qc',
                img: 'klöver-dam.png'
            },
            {
                value: 'Kc',
                img: 'klöver-kung.png'
            },
            {
                value: 'Ac',
                img: 'klöver-ess.png'
            },
        ]
    }),
}