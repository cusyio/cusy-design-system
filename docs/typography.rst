Typographie
===========

Typographie kann dabei helfen, Texte zu organisieren und Personen durch eine
Seite zu führen. Dabei wird der geiegnete Schriftstil durch den Bereich im
Layout bestimmt.

Schrift
-------

Das cusy Design-System verwendet die Open-Source-Schrift **M+ 2c**. Sie kann
aus dem `M+ Fonts <https://github.com/rayshan/mplus-fonts>`_-Repository
heruntergeladen werden.

Sans-serif
~~~~~~~~~~

.. code-block:: html

    font-family: 'M PLUS 1p', sans-serif;

Mono
~~~~

.. code-block:: html

    font-family: 'M PLUS 1nm', monospace;

Skalierung
----------

Die cusy Schriftskala basiert auf einerseits auf dem Goldenen Schnitt,
andererseits auf der Verdoppelung, um die Texte hierarchisch zu
strukturieren:

.. table:: cusy Schriftskala

    +--------+--------+
    | rem    | px     |
    +========+========+
    | 0.625  | 10     |
    +--------+--------+
    | 0.813  | 13     |
    +--------+--------+
    | 1      | 16     |
    +--------+--------+
    | 1.313  | 21     |
    +--------+--------+
    | 1.625  | 26     |
    +--------+--------+

Gewichte
--------

Die Schriftgröße wird im cusy Design-System für die hierarchische Gliederung
der Texte verwendet. Eine fettere Schrift innerhalb eines Textes betont jedoch
diesen Textabschnitt.

Die Wirkung der Schriftstärke unterscheidet sich jedoch zwischen dem
cusy Dark-Theme und dem cusy Light-Theme:

.. table:: Schriftstärke in Abhängigkeit von Textabschnitt, Dark- und
           Light-Theme

    +-----------------+--------------------------+--------------------------+
    | Format          | cusy Dark-Theme          | cusy Light-Theme         |
    +=================+==========================+==========================+
    | Überschrift     | Bold                     | Medium                   |
    +-----------------+--------------------------+--------------------------+
    | Unterüberschrift| Bold                     | Medium                   |
    +-----------------+--------------------------+--------------------------+
    | Zusammenfassung | Regular                  | Light                    |
    +-----------------+--------------------------+--------------------------+
    | Textkörper      | Regular                  | Light                    |
    +-----------------+--------------------------+--------------------------+
    | Fußnoten,       | Regular                  | Light                    |
    | Marginalien     |                          |                          |
    +-----------------+--------------------------+--------------------------+

Kursiv
------

Es gibt keine Kursive. Dabei werden die Titel von Werken, Fachbegriffe und
Namen unterschiedlich kenntlich gemacht:

* Titel von Werken werden in Anführungszeichen gesetzt, :abbr:`z.B. (zum
  Beispiel)` das »PyViz-Tutorial«.
* Für Fachbegriffe wird bei Mouseover ein Tooltip mit dem Beginn der
  Kurzbeschreibung angezeigt.
* Namen werden nur mit ®, ™ :abbr:`o.ä. (oder ähnlich)` ausgezeichnet, sofern
  zutreffend.

Textfarbe
---------

Überschriften werden in der cusy Hausfarbe Purple ``rgba(132, 14, 255, 1)``
gestaltet.

Text soll neutral erscheinen, also * White* im cusy Dark-Theme und *Black* im
cusy Light-Theme.

Links erhalten die Farbe *Blue*.

Syntax-Hervorhebungen in Quellcode erfolgen mit `Highlight.js plugin for Vue.js
<https://github.com/highlightjs/vue-plugin>`_  und unterscheiden zwischen
cusy Dark-Theme und cusy Light-Theme.

Weitere Farben dürfen nur verwendet werden, sofern sie bedeutend sind,
:abbr:`z.B. (zum Beispiel)`

* *Red* für Fehler
* *Orange* für Warnungen
* *Blue* fir Informationen
* *Green* für Bestätigungen
