Farbe
=====

Farbe ist ein starker Gestaltungsmechanismus zur Schaffung einer visuellen
Hierarchie. Sie kann signalisieren, welches die wichtigsten Elemente in einer
Datenvisualisierung sind. Ein gängiges Muster ist die Verwendung

#. einer auffälligen Farbe zur Hervorhebung und Kennzeichnung der
   Datenmarkierungen oder Kategorien, die für die Aussage des Diagramms von
   größter Bedeutung sind
#. dezenterer Farben für andere sekundäre Datenmarkierungen oder Kategorien
#. von Schwarz für die wichtigsten Textelemente, wie den Titel der
   Visualisierung
#. von Grau

   * für weniger wichtige Datenmarken, die nur für den Kontext hinzugefügt
     werden
   * für unterstützende Diagrammelemente, wie Achsenbeschriftungen und
     Gitterlinien

.. figure:: colour-hierarchy.png
   :alt: Farbhierarchie

   Quelle: `Do vaccine mandates actually work?
   <https://www.economist.com/graphic-detail/2022/01/22/do-vaccine-mandates-actually-work>`_

.. _colour-hierarchy:

Mit Farbe kann auch eine visuelle Hierarchie hergestellt werden. Dies wird
:abbr:`z.B. (zum Beispiel)` in Material Design 3 verwendet, wobei die Höhe als
der Abstand zwischen den Komponenten entlang der z-Achse in `dichteunabhängigen
Pixeln (dps)
<https://m2.material.io/design/layout/pixel-density.html#density-independence>`_
gemessen wird:

.. figure:: material-design-3-colour-hierarchy-1.png
   :alt: Elevation in Material Design 3

   Quelle: `Elevation
   <https://m3.material.io/styles/elevation/applying-elevation>`_

Farbpaletten
------------

Die Farbpalette für Datenvisualisierungen ist eine ausgewählte Teilmenge der
cusy-Design-Farbpalette. Sie wurde entwickelt, um die Zugänglichkeit und
Harmonie innerhalb einer Seite zu verbessern.

Kategorien
..........

Kategoriale (oder qualitative) Paletten eignen sich am besten, wenn Sie diskrete
Datenkategorien unterscheiden sollen, die keine inhärente Korrelation aufweisen.

Kategoriale Farbpaletten werden hauptsächlich in folgenden Graphen und Visualisierungsarten eingesetzt:

* Balkendiagramme:

   - Zur Unterscheidung verschiedener Kategorien oder Gruppen
   - Jede Kategorie erhält eine eigene Farbe

* Kreisdiagramme (Tortendiagramme):

   - Zur Darstellung von Anteilen verschiedener Kategorien
   - Jeder Sektor repräsentiert eine Kategorie mit einer eindeutigen Farbe

* Gruppierte Säulendiagramme:

   - Zur Veranschaulichung mehrerer Kategorien innerhalb von Hauptgruppen
   - Jede Unterkategorie wird durch eine eigene Farbe dargestellt

Die Farben dieser Palette sollten nacheinander genau wie unten beschrieben
angewendet werden. Die Sequenz wird sorgfältig kuratiert, um den Kontrast
zwischen benachbarten Farben zu maximieren und die visuelle Unterscheidung zu
erleichtern.

