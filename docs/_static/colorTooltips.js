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
const HEIGHT_OFFSET = 160;
const svg = document.querySelector('svg');
const svgRect = svg.getBoundingClientRect();

const copySVG = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <title>Copy to clipboard</title>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <rect x="8" y="8" width="12" height="12" rx="2"></rect>
  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
</svg>
`
const copyAllSVG = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy all" width="70" height="16" viewBox="0 0 70 16" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <title>Copy all to clipboard</title>
  <text x="2" y="12" stroke-width="0.3" font-size="10" style="font-weight='100'; font-family='SegoeUI', 'Segoe UI'">Copy all</text>
  <g transform="scale(0.75 0.75) translate(26 6)" stroke-width="1.5">
    <rect x="40" y="2" width="12" height="12" rx="2"></rect>
    <path d="M48 2v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
  </g>
</svg>`;

const checkSVG = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#28a745" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <title>Copied!</title>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M5 12l5 5l10 -10"></path>
</svg>`;

const checkAllSVG = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check all" width="70" height="16" viewBox="0 0 70 16" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <title>Copied!</title>
  <text y="12" font-size="10" style="font-weight='200'; font-family='SegoeUI', 'Segoe UI'">All copied</text>
  <g transform="scale(0.75 0.75) translate(58 0)" stroke-width="1.5" stroke="#28a745">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M5 12l5 5l10 -10" stroke-width="1.5"></path>
  </g>
</svg>`;

function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        button.innerHTML = checkSVG;

        setTimeout(() => {
            button.innerHTML = copySVG;
        }, 2000);
    }).catch((err) => {
        console.error('Failed to copy text: ', err);
    });
}
function copyAllToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        button.innerHTML = checkAllSVG;

        setTimeout(() => {
            button.innerHTML = copyAllSVG;
        }, 2000);
    }).catch((err) => {
        console.error('Failed to copy text: ', err);
    });
}


function addCircleHints() {
    const circles = document.querySelectorAll("circle");
    const nameDiv = document.getElementById("name");
    let activeCircle = null;
    let tooltip = null;

    function hideTooltip() {
        nameDiv.style.opacity = 0;
        nameDiv.innerHTML = null;
        activeCircle = null;
    }

    function showTooltip(circle, r, g, b) {

        const colorInfo = [
            `Hex: ${rgbToHexCode(r, g, b)}`,
            `RGB: ${r}, ${g}, ${b}`,
            `HSV: ${rgbToHSV(r, g, b).join(', ')}`,
            `CMYK: ${rgbToCMYK(r, g, b).join(', ')}`,
            `Vividness: ${calculateVividness(r, g, b)}`,
            `Kontrast weiß: ${rgbToWhiteContrast(r, g, b)}`,
            `Kontrast schwarz: ${rgbToBlackContrast(r, g, b)}`
        ];

        let pantoneSet = false;
        if (circle.parentElement.hasAttribute('serif:id')) {
            let serifs = circle.parentElement.getAttribute('serif:id');
            if(serifs.includes("Pantone")) {
                colorInfo.push(serifs.split("|")[1]);
                pantoneSet = true;
            }
            colorInfo.unshift(serifs.split("|")[0]);
        }

        const circleBBox = circle.getBoundingClientRect();
        const circleX = circleBBox.left + svgRect.left + (circleBBox.width / 2);
        const circleY = circleBBox.top + svgRect.top + window.scrollY;

        nameDiv.style.left = (circleX - 85) + 'px';
        nameDiv.style.top = pantoneSet ? (circleY - HEIGHT_OFFSET - 35) + 'px' : (circleY - HEIGHT_OFFSET - 15) + 'px';

        const tooltipContent = colorInfo.map((info, index) => {
            if (index === 0) {
                return `<div>${info} <button class="all copy-all-button">${copyAllSVG}</button></div>`;
            }
            return `<div>${info} <button class="copy-button">${copySVG}</button></div>`;
        }).join("");

        nameDiv.innerHTML = tooltipContent;
        document.querySelector(".copy-all-button").addEventListener("click", function () {
            copyAllToClipboard(colorInfo.join("\n"), this);
        });

        document.querySelectorAll(".copy-button").forEach((button, index) => {
            button.addEventListener("click", function () {
                copyToClipboard(colorInfo[index], this);
            });
        });

        nameDiv.style.opacity = 1;
        nameDiv.style.borderColor = `rgb(${r},${g},${b})`;

        activeCircle = circle;
        tooltip = document.getElementById("name");
    }

    document.addEventListener('click', (event) => {
        if (activeCircle && !activeCircle.contains(event.target) && !tooltip.contains(event.target)) {
            hideTooltip();
        }
    });

    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        const style = circle.getAttribute('style');

        if (style) {
            const colorMatch = style.match(/fill:rgb\((\d+),(\d+),(\d+)\)/);
            if (colorMatch) {

                const [_, r, g, b] = colorMatch;

                circle.addEventListener("click", (event) => {
                    event.stopPropagation();

                    if (activeCircle === circle && !tooltip.contains(event.target)) {
                        hideTooltip();
                    } else {
                        showTooltip(circle, r, g, b);
                    }
                });
            }
        } else {
            if(!circle.hasAttribute('id'))
            circle.setAttribute('id', `circle_${i}`);
        }
    }
}
addCircleHints();

