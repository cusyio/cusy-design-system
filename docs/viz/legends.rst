Legenden
========

Legenden fassen die unterscheidenden visuellen Eigenschaften wie Farben oder
Textur zusammen, die in der Visualisierung verwendet werden. Eine Legende hilft
den Betrachtern, die erforderlichen Assoziationen zu erstellen, um das Diagramm
zu verstehen.

Verwendung
----------
Vermeidet nach Möglichkeit die direkte Verwendung von Legenden und beschriftet
die Daten direkt. Legenden basieren auf visuellen Assoziationen, die das
Verständnis eines Diagramms erschweren können.

Diagramme benötigen nicht zwingend eine Legende, wenn sie nur eine
Datenkategorie enthalten. Verwendet eine Legende nur, wenn ihr nicht sicher
davon ausgehen könnt, dass genügend Platz vorhanden ist, um Beschriftungen
direkt anzubringen.

Verwendet eine klare Sprache und vermeidet Akronyme in Legenden. Dies gilt
auch für Titel und Achsenbeschriftungen.

.. figure:: legends-usage-1.png
   :alt: Entfernte Legenden

   Entfernt Legenden, um das Diagramm zu vereinfachen, wenn nur eine
   Datenkategorie benötigt oder nur eine Farbe verwendet wird.

.. figure:: legends-usage-2.png
   :alt: In-Chart-Beschriftungen

   Beschriftungen in einer Grafik sind ideal für Diagramme mit vorhersehbaren
   Daten und viel Leerraum, :abbr:`z.B. (zum Beispiel)` innerhalb eines
   Ringdiagramms.

Farbe und Textur
----------------

Legenden verwenden üblicherweise Farben zur Unterscheidung der Eigenschaften von
Datensätzen und Werten. Textur kann anstelle oder zusätzlich zur Farbe verwendet
werden, um Diagramme für Betrachter mit Sehbehinderung zugänglich zu machen.

.. figure:: legends-usage-3.png
   :alt: Textur zur Verbesserung der Zugänglichkeit

   Texturen können die Zugänglichkeit verbessern.

Position
--------

Die Legenden werden üblicherweise unter dem Titel des Diagramms positioniert. Je
nach Layout der Seite und Kontext, könnt ihr jedoch die Legenden auch unten,
links oder rechts im Grafikrahmen positionieren.

Oben (Standard) und unten
~~~~~~~~~~~~~~~~~~~~~~~~~

Positioniert die Legende oben oder unten in einem Diagramm, wenn der Platz knapp
ist, :abbr:`z.B. (zum Beispiel)` in einem Dashboard.

.. figure:: legends-pos-1.png
   :alt: Oben positionierte Legende (Standard)

.. figure:: legends-pos-2.png
   :alt: Unten positionierte Legende

Rechts
~~~~~~

Positioniert die Legende rechts neben dem Diagramm, wenn genügend Platz
vorhanden ist oder wenn es den Kontext erhöht, :abbr:`z.B. (zum Beispiel)` bei
gestapelten Balkendiagrammen.

.. figure:: legends-pos-3.png
   :alt: Gestapeltes Balkendiagramm mit rechts positionierter  Legende

Links
~~~~~

Positioniert die Legende links im Diagramm, wenn eine bessere Schriftausrichtung
erforderlich ist. Stellt sicher, dass die umgebenden Elemente des Diagramms
nicht zu eng an die Legende heranreichen.

.. figure:: legends-pos-4.png
   :alt: Links positionierte Legende

Überlagerung
~~~~~~~~~~~~

In Geodiagrammen können Legenden über einen Diagrammrahmen gelegt werden.

.. figure:: legends-pos-5.png
   :alt: Von einer Legende überlagerte Karte

Interaktionen
-------------

Mauszeiger in der Legende über einer Kategorie
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wenn der Mauszeiger über die Legende einer Kategorie bewegt wird, wird die
Deckkraft aller anderen Kategorien im Diagramm auf 30 Prozent gesenkt.

.. figure:: legends-behavior-1.png
   :alt: Hervorhebung von Kategorien in Legenden

Klicken zum Filtern
~~~~~~~~~~~~~~~~~~~

Durch Klicken auf die Kategorie einer  Legende werden die Informationen isoliert
und alle anderen Kategorien ausgeblendet. Die Legende erhält beim Klicken ein
Häkchen und wechselt in einen ausgewählten Status.

.. figure:: legends-behavior-2.png
.. figure:: legends-behavior-3.png

Wenn alle Kategorien ausgewählt sind, verschwinden die Häkchen in den Legenden
und die Legende wird auf ihren Standardzustand zurückgesetzt.

.. figure:: legends-behavior-4.png

Versteckte Legenden
~~~~~~~~~~~~~~~~~~~

Bitte beachtet, dass sich das Ausblenden von Legenden in Datenvisualisierungen
nur sehr selten empfiehlt, es sei denn, es wird nur eine Datenkategorie
angezeigt. Dieses Design ist für kleine mobile Displays gedacht, bei denen
Legenden den Blick auf die Datenvisualisierung versperren würde.

.. figure:: legends-hidden-1.png
   :alt: Auf dem Handy versteckte Legenden

   Wenn Legenden ausgeblendet sind, wird eine Schaltfläche *Legenden anzeigen*
   hinzugefügt, damit die Legende auch bei der Tastatursteuerung angezeigt
   werden kann.

.. figure:: legends-hidden-2.png
   :alt: Die versteckte Legende wird in einem modalen Fenster angezeigt.

   Wenn ihr auf *Legenden anzeigen* klickt, wird ein modales Fenster mit einer
   Liste von Legenden mit Optionen zum Ein- und Ausschalten sämtlicher
   Datenkategorien angezeigt.

Legendenüberlauf
~~~~~~~~~~~~~~~~

Standardmäßig werden bis zu zwei Legendenzeilen angezeigt. Wenn *Mehr* angeklickt
wird, wird der Legendenbereich erweitert, um alle Legenden anzuzeigen. Eine
erweiterte Legende sollte jedoch niemals größer als 30 Prozent der Diagrammhöhe
sein.

.. figure:: legends-overflow-1a.png
   :alt: Legenden verwenden standardmäßig maximal zwei Zeilen. Mit »Mehr
         anzeigen« kann die Legende bis auf 30 Prozent des Diagramms erweitert
         werden.

.. figure:: legends-overflow-1b.png
   :alt: Legenden verwenden standardmäßig maximal zwei Zeilen. Mit »Mehr
         anzeigen« kann die Legende bis auf 30 Prozent des Diagramms erweitert
         werden.

.. figure:: legends-overflow-2a.png
   :alt: Überlaufende Legenden scrollen vertikal
.. figure:: legends-overflow-2b.png
   :alt: Überlaufende Legenden scrollen vertikal

