function SredneeArfmeticheskoe(arr) {
    let summa = 0;
    for (let i = 0; i < arr.length; i++) {
        summa += arr[i];
    }
    return summa / arr.length;
}
const cifrii = [4, 7, 2, 9, 5];
console.log(SredneeArfmeticheskoe(cifrii));