.. raw:: html

    <style>

        #name {
            position: absolute;
            background-color: var(--color-background-primary);
            width: fit-content;
            border-radius: 5px;
            border: 3px solid;
            opacity: 0;
            padding: 0px 5px;
            margin: 0;
            pointer-events: none;
            z-index: 9999;
        }
        #namep {
            margin-bottom: 0rem;
            margin-top: 0.25rem;
            font-family:'ArialMT', 'Arial';
            font-size: clamp(10px, 0.8rem, 14px);
        }

        text {
            fill: var(--color-foreground-primary);
        }

        rect[width="1400"] {
            fill: var(--color-background-primary);
        }

        circle {
            stroke: var(--color-foreground-primary);
        }


    </style>
    <body>
        <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <div id="name">
            <p id="namep"></p>
        </div>
        <svg width="100%" height="100%" viewBox="0 0 1400 1420" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
            <rect x="0" y="0" width="1400" height="1420" />
            <g id="Pantone-266-C" serif:id="Pantone 266 C" transform="matrix(0.506997,0,0,0.506997,74.6076,1.10336)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(117,59,189);"/>
            </g>
            <g transform="matrix(0.506997,0,0,0.506997,374.608,1.14429)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(205,132,2);"/>
            </g>
            <g transform="matrix(0.506997,0,0,0.506997,674.608,1.10336)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(222,40,23);"/>
            </g>
            <g transform="matrix(0.506997,0,0,0.506997,524.608,1.10336)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(6,99,181);"/>
            </g>
            <g id="Pantone-3282-C" serif:id="Pantone 3282 C" transform="matrix(0.506997,0,0,0.506997,224.608,1.10336)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(0,133,120);"/>
            </g>
            <g transform="matrix(0.506997,0,0,0.506997,824.608,1.10336)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(18,159,212);"/>
            </g>
            <g transform="matrix(0.506997,0,0,0.506997,1124.61,1.14429)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(76,167,43);"/>
            </g>
            <g transform="matrix(0.506997,0,0,0.506997,974.608,1.14429)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(189,15,119);"/>
            </g>
            <g id="Pantone-266-C1" serif:id="Pantone 266 C" transform="matrix(0.506997,0,0,0.506997,974.608,351.117)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(117,59,189);"/>
            </g>
            <g transform="matrix(0.506997,0,0,0.506997,74.6076,351.157)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(205,132,2);"/>
            </g>
            <g transform="matrix(0.506997,0,0,0.506997,374.608,351.117)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(222,40,23);"/>
            </g>
            <g transform="matrix(0.506997,0,0,0.506997,224.608,351.117)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(6,99,181);"/>
            </g>
            <g id="Pantone-3282-C1" serif:id="Pantone 3282 C" transform="matrix(0.506997,0,0,0.506997,1124.61,351.117)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(0,133,120);"/>
            </g>
            <g transform="matrix(0.506997,0,0,0.506997,524.608,351.117)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(18,159,212);"/>
            </g>
            <g transform="matrix(0.506997,0,0,0.506997,824.608,351.157)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(76,167,43);"/>
            </g>
            <g transform="matrix(0.506997,0,0,0.506997,674.608,351.157)">
                <rect x="79.67" y="244.323" width="236.688" height="236.688" style="fill:rgb(189,15,119);"/>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,527.892,-60.1058)">
                <g transform="matrix(38.9764,0,0,38.9764,195.272,597.429)">
                </g>
                <text x="118.1px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">Blue</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,36.206,14.9308)">
                <g transform="matrix(38.9764,0,0,38.9764,292.889,547.545)">
                </g>
                <text x="157.842px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">753BBD</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,486.517,14.9308)">
                <g transform="matrix(38.9764,0,0,38.9764,289.064,547.545)">
                </g>
                <text x="161.667px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">0663B5</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,227.892,289.894)">
                <g transform="matrix(38.9764,0,0,38.9764,195.272,597.429)">
                </g>
                <text x="118.1px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">Blue</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,186.517,364.931)">
                <g transform="matrix(38.9764,0,0,38.9764,289.064,547.545)">
                </g>
                <text x="161.667px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">0663B5</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,186.218,14.9308)">
                <g transform="matrix(38.9764,0,0,38.9764,288.398,547.545)">
                </g>
                <text x="162.333px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">008578</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,936.206,364.931)">
                <g transform="matrix(38.9764,0,0,38.9764,292.889,547.545)">
                </g>
                <text x="157.842px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">753BBD</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,1086.22,364.931)">
                <g transform="matrix(38.9764,0,0,38.9764,288.398,547.545)">
                </g>
                <text x="162.333px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">008578</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,785.304,15.0245)">
                <g transform="matrix(38.9764,0,0,38.9764,290.567,547.545)">
                </g>
                <text x="160.164px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">129FD4</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,678.373,-60.1058)">
                <g transform="matrix(38.9764,0,0,38.9764,190.4,597.429)">
                </g>
                <text x="122.972px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">R<tspan x="146.209px 166.915px " y="597.429px 597.429px ">ed</tspan></text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,635.679,15.0245)">
                <g transform="matrix(38.9764,0,0,38.9764,290.91,547.545)">
                </g>
                <text x="159.821px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">DE2817</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,378.373,289.894)">
                <g transform="matrix(38.9764,0,0,38.9764,190.4,597.429)">
                </g>
                <text x="122.972px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">R<tspan x="146.209px 166.915px " y="597.429px 597.429px ">ed</tspan></text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,335.679,365.025)">
                <g transform="matrix(38.9764,0,0,38.9764,290.91,547.545)">
                </g>
                <text x="159.821px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">DE2817</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,1128.79,-60.7855)">
                <g transform="matrix(38.9764,0,0,38.9764,209.394,597.429)">
                </g>
                <text x="103.978px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">Gr<tspan x="145.239px 165.945px " y="597.429px 597.429px ">ee</tspan>n</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,1086.75,14.9308)">
                <g transform="matrix(38.9764,0,0,38.9764,292.689,547.545)">
                </g>
                <text x="158.042px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">4CA72B</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,978.256,-61.0668)">
                <g transform="matrix(38.9764,0,0,38.9764,235.552,597.429)">
                </g>
                <text x="77.82px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">Magenta</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,935.679,14.9308)">
                <g transform="matrix(38.9764,0,0,38.9764,291.233,547.545)">
                </g>
                <text x="159.498px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">BD0F77</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,828.795,289.214)">
                <g transform="matrix(38.9764,0,0,38.9764,209.394,597.429)">
                </g>
                <text x="103.978px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">Gr<tspan x="145.239px 165.945px " y="597.429px 597.429px ">ee</tspan>n</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,786.751,364.931)">
                <g transform="matrix(38.9764,0,0,38.9764,292.689,547.545)">
                </g>
                <text x="158.042px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">4CA72B</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,678.256,288.933)">
                <g transform="matrix(38.9764,0,0,38.9764,235.552,597.429)">
                </g>
                <text x="77.82px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">Magenta</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,635.679,364.931)">
                <g transform="matrix(38.9764,0,0,38.9764,291.233,547.545)">
                </g>
                <text x="159.498px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">BD0F77</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,828.789,-60.7855)">
                <g transform="matrix(38.9764,0,0,38.9764,200.239,597.429)">
                </g>
                <text x="113.133px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">Cyan</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,485.304,365.025)">
                <g transform="matrix(38.9764,0,0,38.9764,290.567,547.545)">
                </g>
                <text x="160.164px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">129FD4</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,528.789,289.214)">
                <g transform="matrix(38.9764,0,0,38.9764,200.239,597.429)">
                </g>
                <text x="113.133px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">Cyan</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,378.432,-60.7855)">
                <g transform="matrix(38.9764,0,0,38.9764,222.268,597.429)">
                </g>
                <text x="91.104px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">Orange</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,228.789,-60.7855)">
                <g transform="matrix(38.9764,0,0,38.9764,191.161,597.429)">
                </g>
                <text x="122.211px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">T<tspan x="139.929px 160.635px " y="597.429px 597.429px ">ea</tspan>l</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,77.8924,-60.1058)">
                <g transform="matrix(38.9764,0,0,38.9764,213.847,597.429)">
                </g>
                <text x="99.525px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">Purple</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,1128.79,289.214)">
                <g transform="matrix(38.9764,0,0,38.9764,191.161,597.429)">
                </g>
                <text x="122.211px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">T<tspan x="139.929px 160.635px " y="597.429px 597.429px ">ea</tspan>l</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,977.892,289.894)">
                <g transform="matrix(38.9764,0,0,38.9764,213.847,597.429)">
                </g>
                <text x="99.525px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">Purple</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,336.323,14.9308)">
                <g transform="matrix(38.9764,0,0,38.9764,293.117,547.545)">
                </g>
                <text x="157.614px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">CD8402</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,78.4315,289.214)">
                <g transform="matrix(38.9764,0,0,38.9764,222.268,597.429)">
                </g>
                <text x="91.104px" y="597.429px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:650;font-size:38.976px;">Orange</text>
            </g>
            <g transform="matrix(0.615758,0,0,0.615758,36.3232,364.931)">
                <g transform="matrix(38.9764,0,0,38.9764,293.117,547.545)">
                </g>
                <text x="157.614px" y="547.545px" style="font-family:'SegoeUI', 'Segoe UI';font-weight:500;font-size:38.976px;">CD8402</text>
            </g>
            <g id="CircleWhiteCenter" transform="matrix(0.2821,0,0,0.2821,50.0907,605.164)">
                <clipPath id="_clip1">
                    <circle cx="1240.16" cy="1753.94" r="886.092"/>
                </clipPath>
                <g clip-path="url(#_clip1)">
                    <g transform="matrix(3.54484,-0,-0,3.54484,-177.563,-2145.21)">
                        <use xlink:href="#_Image2" x="149.973" y="849.984" width="500px" height="500px"/>
                    </g>
                </g>
                <circle cx="1240.16" cy="1753.94" r="886.092" style="fill:url(#_Radial3);"/>
            </g>
            <g transform="matrix(0.674092,-0.489756,0.489756,0.674092,-806.559,431.642)">
                <circle cx="705" cy="1200" r="30" style="fill:rgb(189,15,119);stroke-width:4.8px;"/>
            </g>
            <g transform="matrix(-0.0436075,-0.832081,0.832081,-0.0436075,-817.657,1747.82)">
                <circle cx="705" cy="1200" r="30" style="fill:rgb(117,59,189);stroke-width:4.8px;"/>
            </g>
            <g transform="matrix(-0.735692,-0.391175,0.391175,-0.735692,328.162,2477.31)">
                <circle cx="705" cy="1200" r="30" style="fill:rgb(6,99,181);stroke-width:4.8px;"/>
            </g>
            <g transform="matrix(-0.800946,-0.229667,0.229667,-0.800946,616.1,2462.14)">
                <circle cx="705" cy="1200" r="30" style="fill:rgb(18,159,212);stroke-width:4.8px;"/>
            </g>
            <g transform="matrix(-0.828659,0.0870955,-0.0870955,-0.828659,1110.64,2281.97)">
                <circle cx="705" cy="1200" r="30" style="fill:rgb(0,133,120);stroke-width:4.8px;"/>
            </g>
            <g transform="matrix(-0.201575,0.808473,-0.808473,-0.201575,1753.75,836.382)">
                <circle cx="705" cy="1200" r="30" style="fill:rgb(76,167,43);stroke-width:4.8px;"/>
            </g>
            <g transform="matrix(0.656589,0.512983,-0.512983,0.656589,709.803,-244.021)">
                <circle cx="705" cy="1200" r="30" style="fill:rgb(205,132,2);stroke-width:4.8px;"/>
            </g>
            <g transform="matrix(0.830053,0.0726202,-0.0726202,0.830053,-72.1668,-195.962)">
                <circle cx="705" cy="1200" r="30" style="fill:rgb(222,40,23);stroke-width:4.8px;"/>
            </g>
            <g transform="matrix(1,0,0,1,-6.82955,16.6779)">
                <g transform="matrix(60,0,0,60,474.124,72.7361)">
                </g>
                <text x="116.644px" y="72.736px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:600;font-size:60px;">Hauptp<tspan x="320.374px 351.693px " y="72.736px 72.736px ">al</tspan>ett<tspan x="442.249px " y="72.736px ">e</tspan></text>
            </g>
            <g transform="matrix(1,0,0,1,-2.14205,366.678)">
                <g transform="matrix(60,0,0,60,720.072,72.7361)">
                </g>
                <text x="116.644px" y="72.736px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:600;font-size:60px;">Alt<tspan x="193.929px 225.804px " y="72.736px 72.736px ">er</tspan>nativ<tspan x="381.664px 413.539px " y="72.736px 72.736px ">e </tspan>Sor<tspan x="522.464px 544.144px " y="72.736px 72.736px ">ti</tspan>erung</text>
            </g>
            <g transform="matrix(1,0,0,1,-6.82955,716.678)">
                <g transform="matrix(60,0,0,60,776.38,72.7361)">
                </g>
                <text x="116.644px" y="72.736px" style="font-family:'SegoeUI-Semibold', 'Segoe UI';font-weight:600;font-size:60px;">Dar<tspan x="213.587px 239.456px 260.785px 292.66px " y="72.736px 72.736px 72.736px 72.736px ">stel</tspan>lung im F<tspan x="560.111px 591.429px " y="72.736px 72.736px ">ar</tspan>bkr<tspan x="702.962px 734.837px " y="72.736px 72.736px ">ei</tspan>s</text>
            </g>
            <defs>
                <image id="_Image2" width="500px" height="500px" xlink:href="data:image/jpeg;base64,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"/>
                <radialGradient id="_Radial3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(5.42575e-14,-886.092,886.092,5.42575e-14,1240.16,1753.94)"><stop offset="0" style="stop-color:white;stop-opacity:1"/><stop offset="1" style="stop-color:white;stop-opacity:0"/></radialGradient>
            </defs>
        </svg>
    </body>

