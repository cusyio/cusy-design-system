Mehrsprachigkeit
================

:file:`*.svg`-Dateien können mehrsprachig sein. Dabei können auch mehrere
Übersetzungen in einer Datei vorhanden sein. Eine solche Datei hat mehrere
Vorteile:

* Die Speichergröße und die Anzahl der Dateien für mehrsprachige
  Visualisierungen verringert sich.
* Bei einer Aktualisierung erfolgt die Änderung für alle Sprachen in nur einer
  Datei.

Hierfür wird das `<switch>
<https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/switch>`_-Element
von SVG verwendet, :abbr:`z. B. (zum Beispiel)`:

.. literalinclude:: cusy.svg
   :language: xml

.. figure:: cusy.svg

SVG-Dateien verwenden `IETF
<https://www.rfc-editor.org/rfc/rfc1766>`_-Sprachkennzeichnungen.

.. tip::
   Die Reihenfolge der ``<text>``-Elemente ist wichtig!

   SVG betrachtet die ``<text>``-Elemente nacheinander. Nur wenn das
   ``systemLanguage``-Attribut **nicht** übereinstimmt, wird zum nächsten
   Element gewechselt.  Das letzte ``<text>``-Element ohne
   ``systemLanguage``-Attribut wird verwendet, wenn keines der
   ``systemLanguage``-Attribute in den vorigen ``<text>``-Elementen zutreffend
   war.

.. warning::
   Verschiedene Übersetzungen haben unterschiedliche Längen, daher sollte der
   Ankerpunkt sorgfältig ausgewählt werden. :abbr:`Ggf. (Gegebenenfalls)` kann
   mit CSS auch der Text global skaliert werden, :abbr:`z. B. (zum Beispiel)`:

   .. code-block:: html

      <style type="text/css">
          text[systemLanguage="de" i] { font-size: 97%; }
      </style>

   ``i`` macht den Sprachcode unabhängig von der Groß-/Kleinschreibung.

   Für Sprachen, die von rechts nach links laufen, sollte das `anchor
   <https://developer.mozilla.org/de/docs/Web/SVG/Reference/Attribute/text-anchor>`_-Attribut
   voraussichtlich auf ``end`` geetzt werden.

In der Datei `Annexation of Southern and Eastern Ukraine.svg
<https://commons.wikimedia.org/wiki/File:Annexation_of_Southern_and_Eastern_Ukraine.svg>`_
findet ihr ein komplexes Beispiel für eine mehrsprachige SVG-Karte, die auch
Schriften von rechts nach links enthält. Dabei werden  Symbole und
Sprachumschalter der Beschriftungen im  ``<defs>``-Abschnitt definiert, wobei
jedes davon in einem ``<g>``-Element gruppiert wird. Anschließend werden beide
in den Legende einer weiteren ``<switch>``-Konstruktion eingesetzt.

.. seealso::
   * `SVG Tutorial: Das switch-Element
     <https://svgtutorial.aptico.de/start3.php?knr=7&kname=Dokum.&uknr=7.6&ukname=Auswahlmoeglichkeiten%20-%20das%20switch-Element>`_
   * `The ‘systemLanguage’ attribute
     <https://www.w3.org/TR/SVG11/struct.html#ConditionalProcessingSystemLanguageAttribute>`_
   * `SVG Processing: Efficient Language Translation
     <https://web.archive.org/web/20091213025327/http://www.svgopen.org/2009/papers/60-SVG_Processing_Efficient_Language_Translation/>`_

.. `Wikimedia Commons: How to translate an SVG file <https://commons.wikimedia.org/wiki/Commons:Translation_possible/Learn_more#How_to_translate_an_SVG_file>`_
