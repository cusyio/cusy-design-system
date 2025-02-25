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
        if(stroke == "black")
            path.setAttribute("stroke", "var(--color-foreground-primary)");
        if(stroke == "#e5e5e5")
            path.setAttribute("stroke", "#757575");
    }
}

window.onload = () => styleBokehPlot();