Alternativen für das Light Theme
--------------------------------

.. figure:: alts-light-1.png
   :alt: Einfarbige Alternative für das Light Theme

.. figure:: alts-light-2.png
   :alt: Zweifarbige Alternative für das Light Theme

.. figure:: alts-light-3.png
   :alt: Dreifarbige Alternative für das Light Theme

.. figure:: alts-light-4.png
   :alt: Vierfarbige Alternative für das Light Theme

.. figure:: alts-light-5.png
   :alt: Fünffarbige Alternative für das Light Theme

Alternativen für das Dark Theme
-------------------------------

.. figure:: alts-dark-1.png
   :alt: Einfarbige Alternative für das Dark Theme

.. figure:: alts-dark-2.png
   :alt: Zweifarbige Alternative für das Dark Theme

.. figure:: alts-dark-3.png
   :alt: Dreifarbige Alternative für das Dark Theme

.. figure:: alts-dark-4.png
   :alt: Vierfarbige Alternative für das Dark Theme

.. figure:: alts-dark-5.png
   :alt: Fünffarbige Alternative für das Dark Theme

Sequenzen
---------

Einfarbig
~~~~~~~~~

Monochromatische Paletten eignen sich gut für Beziehungs- und Trenddiagramme.
Beim hellen Theme bezeichnet die dunkelste Farbe die größten Werte. In dunklen
Themes bezeichnet die hellste Farbe die größten Werte.

