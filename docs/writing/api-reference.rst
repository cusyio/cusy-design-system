API-Referenz
============

Wenn ihr eine :abbr:`API (englisch: application programming interface; deutsch:
Programmierschnittstelle)` dokumentiert, stellt eine vollständige API-Referenz
bereit, die in der Regel aus dem Quellcode unter Verwendung von Kommentaren
generiert wird und alle öffentlichen Klassen, Methoden, Konstanten :abbr:`etc.
(etcetera)` beschreibt.

Verwendet die grundlegenden Richtlinien in diesem Dokument, wie es für eine
bestimmte Programmiersprache angemessen ist. In diesem Dokument wird nicht
angegeben, wie die Kommentare formattiert sein sollen; weitere Informationen
findet ihr in den spezifischen Richtlinien für jede Programmiersprache.

.. seealso::
    * :doc:`python-basics:document/sphinx/docstrings`

Diese Seite deckt auch keine Web-APIs ab. Die später aufgeführten Stilvorschläge
können bei der Dokumentation von Web-APIs nützlich sein.

.. seealso::
    * `FastAPI
      <https://www.python4data.science/de/latest/data-processing/apis/fastapi/index.html>`_

Grundlagen
----------

Die API-Referenz muss für jeden der folgenden Punkte eine Beschreibung enthalten:

* jede Klasse, Schnittstelle, Struktur und jede andere Komponente der API
  (:abbr:`z.B. (zum Beispiel)` Union-Typen in C++)
* jede Konstante, jedes Feld, jedes Enum, jede Typedef, :abbr:`usw. (und so
  weiter)`
* jede Methode, mit einer Beschreibung für jeden Parameter, den Rückgabewert
  und alle möglichen Exceptions (engl.: Ausnahmen)

Veralteter Code
---------------

Wenn Code veraltet ist, sagt, was alternativ verwendet werden soll. Und wenn
ihr eure API versioniert, erwähnt, in welcher Version es zuerst veraltet war.

Nur der erste Satz einer Beschreibung erscheint in der Zusammenfassung und im
Index, also fügt die wichtigsten Informationen dort ein. Die folgenden Sätze
können erklären, warum die Methode veraltet ist, zusammen mit allen anderen
Informationen, die für die weitere Entwicklung und Nutzung der API nützlich
sind.

Wenn eine Methode veraltet ist, sagt eurem Publikum, was es tun muss, damit der
Code weiterhin funktioniert.

.. seealso::

   * :ref:`python-basics:deprecated`
