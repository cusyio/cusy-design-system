Perceivable (Wahrnehmbar)
=========================

Eine Visualisierung und ihre Botschaft sollte für Bildschirmlesegeräte
zugänglich sein, so dass sie laut vorgelesen werden können. Dies kann technisch
:abbr:`z.B. (zum Beispiel)` mit dem ``alt``-Attribut umgesetzt werden.

Für Menschen mit anderen Einschränkungen der Sehfähigkeit kann die
Datenvisualisierung optimiert werden durch

* ausreichend große Schriftgrößen, genauer, die Schriftgröße des Textes sollte
  konfigurierbar sein.
* die verwendeten Farben sollten auch für Farbenblinde genügend Kontrast
  aufweisen.
* Mit direkter Beschriftung anstelle einer separaten Legende könnt ihr Merkmale
  deutlicher kennzeichnen.

  .. figure:: chart-label.png
     :alt: Direkte Beschriftungen

* Das Kontrastverhältnis zwischen geometrischen Elementen wie Balken und Kreisen
  und ihrem Hintergrund sollte größer als 3:1 sein.
* Das Kontrastverhältnis zwischen Text und Hintergrund sollte größer als 4,5:1
  sein.
* Die grafischen Elemente eines Diagramms sollten ausreichend groß sein, damit
  sie wahrgenommen werden können.
* Linien sollten eine ausreichend große Strichstärke haben.
* Punkte sollten einen ausreichend großen Radius haben.
* Balken sollten nicht zu dünn sein.

* Um die Wahrnehmung benachbarter Elemente bei der Visualisierung zu
  erleichtern, sollten die Elemente durch weißen Raum voneinander getrennt
  werden:

  .. figure:: stacked-bars-outlines.png
     :alt: Balkendiagramm mit weißer Umrisslinie

* Jeder Text in einer Visualisierung sollte andere Diagrammelemente nicht
  überlagern.

  Wenn Text über anderen Elementen platziert wird, sollte er eine eigene
  Hintergrundfarbe haben, um die Lesbarkeit zu gewährleisten.