.. figure:: palettes-mono-1.png
.. figure:: palettes-mono-2.png

Warm-Kalt
~~~~~~~~~

Die Rot-Cyan-Palette hat einen natürlichen Zusammenhang mit der Temperatur.
Verwendet diese Palette für Daten, die heiß-vs-kalt darstellen sollen.

.. figure:: palettes-div1.png

Verläufe ohne Farbassoziationen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: palettes-div2.png

Alarm
~~~~~

Warnfarben werden verwendet, um den Status wiederzugeben. In der Regel steht Rot
für Gefahr oder Fehler. Orange ist eine ernsthafte Warnung. Gelb steht für eine
einfache Warnung und Grün für Normal oder Erfolg.

.. figure:: palettes-alert.png

Farbverlauf
~~~~~~~~~~~

Farbverläufe eignen sich gut zum Hervorheben von Extremen in einem Wertebereich.
Verwendet einen Verlauf nur bei Bedarf für Visualisierungen separater
Kategorien. Mehrere Farbverläufe sind oft nicht zugänglich und nur selten
empfehlenswert. Farbverläufe sollten nicht verwendet werden, um eine Progression
oder Divergenz darzustellen.

.. note::
    Verwendet niemals einen Farbverlauf anstelle einer sequentiellen Palette.

.. figure:: gradient.png

.. seealso::
   * `Paul Tol <https://personal.sron.nl/~pault/>`_
   * `bokeh Accessible Palettes
     <https://docs.bokeh.org/en/latest/docs/reference/palettes.html#accessible-palettes>`_
