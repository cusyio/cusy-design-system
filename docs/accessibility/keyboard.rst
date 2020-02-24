Tastaturzugriff
===============

Tastaturzugriffe sind hilfreich für Benutzer*innen, die sich auf eine Tastatur
verlassen oder diese bevorzugen. Stellt sicher, dass alle interaktiven Inhalte
über Tastaturfunktionen verfügen. Zu den allgemeinen Tastaturinteraktionen
gehört die Verwendung der `tab`-Taste zum Auswählen verschiedener interaktiver
Elemente auf einer Seite und die Verwendung der `enter`-Taste oder `spacebar`
zum Aktivieren eines fokussierten Elements.

.. seealso::
   * `IBM Checkpoint 2.1.1 Keyboard
     <https://www.ibm.com/able/guidelines/ci162/keyboard.html>`_

Fokusindikatoren
----------------

Die `tab`-Taste soll durch alle interaktiven Elemente auf einer Seite navigieren
und zwar in der Reihenfolge, in der sie im HTML-Dokument angezeigt werden. Eine
standardmäßige visuelle Anzeige wird vom verwendeten Webbrowser bereitgestellt
Zur Anzeige wird ein Rand um das fokussierte Element verwendet.

.. seealso::
    * `IBM Checkpoint 2.4.7 Focus Visible
      <https://www.carbondesignsystem.com/guidelines/accessibility/keyboard/>`_

Navigationsreihenfolge
----------------------

Die Reihenfolge, in der interaktive Elemente den Fokus erhalten, sollte logisch
und vorhersehbar sein. Ein allgemeiner Ablauf kann mit der Kopfzeile beginnen,
gefolgt von der Hauptnavigation, der Inhaltsnavigation (von links nach rechts
und von oben nach unten) und mit der Fußzeile enden. Versucht, allen
Benutzer*innen die gleiche Erfahrung zu bieten.

Verwendet nativ zugängliche Elemente in der Navigation, um Links, Schaltflächen
und Formularsteuerelemente mit einer Tastatur zu aktivieren. Verstärkt
semantisches HTML, um Absicht und Bedeutung zu vermitteln, anstatt nur das
Erscheinungsbild eines Elements zu definieren. Erweitert bei Bedarf die Elemente
mit ARIA-Labels (Accessible Rich Internet Application).

.. seealso::
   * `IBM Checkpoint 2.4.3 Focus Order
     <https://www.ibm.com/able/guidelines/ci162/focus_order.html>`_

ARIA-Landmarks
--------------

Kommuniziert den Leser*Innen eines Scree-Reader die verschiedenen Bereiche des
Bildschirms und eure Vorgehensweise mit ARIA-Landmarks und mithilfe geeigneter
HTML5-Label. Benutzer*innen von Screen-Reader können dann schnell zu einem
beliebigen Bereich springen.

.. seealso::
   * `https://www.ibm.com/able/guidelines/ci162/info_and_relationships.html
     <https://www.ibm.com/able/guidelines/ci162/info_and_relationships.html>`_

