Datenvisualisierung
===================

Auch wenn die Visualisierung von Daten diese für die meisten Menschen
zugänglicher macht, solltet ihr die :abbr:`sog. (sogenannten)`
POUR-CAF-Prinzipien befolgen, die von den Entwicklern des `Chartability
<https://chartability.fizz.studio>`_-Frameworks entwickelt wurden:

* :doc:`pour-caf/perceivable`
* :doc:`pour-caf/operable`
* :doc:`pour-caf/understandable`
* :doc:`pour-caf/robust`
* :doc:`pour-caf/compromising`
* :doc:`pour-caf/assistive`
* :doc:`pour-caf/flexible`

Dieses Framework stellt eine Reihe von Tests zur Gewährleistung der
Zugänglichkeit von Visualisierungen und Schnittstellen bereit.

Weitere Emfpehlungen sind:

* ❌ Verlasst euch nicht auf Farben um die Daten zu erklären
* ❌ Verwendet keine kontrastarmen Farben
* ❌ Versteckt keine wichtigen Daten hinter Interaktionen
* ❌ Überfordert euer Publikum nicht mit zu vielen Informationen
* ❌ Verlasst euch nicht auf ``hover``-Effekte; diese funktionieren nicht auf
  Mobilgeräten
* ❌ Verzichtet auf Animationen und Scroll-Hijacking, wenn diese nicht
  wesentlich zur Erklärung der Daten beitragen
* ✅ Beachtet bereits beim Design die Zugänglichkeit
* ✅ Beachtet auch kleinere Displays, :abbr:`z.B. (zum Beispiel)` bei
  Mobilgeräten
* ✅ Verwendet kontrastreiche Farben und Muster
* ✅ Verwendet Etiketten und Legenden
* ✅ Übersetzt die Daten in eine klare Sprache
* ✅ Gebt Kontext an und erklärt die Visualisierung

.. seealso::
   * `Case Study: Implementing Accessible Data Charts for the Khan Academy 2018
     Annual Report
     <https://www.sarasoueidan.com/blog/accessible-data-charts-for-khan-academy-2018-annual-report/>`_
   * `Accessibility Considerations In Data Visualization Design
     <https://keen.io/blog/accessibility-in-data-vis/>`_
   * `Dataviz Accessibility Resources
     <https://github.com/dataviza11y/resources>`_
   * `Writing Alt Text for Data Visualization
     <https://medium.com/nightingale/writing-alt-text-for-data-visualization-2a218ef43f81>`_
   * `WAI tutorials: Complex Images
     <https://www.w3.org/WAI/tutorials/images/complex/>`_
   * `Using VoiceOver to Evaluate Web Accessibility
     <https://webaim.org/articles/voiceover/>`_
   * `How Does This Data Sound? keyboard interaction, sonification etc.
     <https://blog.interactivethings.com/how-does-this-data-sound-945ed27a1a95>`_
   * Heather Migliorisi: `Accessible SVGs
     <https://css-tricks.com/accessible-svgs/>`_
   * `Accessible SVG line graphs <https://tink.uk/accessible-svg-line-graphs/>`_
   * `Accessible SVG flowcharts <https://tink.uk/accessible-svg-flowcharts/>`_
   * Carie Fisher: `Creating Accessible SVGs
     <https://www.deque.com/blog/creating-accessible-svgs/>`_
   * Sarah Higley: `Quick Tips for High Contrast Mode
     <https://sarahmhigley.com/writing/whcm-quick-tips/>`_
   * Melanie Richards: `CurrentColor SVG in forced colors modes
     <https://melanie-richards.com/blog/currentcolor-svg-hcm/>`_
   * Val Head: `Designing With Reduced Motion For Motion Sensitivities
     <https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/>`_

.. toctree::
    :hidden:
    :titlesonly:
    :maxdepth: 0

    d3
    vega
    pour-caf/index
