UI-Elemente und Interaktionen
=============================

Konzentriert Euch auf die Aufgabe
---------------------------------

Wenn es sinnvoll ist, solltet Ihr Anweisungen in Bezug auf das formulieren, was
Ihr erreichen wollt. Indem Ihr den Verweis auf UI-Elemente vermeidet, helft Ihr,
den Zweck einer Anweisung zu verstehen, und tragt dazu bei, Abläufe
effektiver zu machen.

Allerdings solltet Ihr die Zielgruppe kennen und den Kontext verstehen. Zudem
kann es auch sinnvoll sein, zunächst alle Elemente einer Seite vorzustellen.

* 👍 Klickt auf :guilabel:`Aktualisieren`
* 👎 Klickt auf die Schaltfläche  :guilabel:`Aktualisieren`
* 👎 Wählt :guilabel:`Erweiterte Optionen`
* 👍 Wählt :menuselection:`Einstellungen --> Erweiterte Optionen`

Formatieren von UI-Elementen
----------------------------

Wenn Ihr auf den Namen eines beliebigen UI-Elements verweisen wollt, setzt den
Namen in serifenloser Schrift. Dazu gehören Namen für Schaltflächen, Menüs,
Dialoge, Fenster, Listenelemente oder jede andere Funktion auf der Seite, die
einen sichtbaren Namen hat. Verwendet keine Code-Schrift für UI-Elemente, es sei
denn, es handelt sich um ein Element, das die Anforderungen für Code erfüllt.

Folgt in den meisten Fällen der Groß- und Kleinschreibung, wie sie auch auf der
Seite erscheint. Wenn die Beschriftungen jedoch inkonsistent sind oder nur in
Großbuchstaben geschrieben werden, verwendet die übliche Schreibweise im Satz.
Verwendet UI-Elemente jedoch nicht so, als wären sie Verben oder Substantive im
Satz.

* 👍 Aktiviert im Fenster :guilabel:`Neues Projekt` das Kontrollkästchen
  :guilabel:`Neue Aktivität` und klickt dann auf :guilabel:`Weiter`
* 👎 Aktiviert im Fenster »Neues Projekt« das Kontrollkästchen »Neue Aktivität«
  und klickt dann auf die Schaltfläche »Weiter«
* 👍 Klickt auf :guilabel:`⟳ Aktualisieren`
* 👎 Klickt auf :guilabel:`AKTUALISIEREN`
* 👍 Gebt im Feld :guilabel:`Name` einen Kontonamen ein
* 👎 Gebt den :guilabel:`Namen` für das Konto ein
* 👍 Um die Einstellungen zu speichern, klickt auf :guilabel:`Speichern`
* 👎 :guilabel:`Speichern` Sie die Einstellungen
* 👍 Gebt im Feld :guilabel:`Servicekonto-ID` einen Namen ein
* 👎 Gebt eine :guilabel:`Servicekonto-ID` ein
* 👍 Gebt für :guilabel:`Servicekonto-ID` einen Namen an

Sphinx
------

.. rst:role:: guilabel

   Label, die als Teil einer interaktiven Benutzeroberfläche dargestellt werden,
   sollten mit :rst:role:`guilabel` gekennzeichnet werden. Jede in der
   Oberfläche verwendete Beschriftung sollte mit dieser Rolle gekennzeichnet
   werden, einschließlich Beschriftung von Schaltflächen, Fenstertiteln,
   Feldnamen, Menü- und Menüauswahlnamen und sogar Werte in Auswahllisten.

   Ein Tastenkürzel für die GUI-Beschriftung kann mit einem et-Zeichen (&)
   eingefügt werden; dieses führt in der Ausgabe zur Unterstreichung des
   Folgebuchstabens. (Beispiel: ``:guilabel:`&Cancel```). Wenn Ihr ein
   et-Zeichen einfügen wollt, könnt Ihr es einfach verdoppeln.

.. rst:role:: kbd

   Dies stellt eine Folge von Tasteneingaben dar. Welche Form die Tastenfolge
   hat, kann von plattform- oder anwendungsspezifischen Konventionen abhängen.
   Wenn es keine entsprechenden Konventionen gibt, sollten die Namen von
   Modifikatortasten ausgeschrieben werden, um die Zugänglichkeit zu verbessern.
   Zum Beispiel kann eine Tastenfolge mit :kbd:`Ctrl-s` bezeichnet werden, damit
   nicht auf eine bestimmte Tastaturbeschriftung referenziert wird.

.. rst:role:: menuselection

    Eine Menüauswahl sollte mit der Rolle ``menuselection`` markiert werden.
    Diese wird verwendet, um eine komplette Sequenz zu markieren, einschließlich
    der Auswahl von Untermenüs und der Auswahl bestimmter Operationein oder
    beliebiger Untersequenzen. Die Namen der einzelnen Auswahlen sollten durch
    ``-->`` getrennt werden.

   So nutzt z.B. :menuselection:`View --> Cell Toolbar --> Slideshow` folgende
   Auszeichnung::

    :menuselection:`View --> Cell Toolbar --> Slideshow`

   Wenn eine Menüauswahl :abbr:`z.B. (zum Beispiel)` mit einer Ellipse
   (:samp:`…`) anzeigt, dass die Auswahl ein Dialogfeld öffnet, sollte dieser
   Indikator in der Menüauswahl weggelassen werden.

   :rst:role:`menuselection` unterstützt genau wie :rst:role:`guilabel` auch
   Tastaturkürzel mit einem et-Zeichen (&).
