export function solveHand(cards) {
    let Hand = require("pokersolver").Hand;
    const hand = Hand.solve(cards)
    console.log(hand.cardPool)
    return hand.descr

}