function addSquareHints() {
    const squares = document.querySelectorAll("rect");
    const nameDiv = document.getElementById("name");
    let activeSquare = null;
    let tooltip = null;

    function hideTooltip() {
        nameDiv.style.opacity = 0;
        nameDiv.innerHTML = null;
        activeSquare = null;
    }

    function showTooltip(square, r, g, b) {

        const colorInfo = [
            `Hex: ${rgbToHexCode(r, g, b)}`,
            `RGB: ${r}, ${g}, ${b}`,
            `HSV: ${rgbToHSV(r, g, b).join(', ')}`,
            `CMYK: ${rgbToCMYK(r, g, b).join(', ')}`,
            `Vividness: ${calculateVividness(r, g, b)}`,
            `Kontrast weiß: ${rgbToWhiteContrast(r, g, b)}`,
            `Kontrast schwarz: ${rgbToBlackContrast(r, g, b)}`
        ];

        let pantoneSet = false;
        if (square.parentElement.hasAttribute('serif:id')) {
            let serifs = square.parentElement.getAttribute('serif:id');
            if(serifs.includes("Pantone")) {
                colorInfo.push(serifs.split("|")[1]);
                pantoneSet = true;
            }
            colorInfo.unshift(serifs.split("|")[0]);
        }

        const squareBBox = square.getBoundingClientRect();
        const squareX = squareBBox.left + svgRect.left + (squareBBox.width / 2);
        const squareY = squareBBox.top + svgRect.top + window.scrollY;

        nameDiv.style.left = (squareX - 85) + 'px';
        nameDiv.style.top = pantoneSet ? (squareY - HEIGHT_OFFSET - 20) + 'px' : (squareY - HEIGHT_OFFSET) + 'px';

        const tooltipContent = colorInfo.map((info, index) => {
            if (index === 0) {
                return `<div>${info} <button class="all copy-all-button">${copyAllSVG}</button></div>`;
            }
            return `<div>${info} <button class="copy-button">${copySVG}</button></div>`;
        }).join("");

        nameDiv.innerHTML = tooltipContent;
        document.querySelector(".copy-all-button").addEventListener("click", function () {
            copyAllToClipboard(colorInfo.join("\n"), this);
        });

        document.querySelectorAll(".copy-button").forEach((button, index) => {
            button.addEventListener("click", function () {
                copyToClipboard(colorInfo[index], this);
            });
        });

        nameDiv.style.opacity = 1;
        nameDiv.style.borderColor = `rgb(${r},${g},${b})`;

        activeSquare = square;
        tooltip = document.getElementById("name");
    }

    document.addEventListener('click', (event) => {
        if (activeSquare && !activeSquare.contains(event.target) && !tooltip.contains(event.target)) {
            hideTooltip();
        }
    });

    for (let i = 0; i < squares.length; i++) {
        const square = squares[i];
        const style = square.getAttribute('style');

        if (style) {
            const colorMatch = style.match(/fill:rgb\((\d+),(\d+),(\d+)\)/);
            if (colorMatch) {

                const [_, r, g, b] = colorMatch;

                square.addEventListener("click", (event) => {
                    event.stopPropagation();

                    if (activeSquare === square && !tooltip.contains(event.target)) {
                        hideTooltip();
                    } else {
                        showTooltip(square, r, g, b);
                    }
                });
            }
        } else {
            if(!square.hasAttribute('id'))
            square.setAttribute('id', `square_${i}`);
        }
    }
}
addSquareHints();
