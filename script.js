
// Function Animation

async function animNumber(domElem){

    setTimeout(v=>{
        let number = 0
        let startNumber = document.getElementById(domElem).innerHTML
        let countSec = 5

        // Доделать при startNumber => 1000
        // startNumber/1000 > 1? countSec = 80 : null

        const refreshIntervalId = setInterval(v=>{
            number < startNumber? number++ : clearInterval(refreshIntervalId);
            number++
            document.getElementById(domElem).innerHTML = number
        },countSec)
    },0)





}

const setIdRandom = () => {
    let boolSetIt = true
    let newRandom = Math.floor(Math.random()*1000000)
    while (boolSetIt) {
        document.getElementById(newRandom) === null? boolSetIt = false : null
    }
    return newRandom

}









function Graph_1({ domElement, count, dataComponentGraph, width, height, textCenter, animationTextCenter, rotateCircle, animationCircleItem }) {


    this.domElement = domElement || document.getElementsByTagName("body")[0]
    this.count = count || 14;
        this.width = width || 500;
        this.height = height || 500;
        this.textCenter = textCenter? true : false; 
        this.animationTextCenter = animationTextCenter;
        this.animationCircleItem = animationCircleItem ? true : false;
        this.rotateCircle = rotateCircle || 0 ;
        this.dataComponentGraph = dataComponentGraph || [
            { id: 1, color: "#955EFA", value: 192, textValue: "2020 г." },
            { id: 2, color: "#0099E0", value: 181, textValue: "2017 г." },
            { id: 3, color: "#00CBF1", value: 180, textValue: "2018 г." },
            { id: 4, color: "#2D68DA", value: 125, textValue: "2019 г." },
        ]

        

        console.log(this.animationCircleItem)

        // console.log("textCenter:", this.textCenter)
        // console.log("animationTextCenter:", this.animationTextCenter)



}

Graph_1.prototype.DomRender = function ({ arr, resNum }) {
    let svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgContainer.setAttributeNS(null, 'href', 'http://www.google.com');
    svgContainer.setAttributeNS(null, 'height', this.height);
    svgContainer.setAttributeNS(null, 'width', this.width);
    svgContainer.setAttributeNS(null, 'viewBox', '0 0 20 20');


    let gWrapper = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gWrapper.setAttributeNS(null, 'style', `transform-origin: center center;transform: rotate(${this.rotateCircle}deg); `);



    let coutCircle = 0
    for (let item of arr) {
        let componentCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        componentCircle.setAttributeNS(null, "cx", 10);
        componentCircle.setAttributeNS(null, "cy", 10);
        componentCircle.setAttributeNS(null, "r", 5);
        componentCircle.setAttributeNS(null, "fill", "transparent");
        componentCircle.setAttributeNS(null, "stroke", item.color);
        componentCircle.setAttributeNS(null, "stroke-width", 10);
        componentCircle.setAttributeNS(null, "stroke-dasharray", `0 calc(${coutCircle} * 31.4 / 100) calc(${item.percent}  * 31.4 / 100) 31.4`);
        componentCircle.setAttributeNS(null, "transform", "rotate(-90) translate(-20)");

        gWrapper.append(componentCircle)
        coutCircle += item.percent
    }
    svgContainer.append(gWrapper)

    let circleD = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleD.setAttributeNS(null, "cx", 10);
    circleD.setAttributeNS(null, "cy", 10);
    circleD.setAttributeNS(null, "r", 5);
    circleD.setAttributeNS(null, "fill", "white");
    svgContainer.append(circleD)

    let idNumber = setIdRandom()


    if(this.textCenter) {
        let textAllComp = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textAllComp.setAttributeNS(null, "id", idNumber);
        textAllComp.setAttributeNS(null, "fill", "black");
        textAllComp.setAttributeNS(null, "font-size", "2px");
        textAllComp.setAttributeNS(null, "font-family", "Arial");
        textAllComp.setAttributeNS(null, "dy", ".7px");
        textAllComp.setAttributeNS(null, "x", "50%");
        textAllComp.setAttributeNS(null, "y", "50%");
        textAllComp.setAttributeNS(null, "text-anchor", "middle");
        textAllComp.innerHTML = resNum
        svgContainer.append(textAllComp)

        this.animationTextCenter? animNumber(idNumber) : null
    }







    return svgContainer
};


Graph_1.prototype.MathRender = function () {
    return function (arr, summComponent) {
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

Graph_1.prototype.startRender = function () {
    const mathRender = this.MathRender()
    const summValue = (accumulator, currentValue) => accumulator + currentValue; // сумма всех объектов 
    const resultSumm = (this.dataComponentGraph.map(element => element.value)).reduce(summValue);
    const dataForRendering = mathRender(this.dataComponentGraph, resultSumm)
    this.domElement.append(this.DomRender(dataForRendering))
};


























//  https://www.codewars.com/kata/562e6df5cf2d3908ad00019e/train/javascript


// Создание объекта
const dataGraph = {
    domElement: document.getElementsByClassName("graph_2")[0],
    count: 4,
    dataComponentGraph: [
        { id: 1, color: "#955EFA", value: 192, textValue: "2020 г." },
        { id: 2, color: "#0099E0", value: 181, textValue: "2017 г." },
        { id: 3, color: "#00CBF1", value: 180, textValue: "2018 г." },
        { id: 4, color: "#2D68DA", value: 125, textValue: "2019 г." },
    ],
    width: 500,
    height: 500,
    textCenter:  true,
    animationTextCenter: true,
    animationCircleItem: false,
    rotateCircle: 30,
}
var p = new Graph_1(dataGraph);
p.startRender()


// // Создание объекта 2 
// const dataGraph_2 = {
//     domElement: document.getElementsByClassName("graph_2_2")[0],
//     count: 4,
//     dataComponentGraph: [
//         { id: 1, color: "#955EFA", value: 192, textValue: "2020 г." },
//         { id: 2, color: "#0099E0", value: 181, textValue: "2017 г." },
//         { id: 3, color: "#00CBF1", value: 180, textValue: "2018 г." },
//         { id: 4, color: "#2D68DA", value: 125, textValue: "2019 г." },
//     ],
//     width: 500,
//     textCenter: true,
//     animationTextCenter: true,
//     height: 500
// }
// var p_2 = new Graph_1(dataGraph_2);
// p_2.startRender()