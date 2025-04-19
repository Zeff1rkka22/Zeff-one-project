function runTask(n) {
    const output = document.getElementById("output");
    output.textContent = ""; // очищаем перед выводом

    const log = (text) => output.textContent += text + "\n";

    switch (n) {
    case 1:
        const a1 = [4, 0, 5, 0, 7, 0, 2, 1, 9, 0];
        const countZeros = a1.filter(x => x === 0).length;
        log("Number of zeros in array: " + countZeros);
        break;

    case 2:
        const d = [2, 4, 5, 0, 7, 0, 2, 2, 10, 8, 13, 6, 10, 14, 11];
        const sumOdd = d.filter((_, i) => i % 2 === 0).reduce((a, b) => a + b, 0);
        log("Sum of numbers at odd positions: " + sumOdd);
        break;

    case 3:
        const c3 = [5, 12, 7, 3, 9, 18, 2, 14, 6, 10];
        const a3 = 5, b3 = 10;
        const countInRange = c3.filter(x => x >= a3 && x <= b3).length;
        log(`Number of elements in the interval [${a3}, ${b3}]: ${countInRange}`);
        break;

    case 4:
        const x4 = [3, 7, -1, 2, 0, 5, 4, 0, 6, 8, 1, -2, 4, 3, 7, 2, 9, -1, 0, 10];
        const firstZeroIndex = x4.indexOf(0);
        const sumBeforeZero = x4.slice(0, firstZeroIndex).reduce((a, b) => a + b, 0);
        log("Index of first zero: " + firstZeroIndex);
        log("Sum of elements before first zero: " + sumBeforeZero);
        break;

    case 5:
        const a5 = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8];
        const pos = a5.filter(x => x > 0);
        const neg = a5.filter(x => x < 0);
        const alt = [].concat(...pos.map((v, i) => [v, neg[i]]));
        log("New alternating array: " + JSON.stringify(alt));
        break;

    case 6:
        const c6 = [2, 3, 1, 5, 0, 6, 7, 8, 9, 1, 0, 2, 4, 5, 3, 1];
        const zi = c6.indexOf(0);
        const product = c6.slice(0, zi).reduce((a, b) => a * b, 1);
        const sumAfter = c6.slice(zi + 1).reduce((a, b) => a + b, 0);
        log("Product before first zero: " + product);
        log("Sum after first zero: " + sumAfter);
        break;

    case 7:
        let x7 = [-1, 5, 3, -2, 4, 6, -3, 0, 2, -4, 5, 7, -6, -7, 8];
        const lastPosIndex = Math.max(...x7.map((v, i) => v > 0 ? i : -1));
        x7.splice(lastPosIndex, 1);
        const remainPos = x7.filter(v => v > 0);
        log("New array of remaining positive numbers: " + JSON.stringify(remainPos));
        break;

    case 8:
        let a8 = [3, 1, -2, 0, 4, 2, -1, 5, 7, 8];
        const zi8 = a8.indexOf(0);
        for (let i = zi8 + 1; i < a8.length; i++) {
          if (a8[i] > 0) a8[i] *= 2;
        }
        log("Modified array: " + JSON.stringify(a8));
        break;

    case 9:
        let a9 = [3, -2, 5, -4, 6, -1, 8, -3, 1, -5, 4, -6];
        let b9 = [...a9.filter(x => x > 0), ...a9.filter(x => x < 0)];
        log("New array b: " + JSON.stringify(b9));
        break;

    case 10:
        const c10 = [0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0];
        const count0 = c10.filter(x => x === 0).length;
        const count1 = c10.filter(x => x === 1).length;
        const first1 = c10.indexOf(1);
        const zeroBefore1 = c10.slice(0, first1).filter(x => x === 0).length;
        log(`Number of 0s: ${count0}`);
        log(`Number of 1s: ${count1}`);
        log(`Number of 0s before first 1: ${zeroBefore1}`);
        break;

    case 11:
        let a11 = [1, 2, 3];
        for (let i = 3; i < 17; i++) {
        a11.push((a11[i-1] + a11[i-2] + a11[i-3]) / 3);
        }
        log("Generated array: " + JSON.stringify(a11));
        break;

    case 12:
        let a12 = [-1, -2, 3, 0.5, 1.5, -0.5, 2, 0.2, -3];
        const fpi = a12.findIndex(x => x > 0);
        for (let i = fpi; i < a12.length; i++) {
        a12[i] = a12[i] > 1 ? a12[i] - 0.5 : a12[i] + 0.5;
        }
        log("Modified array: " + JSON.stringify(a12));
        break;

    case 13:
        let x13 = [0.2, 0.3, 0.5, 0.8, 1.0, 0.6, 0.4, 0.9, 0.15, 0.11, 0.25, 0.3, 0.35, 0.6, 0.45, 0.5, 0.55, 0.2, 0.3, 0.4, 0.22, 0.33, 0.66, 0.88, 0.77, 0.99, 0.44];
        if (Math.min(...x13) > 0.1) x13 = x13.map(v => v > 0 ? 1 : v);
        log("Modified array: " + JSON.stringify(x13));
        break;

    case 14:
        let x14 = [1, -3, -2, 4, -1, -5, -7, 0, 2, -6, -8, -9, 3, 2, -4, 1, 0, 5, -10, -11, 6, -12, -13, 0, 7, 8, 9, -14, -15, 10, 11, 12, 13, 14, 15, -16, 16, -17, 17, 18, -18, -19, 19, 20, -20, -21, 21, -22, 22, -23];
        const minNegIndex = x14.reduce((minI, val, i) => val < 0 && x14[i] < x14[minI] ? i : minI, x14.findIndex(v => v < 0));
        const minVal = x14[minNegIndex];
        for (let i = 0; i < minNegIndex; i++) {
          if (x14[i] < 0) x14[i] *= minVal;
        }
        log("Modified array: " + JSON.stringify(x14));
        break;

    case 15:
        let x15 = [3, -2, -5, -7, 0, 4, -1, -8, -9, -3, -4, 6, -6, -10, -11, -12, 7, 8, 9, -13, 10, 11, 12, -14, 13, 14, 15, 16, 17, -15];
        const minValIndex = x15.indexOf(Math.min(...x15));
        const negBefore = x15.slice(0, minValIndex).filter(x => x < 0);
        log("New array of negatives before min element: " + JSON.stringify(negBefore));
        break;

    case 16:
        let y16 = [-3, -2, -1, 4, 5, 6, 7, 8, 9, -10, -11, -12, 13, 14, 15, 16, 17, -4, -5, -6, -7, 18, 19, 20, -8];
        const minY = Math.min(...y16);
        const minYIndex = y16.indexOf(minY);
        const firstPos = y16.findIndex(x => x > 0);
        [y16[minYIndex], y16[firstPos]] = [y16[firstPos], y16[minYIndex]];
        log("Modified array after swapping: " + JSON.stringify(y16));
        break;

    default:
        log("Неизвестная задача");
    }
}
