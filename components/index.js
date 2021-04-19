



export function Graph_1({ domElement, count, dataComponentGraph, width, height, textCenter, animationTextCenter }) {
    this.domElement = domElement || document.getElementsByTagName("body")[0]
    this.count = count || 4,
        this.width = width || 500,
        this.height = height || 500,
        this.textCenter = textCenter || true,
        this.animationTextCenter = animationTextCenter || true,
        this.dataComponentGraph = dataComponentGraph || [
            { id: 1, color: "#955EFA", value: 192, textValue: "2020 г." },
            { id: 2, color: "#0099E0", value: 181, textValue: "2017 г." },
            { id: 3, color: "#00CBF1", value: 180, textValue: "2018 г." },
            { id: 4, color: "#2D68DA", value: 125, textValue: "2019 г." },
        ]
}




