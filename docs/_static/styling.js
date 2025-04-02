function styleBokehPlot() {

    const allShadowTexts = document
      .querySelector('div.bk-Figure')
      .shadowRoot
      .querySelector('div.bk-Canvas')
      .shadowRoot
      .querySelectorAll('div.bk-layer')[1]
      .shadowRoot
      .querySelectorAll('svg text');

    allShadowTexts.forEach(text => {
      text.style.fill = 'var(--color-foreground-primary)';
    });

    const allPaths = document
      .querySelector('div.bk-Figure')
      .shadowRoot
      .querySelector('div.bk-Canvas')
      .shadowRoot
      .querySelectorAll('div.bk-layer')[1]
      .shadowRoot
      .querySelectorAll('svg path');

    for (const path of allPaths) {
        let stroke = path.getAttribute("stroke");
        if(stroke == "black" || stroke == "rbg(0,0,0)")
            path.setAttribute("stroke", "var(--color-foreground-primary)");
        if(stroke == "#e5e5e5" || stroke == "rgb(229,229,229)")
            path.setAttribute("stroke", "#757575");
    }
}

function fixBokehSvgPatternsInFirefox() {
  if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
    return;
  }

  function fixPatternsInSvg(svg) {
    if (!svg) return;

    const patterns=svg.querySelectorAll('pattern');
    const measurements=[
      {width:"130"},
      {width:"212"},
      {width:"87"},
      {width:"118"},
      {width:"150"},
      {width:"100"},
      {width:"150"},
      {width:"260"},
    ]

    patterns.forEach((pattern, i) => {
      const width=pattern.getAttribute('width');

      if (width==='0') {
        pattern.setAttribute('width', measurements[i].width);
        pattern.setAttribute('height', "150");
      }
    });
  }

  try {
    const figureDiv=document.querySelector('div.bk-Figure');
    if (figureDiv&&figureDiv.shadowRoot) {
      const canvasDiv=figureDiv.shadowRoot.querySelector('div.bk-Canvas');
      if (canvasDiv&&canvasDiv.shadowRoot) {
        const layers=canvasDiv.shadowRoot.querySelectorAll('div.bk-layer');
        if (layers&&layers.length>1&&layers[1].shadowRoot) {
          const svgs=layers[1].shadowRoot.querySelectorAll('svg');
          svgs.forEach(svg=>fixPatternsInSvg(svg));
        }
      }
    }
  } catch (e) {
    console.error("Error in fixing SVG:",svg);
  }
}

if(window.location.href.endsWith("colors.html")){
  document.addEventListener('DOMContentLoaded', styleBokehPlot);
}
document.addEventListener('DOMContentLoaded', fixBokehSvgPatternsInFirefox);

const observer=new MutationObserver(() => {
  if(window.location.href.endsWith("colors.html")){
    document.addEventListener('DOMContentLoaded', styleBokehPlot);
  }
  setTimeout(fixBokehSvgPatternsInFirefox, 100);
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
