export default {
    getters: {
        shuffledDeck: state => {
            return state.deck.sort(() => Math.random() - 0.5)

        },
        getFiveCards: (state, getters) => getters.shuffledDeck.splice(0, 5),

        getFlopp: (state, getters) => getters.getFiveCards.splice(0, 3),

        getFourthCard: (state, getters) => getters.getFiveCards.splice(0, 1),

        getFifthCard: (state, getters) => getters.getFiveCards.splice(0, 1)
    },
    mutations: {},
    actions: {},
    state: () => ({
        deck: [
            {
                value: '2',
                suit: 'hjärter',
                img: 'hjärter-2.png'
            },
            {
                value: '3',
                suit: 'hjärter',
                img: 'hjärter-3.png'
            },
            {
                value: '4',
                suit: 'hjärter',
                img: 'hjärter-4.png'
            },
            {
                value: '5',
                suit: 'hjärter',
                img: 'hjärter-5.png'
            },
            {
                value: '6',
                suit: 'hjärter',
                img: 'hjärter-6.png'
            },
            {
                value: '7',
                suit: 'hjärter',
                img: 'hjärter-7.png'
            },
            {
                value: '8',
                suit: 'hjärter',
                img: 'hjärter-8.png'
            },
            {
                value: '9',
                suit: 'hjärter',
                img: 'hjärter-9.png'
            },
            {
                value: '10',
                suit: 'hjärter',
                img: 'hjärter-10.png'
            },
            {
                value: 'J',
                suit: 'hjärter',
                img: 'hjärter-j.png'
            },
            {
                value: 'D',
                suit: 'hjärter',
                img: 'hjärter-dam.png'
            },
            {
                value: 'Kung',
                suit: 'hjärter',
                img: 'hjärter-kung.png'
            },
            {
                value: '2',
                suit: 'ruter',
                img: 'ruter-2.png'
            },
            {
                value: '3',
                suit: 'ruter',
                img: 'ruter-3.png'
            },
            {
                value: '4',
                suit: 'ruter',
                img: 'ruter-4.png'
            },
            {
                value: '5',
                suit: 'ruter',
                img: 'ruter-5.png'
            },
            {
                value: '6',
                suit: 'ruter',
                img: 'ruter-6.png'
            },
            {
                value: '7',
                suit: 'ruter',
                img: 'ruter-7.png'
            },
            {
                value: '8',
                suit: 'ruter',
                img: 'ruter-8.png'
            },
            {
                value: '9',
                suit: 'ruter',
                img: 'ruter-9.png'
            },
            {
                value: '10',
                suit: 'ruter',
                img: 'ruter-10.png'
            },
            {
                value: 'J',
                suit: 'ruter',
                img: 'ruter-j.png'
            },
            {
                value: 'D',
                suit: 'ruter',
                img: 'ruter-dam.png'
            },
            {
                value: 'Kung',
                suit: 'ruter',
                img: 'ruter-kung.png'
            },
            {
                value: 'Ess',
                suit: 'ruter',
                img: 'ruter-ess.png'
            },
            {
                value: '2',
                suit: 'spader',
                img: 'spader-2.png'
            },
            {
                value: '3',
                suit: 'spader',
                img: 'spader-3.png'
            },
            {
                value: '4',
                suit: 'spader',
                img: 'spader-4.png'
            },
            {
                value: '5',
                suit: 'spader',
                img: 'spader-5.png'
            },
            {
                value: '6',
                suit: 'spader',
                img: 'spader-6.png'
            },
            {
                value: '7',
                suit: 'spader',
                img: 'spader-7.png'
            },
            {
                value: '8',
                suit: 'spader',
                img: 'spader-8.png'
            },
            {
                value: '9',
                suit: 'spader',
                img: 'spader-9.png'
            },
            {
                value: '10',
                suit: 'spader',
                img: 'spader-10.png'
            },
            {
                value: 'J',
                suit: 'spader',
                img: 'spader-j.png'
            },
            {
                value: 'D',
                suit: 'spader',
                img: 'spader-dam.png'
            },
            {
                value: 'Kung',
                suit: 'spader',
                img: 'spader-kung.png'
            },
            {
                value: 'Ess',
                suit: 'spader',
                img: 'spader-ess.png'
            },
            {
                value: '2',
                suit: 'klöver',
                img: 'klöver-2.png'
            },
            {
                value: '3',
                suit: 'klöver',
                img: 'klöver-3.png'
            },
            {
                value: '4',
                suit: 'klöver',
                img: 'klöver-4.png'
            },
            {
                value: '5',
                suit: 'klöver',
                img: 'klöver-5.png'
            },
            {
                value: '6',
                suit: 'klöver',
                img: 'klöver-6.png'
            },
            {
                value: '7',
                suit: 'klöver',
                img: 'klöver-7.png'
            },
            {
                value: '8',
                suit: 'klöver',
                img: 'klöver-8.png'
            },
            {
                value: '9',
                suit: 'klöver',
                img: 'klöver-9.png'
            },
            {
                value: '10',
                suit: 'klöver',
                img: 'klöver-10.png'
            },
            {
                value: 'J',
                suit: 'klöver',
                img: 'klöver-j.png'
            },
            {
                value: 'D',
                suit: 'klöver',
                img: 'klöver-dam.png'
            },
            {
                value: 'Kung',
                suit: 'klöver',
                img: 'klöver-kung.png'
            },
            {
                value: 'Ess',
                suit: 'klöver',
                img: 'klöver-ess.png'
            },
        ]
    }),
}