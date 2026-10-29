Dashboards
==========

Datenvisualisierungen können in einer Reihe verschiedener Diagramme dargestellt
werden, und zwar in User Interfaces, die als Dashboards bezeichnet werden.
Manchmal lassen sich Zusammenhänge durch mehrere separate Diagramme besser
vermitteln als durch ein einziges komplexes Diagramm.

Der Zweck eines Dashboards sollte sich in seinem :doc:`Layout <structure>`,
seinem Stil und seinen :doc:`Interaktionsmustern <interaction>` widerspiegeln.
Sein Design sollte der Art der Nutzung entsprechen, unabhängig davon, ob es sich
um ein Werkzeug für die :ref:`Datenanalyse <analytics-dashboards>`,  die
:ref:`Präsentation <presentation-dashboards>` oder die :ref:`Betriebsüberwachung
<operations-dashboards>` handelt.

.. _analytics-dashboards:

Analyse-Dashboards
------------------

Analyse-Dashboards ermöglichen, mehrere Datensätze zu untersuchen und Trends zu
erkennen. In der Regel enthalten diese Dashboards komplexe Diagramme, die die
Gewinnung von Erkenntnissen aus den Daten ermöglichen.

Mithilfe von Analyse-Dashboards kann mit den Datenvisualisierungen
:doc:`interagiert <interaction>` werden, um Erkenntnisse zu gewinnen und Muster
zu identifizieren. Beispiele für solche Interaktionen sind Suchen, Sortieren,
:ref:`zoom` und :ref:`panning` von Daten.

Anwendungsfälle sind unter anderem:

* das Erkennen von Trends im Zeitverlauf
* die Beantwortung von *Warum*- und *Was-wäre-wenn*-Fragen
* die Erstellung detaillierter analytischer Berichte

Vorgehensweise
~~~~~~~~~~~~~~

#. Vereinheitlichen

   Alle Diagramme sollten dasselbe Layout und denselben Abstand verwenden und
   Legenden dieselbe Position relativ zum Diagrammbereich haben.

#. Verknüpfte Diagramme

   Wenn eine Person ein Diagramm bearbeitet, sollten andere Diagramme mit
   zugehörigen Datensätzen automatisch aktualisiert werden, um mehrdimensionale
   Ansichten der Aktion für diese Person bereitzustellen.

#. Anmerkungen

   Verwendet Anmerkungen, um Trends, Durchschnittswerte, Spitzen und Täler
   hervorzuheben und zusätzliche Informationen bereitzustellen. Anmerkungen
   sollen helfen, Schwankungen in den Daten zu interpretieren. Umgekehrt solltet
   ihr Anmerkungen vermeiden, die die Ansicht von Daten behindern.

.. _presentation-dashboards:

Präsentation-Dashboards
-----------------------

Präsentation-Dashboards zeigen den aktuellen Status eines Problems beginnend mit
den relevanten Leistungsindikatoren. Ein gutes Präsentation-Dashboard bietet
eine Gesamtansicht der Daten und dient gleichzeitig als Leitfaden, um zu
entscheiden, auf welche Bereiche sie sich konzentrieren sollten um sie weiter zu
erkunden.

Vorgehensweise
~~~~~~~~~~~~~~

#. Priorisieren

   Priorisiert Daten nach Wichtigkeit und erstellt dann eine klare visuelle
   Hierarchie. Die wichtigsten Daten sollten den höchsten Kontrast aufweisen und
   die größte Fläche einnehmen.

   Die meisten Menschen im Westen lesen von links nach rechts und dann von oben
   nach unten. Gemäß dieses `F-förmigen Muster
   <https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/>`_
   sollte das Wichtigste oben auf der Seite und anschließend die verbleibenden
   Elemente platziert werden, wobei mit den weniger wichtigen Informationen
   abgeschlossen werden sollte.

#. Reduzieren

   Unwesentliche Informationen sollten nicht dargestellt werden. Entwerft ein
   Dashboard so, dass die Komplexität einer Seite so gering wie nötig ist, indem
   ihr alles entfernt, was von der Interpretation der wesentlichen Informationen
   ablenken könnte.

#. Vereinheitlichen

   Verwendet für jeden Datensatz in einem Dashboard immer einheitliche Farben.

#. Gliedern

   Unterschiedliche Leerräume trennen oder verbinden Elemente, wodurch die
   User durch ein Dashboard geführt werden.

    «Layout on a Web page (…) may not measurably influence performance,
    but it does influence satisfaction.»[#]_

.. [#] (Chaparro, B. S., Shaikh, A. D., and Baker, J. R. (2005). «Reading Online
   Text with a Poor Layout: Is Performance Worse?» Usability News, 7.

.. _operations-dashboards:

Operations-Dashboards
---------------------

Operations-Dashboards sind darauf ausgelegt, eine vordefinierte Reihe von Fragen
zu beantworten. Sie werden in der Regel zur Durchführung von
Überwachungsaufgaben eingesetzt.

In den meisten Fällen enthalten diese Arten von Dashboards aktuelle
Informationen, die in einer Reihe einfacher Diagramme dargestellt werden.
Anwendungsfälle sind unter anderem:

* die Verfolgung des aktuellen Fortschritts im Hinblick auf ein Ziel
* die Verfolgung der Systemleistung in Echtzeit
