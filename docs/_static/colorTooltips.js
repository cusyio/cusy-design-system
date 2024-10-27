function rgbToHSV(r, g, b) {
    const r_ = r / 255;
    const g_ = g / 255;
    const b_ = b / 255;

    const cMax = Math.max(r_, g_, b_);
    const cMin = Math.min(r_, g_, b_);
    const delta = cMax - cMin;

    let hue = 0;
    if (delta !== 0) {
        if (cMax === r_) {
            hue = 60 * (((g_ - b_) / delta) + (g_ < b_ ? 6 : 0))
        } else if (cMax === g_) {
            hue = 60 * ((b_ - r_) / delta + 2)
        } else {
            hue = 60 * ((r_ - g_) / delta + 4)
        }
    }

    const saturation = cMax === 0 ? 0 : (delta / cMax) * 100;

    const value = cMax * 100;

    return [Math.round(hue), Math.round(saturation), Math.round(value)];
}

function calculateVividness(r, g, b) {
    const hsv = rgbToHSV(r, g, b);
    return (hsv[1] * hsv[2] / 100).toFixed(1);
}

function rgbToLuminance(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    r <= 0.04045 ? r = r / 12.92 : r = Math.pow((r + 0.055) / 1.055, 2.4);
    g <= 0.04045 ? g = g / 12.92 : g = Math.pow((g + 0.055) / 1.055, 2.4);
    b <= 0.04045 ? b = b / 12.92 : b = Math.pow((b + 0.055) / 1.055, 2.4);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function luminanceToContrast(l1, l2) {
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
function rgbToWhiteContrast(r, g, b) {
    return luminanceToContrast(rgbToLuminance(r, g, b), 1).toPrecision(2);
}
function rgbToBlackContrast(r, g, b) {
    return luminanceToContrast(rgbToLuminance(r, g, b), 0).toPrecision(2);
}

function rgbToHexCode(r, g, b) {
    r = Number(r).toString(16)
    r.length == 1 ? r = "0" + r : r
    g = Number(g).toString(16)
    g.length == 1 ? g = "0" + g : g
    b = Number(b).toString(16)
    b.length == 1 ? b = "0" + b : b
    return "#" + r + g + b;
}

function rgbToCMYK(r,g,b){
    r /= 255;
    g /= 255;
    b /= 255;

    const k = 1-Math.max(r,g,b);
    const c = Math.round(((1-r-k)/(1-k))*100);
    const m = Math.round(((1-g-k)/(1-k))*100);
    const y = Math.round(((1-b-k)/(1-k))*100);

    return [c,m,y,Math.round(k*100)];
}

const CSS_UNIT = "px";
const HEIGHT_OFFSET = -150;
const svg = document.querySelector('svg');
const svgRect = svg.getBoundingClientRect();

function addCircleHints() {
    const circles = document.querySelectorAll("circle")

    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];

        const nameDiv = document.getElementById("name");

        const style = circle.getAttribute('style');
        if (style) {

            const colorMatch = style.match(/fill:rgb\((\d+),(\d+),(\d+)\)/);
            if (colorMatch) {
                const r = colorMatch[1];
                const g = colorMatch[2];
                const b = colorMatch[3];
                const hsv = rgbToHSV(r, g, b);
                const vividness = calculateVividness(r, g, b);
                const whiteContrast = rgbToWhiteContrast(r, g, b);
                const blackContrast = rgbToBlackContrast(r, g, b);
                const [c, m, y, k] = rgbToCMYK(r, g, b);
                const hex = rgbToHexCode(r, g, b);
                let colorId = `Hex: ${hex}  RGB: ${r}, ${g}, ${b}  HSV: ${hsv[0]}, ${hsv[1]}, ${hsv[2]}  CMYK: ${c}, ${m}, ${y}, ${k}  Vividness: ${vividness}  Kontrast weiß: ${whiteContrast}  Kontrast schwarz: ${blackContrast}`;
                circle.setAttribute('id', colorId);
                circle.addEventListener("mouseover", () => {
                    window.onmousemove = function (j) {

                        const x = j.clientX - svgRect.left;
                        const y = j.clientY - svgRect.top + window.scrollY;

                        nameDiv.style.top = (y + HEIGHT_OFFSET) + CSS_UNIT;
                        nameDiv.style.left = x - 75 + CSS_UNIT;

                    }
                    document.getElementById("namep").innerText = circle.id.split("  ").join("\n");
                    nameDiv.style.opacity = 1;
                    nameDiv.style.borderColor = `rgb(${r},${g},${b})`
                });
            }

        } else {
            circle.setAttribute('id', `circle_${i}`);
        }

        circle.addEventListener("mouseleave", () => {
            document.getElementById("name").style.opacity = 0;
        });
    };
}
addCircleHints();

function addSquareHints() {
    const squares = document.querySelectorAll("rect");

    for (let i = 0; i < squares.length; i++) {
        const square = squares[i];

        const nameDiv = document.getElementById("name");

        let pantoneSet = false;
        let pantone = "";
        if (square.parentElement.hasAttribute('serif:id')) {
            pantone = square.parentElement.getAttribute('serif:id');
            pantoneSet = true;
        }

        const style = square.getAttribute('style');
        if (style) {

            const colorMatch = style.match(/fill:rgb\((\d+),(\d+),(\d+)\)/);
            if (colorMatch) {
                const r = colorMatch[1];
                const g = colorMatch[2];
                const b = colorMatch[3];
                const hsv = rgbToHSV(r, g, b);
                const vividness = calculateVividness(r, g, b);
                const whiteContrast = rgbToWhiteContrast(r, g, b);
                const blackContrast = rgbToBlackContrast(r, g, b);
                const [c, m, y, k] = rgbToCMYK(r, g, b);
                const hex = rgbToHexCode(r, g, b);
                let colorId = `Hex: ${hex}  RGB: ${r}, ${g}, ${b}  HSV: ${hsv[0]}, ${hsv[1]}, ${hsv[2]}  CMYK: ${c}, ${m}, ${y}, ${k}  Vividness: ${vividness}  Kontrast weiß: ${whiteContrast}  Kontrast schwarz: ${blackContrast}`;
                if(pantoneSet)
                    colorId += `  ${pantone}`;
                square.setAttribute('id', colorId);
                square.addEventListener("mouseover", () => {
                    window.onmousemove = function (j) {

                        const x = j.clientX - svgRect.left;
                        const y = j.clientY - svgRect.top + window.scrollY;

                        nameDiv.style.top = pantoneSet ? (y + HEIGHT_OFFSET - 20) + CSS_UNIT : (y + HEIGHT_OFFSET) + CSS_UNIT;
                        nameDiv.style.left = x - 75 + CSS_UNIT;
                    }
                    document.getElementById("namep").innerText = square.id.split("  ").join("\n");
                    nameDiv.style.opacity = 1;
                    nameDiv.style.borderColor = `rgb(${r},${g},${b})`;
                });
            }
        } else {
            square.setAttribute('id', `square_${i}`);
        }

        square.addEventListener("mouseleave", () => {
            nameDiv.style.opacity = 0;
        });
    };
}
addSquareHints();
