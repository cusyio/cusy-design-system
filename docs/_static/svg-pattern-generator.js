async function generateSVG(patternName, percentage) {
    try {
        const response = await fetch(`../../_static/pattern/generator/${patternName}.svg`);
        const data = await response.text();
        return resizeSVG(data, percentage, patternName);
    } catch (error) {
        console.error("Error generating SVG:", error);
        return "";
    }
}

function resizeSVG(svg, percentage, patternName) {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svg, "image/svg+xml");
    const svgElement = svgDoc.documentElement;

    const resizeElements = svgDoc.querySelectorAll('.resize');
    if (patternName === "spiralpattern") {
        resizeElements.forEach(element => {
            const lineWidth = 6.21;
            const newLineWidth = lineWidth * (percentage / 100);
            element.setAttribute('stroke-width', newLineWidth + 'px');
        });
        return svgElement.outerHTML;
    }
    if (patternName === "caretpattern") {
        resizeElements.forEach(element => {
            const lineWidth = 45.59;
            const newLineWidth = lineWidth * ((percentage / 100)**0.75);
            element.setAttribute('stroke-width', newLineWidth + 'px');
            element.setAttribute('transform', `scale(${(percentage / 100)**0.25})`);
        })
        return svgElement.outerHTML;
    }
    if (patternName === "stripepattern") {
        resizeElements.forEach(element => {
            element.setAttribute('transform', `scale(1,${(percentage / 100)})`);
        })
        return svgElement.outerHTML;
    }
    resizeElements.forEach(element => {
        element.setAttribute('transform', `scale(${(percentage / 100)**0.5})`);
    });
    return svgElement.outerHTML;
}

function downloadSVG(svg, filename) {

    try {
        const blob = new Blob([svg], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename || 'pattern.svg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error downloading SVG:", error);
    }
}

function downloadSingleTile(svg, fileName, patternName) {

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svg, "image/svg+xml");
    const svgElement = svgDoc.documentElement;

    const patterns = svgDoc.querySelectorAll('pattern');

    const patternSizes = {
        caretpattern: [199.471926, 70.537835],
        spiralpattern: [37.55, 191.6664945],
        trianglepattern: [133.725, 231.618494],
        dotspattern: [159.002264, 91.8]
    };
    if (patternName in patternSizes) {
        const [width, height] = patternSizes[patternName];
        svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);
        const rect = svgDoc.querySelector('rect');
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        if(patternName !== "spiralpattern") {
            patterns.forEach(pattern => {
                pattern.setAttribute('width', width);
                pattern.setAttribute('height', height);
            });
        }
    }

    patterns.forEach(pattern => {
        pattern.setAttribute('patternTransform', 'scale(1)');
    });
    const singleTileSvg = svgElement.outerHTML  ;

    downloadSVG(singleTileSvg, fileName);
}

document.addEventListener("DOMContentLoaded", () => {
    const svgContainer = document.getElementById("svg-gen-container");
    if(!svgContainer) return;
    const patternSelect = document.getElementById("pattern-select");
    const percentageInput = document.getElementById("percentage-input");
    const downloadButton = document.getElementById("download-button");
    const downloadSingleTileButton = document.getElementById("download-tile-button");

    async function updateSVG() {
        const patternValue = patternSelect.value;
        const percentageValue = percentageInput.value;
        const svg = await generateSVG(patternValue, percentageValue);
        svgContainer.innerHTML = svg;
    }

    updateSVG();

    patternSelect.addEventListener("change", updateSVG);
    percentageInput.addEventListener("input", updateSVG);

    downloadSingleTileButton.addEventListener("click", () => {
        const patternName = patternSelect.value;
        const svg = svgContainer.innerHTML;
        if (svg) {
            downloadSingleTile(svg, `${patternName}-${percentageInput.value}-tile.svg`, patternName);
        } else {
            console.error("No SVG content to download");
        }
    });
    downloadButton.addEventListener("click", () => {
        const patternName = patternSelect.value;
        const svg = svgContainer.innerHTML;
        if (svg) {
            downloadSVG(svg, `${patternName}-${percentageInput.value}.svg`);
        } else {
            console.error("No SVG content to download");
        }
    });
})
