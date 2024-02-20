export function calculate(numArr, opsArray) {
    const operations = ['^', 'x', '/', '+', '-'];

    const applyOperation = (a, b, op) => {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '÷': return a / b;
            case '²': return a ** b;  //for x²
            case '%': return a % b;
            default: throw new Error('Unknown operation' + op);
        }
    };

    for (let op of operations) {
        while (opsArray.includes(op)) {
            let i = opsArray.indexOf(op);
            numArr[i] = applyOperation(numArr[i], numArr[i + 1], op);
            numArr.splice(i + 1, 1);
            opsArray.splice(i, 1);
        }
    }

    return numArr[0];
}


