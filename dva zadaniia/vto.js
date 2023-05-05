let konfetii = [];
for (let i = 1; i <= 7; i++) {
    const konfeta = prompt("Сколько конфет вы съели в ", {i}, " день?");
    konfetii.push(Number(konfeta));
}
let konfet = 0;
for (let i = 0; i < konfetii.length; i++) {
    konfet += konfetii[i];
}
const SredneeArfmeticheskoe = konfet / konfetii;
console.log("За последние 7 дней вы съели ", konfet, " конфет.\nВы съедаете ", SredneeArfmeticheskoe, " конфет в день");