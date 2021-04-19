



Graph_1.prototype.startRender = function () {
    const mathRender = this.MathRender()
    const summValue = (accumulator, currentValue) => accumulator + currentValue; // сумма всех объектов 
    const resultSumm = (this.dataComponentGraph.map(element => element.value)).reduce(summValue);
    const dataForRendering = mathRender(this.dataComponentGraph, resultSumm)
    this.domElement.append(this.DomRender(dataForRendering))
};









