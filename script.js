
        function Graph_1({ domElement, count, dataComponentGraph, width, height}) {
            this.domElement = domElement || document.getElementsByTagName("body")[0]
            this.count = count || 4,
            this.width = width || 500,
            this.height = height || 500,
            this.dataComponentGraph = dataComponentGraph || [
                { id: 1, color: "#955EFA", value: 192, textValue: "2020 г." },
                { id: 2, color: "#0099E0", value: 181, textValue: "2017 г." },
                { id: 3, color: "#00CBF1", value: 180, textValue: "2018 г." },
                { id: 4, color: "#2D68DA", value: 125, textValue: "2019 г." },
            ]
        }


        Graph_1.prototype.DomRender = function (dataG, arr, resultSumm) {
      
        let svgContainer = document.createElement("svg")
        svgContainer.setAttribute("height", this.height)
        svgContainer.setAttribute("width", this.width)
        svgContainer.setAttribute("viewBox", "0 0 20 20")

        let gWrapper = document.createElement("g")
            // for (const elem of this.arr) {
            //      
            // }
            console.log(this.arr)

            let componentCircle = document.createElement("circle")
            componentCircle.setAttribute("r", 5);
            componentCircle.setAttribute("cx", 10);
            componentCircle.setAttribute("cy", 10);
            componentCircle.setAttribute("fill", "transparent");
            // componentCircle.setAttribute("stroke", ЦВЕТ);
            componentCircle.setAttribute("stroke-width", 10);
            // componentCircle.setAttribute("stroke-dasharray", `0 calc(${Начало} * 31.4 / 100) calc(${Конец}  * 31.4 / 100) 31.4`);
            componentCircle.setAttribute("transform", "rotate(-90) translate(-20)");
            gWrapper.append(componentCircle)
        
        svgContainer.append(gWrapper)




        let circleD = document.createElement("circle")
        circleD.setAttribute("r", 5);
        circleD.setAttribute("cx", 10);
        circleD.setAttribute("cy", 10);
        circleD.setAttribute("fill", "white");
        svgContainer.append(circleD)


        const wrapper = document.createElement("div")
        wrapper.innerText = 3
        return wrapper
        };


        Graph_1.prototype.MathRender = function () {
            return function (arr, len, summComponent) {
                // const summREduce = (accumulator, currentValue) => accumulator + currentValue; // сумма всех объектов 
                // const resultSumm = arr.reduce(summREduce);




                console.log(arr)

              const arrBox = arr.map(element => {
                  console.log(summComponent)
                    element.percent = (100 * element.value) / summComponent
                    return element
                });

            //     console.log(arrBox)

                return 123
            }
        };

        Graph_1.prototype.startRender = function () {
            const mathRender = this.MathRender()

                 const summValue = (accumulator, currentValue) => accumulator + currentValue; // сумма всех объектов 
                const resultSumm =  (this.dataComponentGraph.map(element => element.value)).reduce(summValue);

                
            const dataForRendering = mathRender(this.dataComponentGraph, this.count,resultSumm)

            this.domElement.append(this.DomRender(dataForRendering))

        };















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
            height: 500
        }
        var p = new Graph_1(dataGraph);
        p.startRender()

