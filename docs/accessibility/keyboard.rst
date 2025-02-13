Tastaturzugriff
===============

Tastaturzugriffe sind hilfreich für Personen, die sich auf eine Tastatur
verlassen oder diese bevorzugen. Stellt sicher, dass alle interaktiven Inhalte
über Tastaturfunktionen verfügen. Zu den allgemeinen Tastaturinteraktionen
gehört die Verwendung der Tabulatortaste zum Auswählen verschiedener interaktiver
Elemente auf einer Seite und die Verwendung der Eingabe- oder Leertaste zum
Aktivieren eines fokussierten Elements.

.. seealso::
   * `IBM Checkpoint 2.1.1 Keyboard
     <https://www.ibm.com/able/requirements/requirements/?version=7_1#2_1_1>`_

Fokusindikatoren
----------------

Die Tabulatortaste soll durch alle interaktiven Elemente auf einer Seite navigieren
und zwar in der Reihenfolge, in der sie im HTML-Dokument angezeigt werden. Eine
standardmäßige visuelle Anzeige wird vom verwendeten Webbrowser bereitgestellt.
Zur Anzeige wird ein Rand um das fokussierte Element verwendet.

.. seealso::
    * `IBM Checkpoint 2.4.7 Focus Visible
      <https://carbondesignsystem.com/guidelines/accessibility/keyboard/>`_

Navigationsreihenfolge
----------------------

Die Reihenfolge, in der interaktive Elemente den Fokus erhalten, sollte logisch
und vorhersehbar sein. Ein allgemeiner Ablauf kann mit der Kopfzeile beginnen,
gefolgt von der Hauptnavigation, der Inhaltsnavigation (von links nach rechts
und von oben nach unten) und mit der Fußzeile enden. Versucht, allen Personen
die gleiche Erfahrung zu bieten.

Verwendet einfach zugängliche Elemente in der Navigation, um Links,
Schaltflächen und Formularsteuerelemente mit einer Tastatur zu aktivieren.
Verstärkt semantisches HTML, um Absicht und Bedeutung zu vermitteln, anstatt nur
das Erscheinungsbild eines Elements zu definieren. Erweitert bei Bedarf die
Elemente um `aria-label
<https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label>`_-Attribute.

.. note::
   Fügt keine nicht-interaktiven Elemente in die Tabulatorreihenfolge ein.
   Vermeidet auch mehrfach aufeinanderfolgende Links zum selben Ziel, indem ihr
   einige :abbr:`ggf. (gegebenenfalls)` aus der Tastaturreihenfolge ausnehmt mit

   .. code-block:: html

        tabindex = "-1"

.. seealso::
   * `WCAG success criterion: Focus Order
     <https://www.w3.org/WAI/WCAG21/Understanding/focus-order>`_
   * `Optimizing keyboard navigation using tabindex and ARIA
     <https://www.sarasoueidan.com/blog/keyboard-friendlier-article-listings/>`_
   * `IBM Checkpoint 2.4.3 Focus Order
     <https://www.ibm.com/able/requirements/requirements/?version=7_1#2_4_3>`_

ARIA-Landmarks
--------------

Kommuniziert den Personen mit Screen-Reader die verschiedenen Bereiche des
Bildschirms und eure Vorgehensweise mit ARIA-Landmarks und mithilfe geeigneter
HTML5-Label. Personen mit Screen-Reader können dann schnell zu einem
beliebigen Bereich springen.

.. seealso::
   * `IBM Checkpoint 1.3.1 Info and Relationships
     <https://www.ibm.com/able/requirements/requirements/?version=7_1#1_3_1>`_
