
// Function Animation number in center Circle
async function animNumber(domElem, attribute,attributeValuePosition){

    setTimeout(v=>{
        let number = 0
        let startNumber = document.getElementById(domElem).innerHTML
        let countSec = 5

        // Доделать при startNumber => 1000
        // startNumber/1000 > 1? countSec = 80 : null

        const refreshIntervalId = setInterval(v=>{
            number < startNumber? number++ : clearInterval(refreshIntervalId);
            number++
            document.getElementById(domElem).innerHTML = attributeValuePosition === "start"? `${attribute} ${number} ` : `${number} ${attribute}`
        },countSec)
    },0)
}

// Анимация круга
// async function animGraph_1(animation, transition, delay){

//     setTimeout(v=>{
//         let number = 0
//         let startNumber = document.getElementById(domElem).innerHTML
//         let countSec = 5


//         const refreshIntervalId = setInterval(v=>{
//             number < startNumber? number++ : clearInterval(refreshIntervalId);
//             number++
//             document.getElementById(domElem).innerHTML = attributeValuePosition === "start"? `${attribute} ${number} ` : `${number} ${attribute}`
//         },countSec)
//     },0)
// }






const setIdRandom = () => {
    let boolSetIt = true
    let newRandom = Math.floor(Math.random()*1000000)
    while (boolSetIt) {
        document.getElementById(newRandom) === null? boolSetIt = false : null
    }
    return newRandom

}






function Graph_1({ domElement, count, dataComponentGraph, width, height, textCenter, animationTextCenter, rotateCircle, animationCircleItem, attributeValue, attributeValuePosition,svgClass}) {


    this.domElement = domElement || document.getElementsByTagName("body")[0]
    this.count = count || 14;
        this.width = width || 500;
        this.height = height || 500;
        this.textCenter = textCenter? true : false; 
        this.animationTextCenter = animationTextCenter;
        this.attributeValue = attributeValue || ""; 
        this.svgClass = svgClass || "";
        this.attributeValuePosition = attributeValuePosition != "start"?  "end": "start" || "end"
        this.animationCircleItem = animationCircleItem ? true : false;
        this.rotateCircle = rotateCircle || 0 ;
        this.dataComponentGraph = dataComponentGraph || [
            { id: 1, color: "#955EFA", value: 192, title: "Заголовок попапа" , textValues:[ {"год": "2020 г."}, {"осадки": "14 %"} ]},
            { id: 2, color: "#0099E0", value: 181, title: "Заголовок попапа" , textValues:[ {"год": "2017 г."}, {"осадки": "19 %"} ]},
            { id: 3, color: "#00CBF1", value: 180, title: "Заголовок попапа" , textValues:[ {"год": "2018 г."}, {"осадки": "24 %"} ]},
            { id: 4, color: "#2D68DA", value: 125, title: "Заголовок попапа" , textValues:[ {"год": "2019 г."}, {"осадки": "38 %"} ]},
        ]

        // Написать обработку событий на каждую переменную если она ошибочно введена

        // console.log("textCenter:", this.textCenter)
        // console.log("animationTextCenter:", this.animationTextCenter)



}

Graph_1.prototype.DomRender = function ({ arr, resNum}, attr,attributeValuePosition, classSvg) {
    
    let svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgContainer.setAttributeNS(null, 'href', 'http://www.google.com');
    svgContainer.setAttributeNS(null, 'height', this.height);
    svgContainer.setAttributeNS(null, 'width', this.width);
    svgContainer.setAttributeNS(null, 'viewBox', '0 0 20 20');
    svgContainer.setAttributeNS(null, 'class', `Graph_1 ${classSvg}`);

    let gWrapper = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gWrapper.setAttributeNS(null, 'style', `transform-origin: center center;transform: rotate(${this.rotateCircle}deg); `);
        // render Circle
    let coutCircle = 0
    for (let item of arr) {
        let componentCircleWrapper = document.createElementNS("http://www.w3.org/2000/svg", "g");
        let componentCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        componentCircle.setAttributeNS(null, 'class', `animationHoverComponrnt`);
        componentCircle.setAttributeNS(null, "cx", 10);
        componentCircle.setAttributeNS(null, "cy", 10);
        componentCircle.setAttributeNS(null, "r", 5);
        componentCircle.setAttributeNS(null, "fill", "transparent");
        componentCircle.setAttributeNS(null, "stroke", item.color);
        componentCircle.setAttributeNS(null, "stroke-width", 10);
        componentCircle.setAttributeNS(null, "stroke-dasharray", `0 calc(${coutCircle + .1} * 31.4 / 100) calc(${item.percent - .1}  * 31.4 / 100) 31.4`);
        componentCircle.setAttributeNS(null, "transform", "rotate(-90) translate(-20)");
        componentCircleWrapper.append(componentCircle)
        gWrapper.append(componentCircleWrapper)
        coutCircle += item.percent
    }
    svgContainer.append(gWrapper)


        // render Value in center  Circle 
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
        this.animationTextCenter? animNumber(idNumber,attr,attributeValuePosition) : null
    }
    // render Values Circle
    // let dataComponentWrapperCircle = document.createElementNS("http://www.w3.org/2000/svg", "g");




    // let dataComponentCircle = document.createElementNS("http://www.w3.org/2000/svg", "text");
    // dataComponentCircle.setAttributeNS(null, "id", idNumber);
    // dataComponentCircle.setAttributeNS(null, "fill", "black");
    // dataComponentCircle.setAttributeNS(null, "font-size", "2px");
    // dataComponentCircle.setAttributeNS(null, "font-family", "Arial");
    // dataComponentCircle.setAttributeNS(null, "dy", ".7px");
    // dataComponentCircle.setAttributeNS(null, "x", "50%");
    // dataComponentCircle.setAttributeNS(null, "y", "50%");
    // dataComponentCircle.setAttributeNS(null, "text-anchor", "middle");
    // dataComponentCircle.innerHTML = "center"
    // dataComponentWrapperCircle.append(dataComponentCircle)
    // svgContainer.append(dataComponentWrapperCircle)


    




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
    this.domElement.append(this.DomRender(dataForRendering,this.attributeValue,this.attributeValuePosition, this.svgClass))
};













//  https://www.codewars.com/kata/562e6df5cf2d3908ad00019e/train/javascript


// Создание объекта
const dataGraph = {
    domElement: document.getElementsByClassName("graph_2")[0],
    count: 4,
    dataComponentGraph: [
        { id: 1, color: "#955EFA", value: 192, title: "Заголовок попапа" , textValues:[ {"год": "2020 г."}, {"осадки": "14 %"} ]},
        { id: 2, color: "#0099E0", value: 181, title: "Заголовок попапа" , textValues:[ {"год": "2017 г."}, {"осадки": "19 %"} ]},
        { id: 3, color: "#00CBF1", value: 180, title: "Заголовок попапа" , textValues:[ {"год": "2018 г."}, {"осадки": "24 %"} ]},
        { id: 4, color: "#2D68DA", value: 125, title: "Заголовок попапа" , textValues:[ {"год": "2019 г."}, {"осадки": "38 %"} ]},
    ],
    width: 500,
    height: 500,
    textCenter:  true,
    animationTextCenter: true,
    attributeValue: "$",
    attributeValuePosition: "end",
    animationCircleItem: false,
    // rotateCircle: 80,
    svgClass: "svgClass",
}
var p = new Graph_1(dataGraph);
p.startRender()


