Code
====

Verwendet in normalen Textsätzen (im Gegensatz zu :abbr:`z.B. (zum Beispiel)`
Codebeispielen) eine nicht-proportionale Schriftart, um Code auszuzeichnen.

* verwendet in HTML das ``<code>``-Element.
* in Markdown einen Backtick ````` vor und nach dem Code
* in reStructuredText zwei Backticks `````` davor und danach

Diese Seite erklärt, wie ihr Code in normalen Textsätzen formatiert.

Einige spezifische Code-Elemente
--------------------------------

Die folgende Liste enthält Elemente, die als Code dargestellt werden sollten;
sie ist jedoch nicht vollständig.

* Attributnamen und -werte
* Klassennamen
* Datentypen
* Konstanten
* Namen von Umgebungsvariablen
* Schlüsselwörter der Programmiersprache
* Methoden- und Funktionsnamen
* Namespace-Aliase
* Namen von Befehlszeilenprogrammen
* Elementnamen (XML und HTML)

  Setzt spitze Klammern (``<>``) um den Elementnamen.

* HTTP-Statuscodes und -Content-Types
* DNS Record-Typen
* Dateinamen, Dateinamenerweiterungen (falls verwendet) und Pfade
* Ordner und Verzeichnisse

.. note::
    Generell solltet ihr keinen Code in Anführungszeichen setzen, es sei denn,
    die Anführungszeichen sind Teil des Codes.

Sprachunterstützung in Sphinx
-----------------------------

:doc:`sphinx:index` unterstützt verschiedene Sprachen, :abbr:`u.a. (unter
anderem)`

* :doc:`Python <sphinx:usage/domains/python>`
* :doc:`C <sphinx:usage/domains/c>`
* :doc:`C++ <sphinx:usage/domains/cpp>`
* :doc:`JavaScript <sphinx:usage/domains/javascript>`
* :doc:`Math <sphinx:usage/domains/mathematics>`
* `MATLAB
  <https://pypi.org/project/sphinxcontrib-matlabdomain/>`_
* `Scala
  <https://pypi.org/project/sphinxcontrib-scaladomain/>`_

.. seealso::
   * :doc:`python-basics:document/sphinx/code-blocks`

Elemente, die normal dargestellt werden sollen
----------------------------------------------

Die folgende Liste enthält Elemente, die nicht als Code dargestellt werden
sollten; die Liste ist jedoch nicht vollständig.

* E-Mail-Adressen
* Namen von Produkten, Dienstleistungen und Organisationen

  Oft werden die Namen von Befehlszeilen-Dienstprogrammen genauso geschrieben
  wie das Software-Projekt oder -Produkt, mit dem sie verbunden sind. Verwendet
  in solchen Fällen Code für den Befehl und die normale Schrift für den Namen
  des Projekts oder Produkts.

  Beispiel: Ruft den GCC-Compiler mit ``gcc`` auf.

* URLs

  .. seealso::
    * :doc:`link-text`
    * :doc:`placeholder`
