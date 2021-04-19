





Graph_1.prototype.DomRender = function ({ arr, resNum }) {
    let svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgContainer.setAttributeNS(null, 'href', 'http://www.google.com');
    svgContainer.setAttributeNS(null, 'height', this.height);
    svgContainer.setAttributeNS(null, 'width', this.width);
    svgContainer.setAttributeNS(null, 'viewBox', '0 0 20 20');


    let gWrapper = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let coutCircle = 0
    let prev;
    for (let item of arr) {
        console.log({ current: item, previous: prev && prev })
        prev = item;
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


    if(this.textCenter) {
        let textAllComp = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textAllComp.setAttributeNS(null, "fill", "black");
        textAllComp.setAttributeNS(null, "font-size", "2px");
        textAllComp.setAttributeNS(null, "font-family", "Arial");
        textAllComp.setAttributeNS(null, "dy", ".7px");
        textAllComp.setAttributeNS(null, "x", "50%");
        textAllComp.setAttributeNS(null, "y", "50%");
        textAllComp.setAttributeNS(null, "text-anchor", "middle");
        textAllComp.innerHTML = resNum
        svgContainer.append(textAllComp)
    }
    return svgContainer
};
