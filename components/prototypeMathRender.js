Graph_1.prototype.MathRender = function () {
    return function (arr, summComponent) {
        // const summREduce = (accumulator, currentValue) => accumulator + currentValue; // сумма всех объектов 
        // const resultSumm = arr.reduce(summREduce);
        // console.log(arr)
        const arrBox = arr.map(element => {
            element.percent = (100 * element.value) / summComponent
            return element
        });

        return {
            arr: arrBox,
            resNum: summComponent
        }
    }
};