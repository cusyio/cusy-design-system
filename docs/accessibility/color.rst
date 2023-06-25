Farbe
=====

Einführung
----------

Die Komponenten des Cusy-Design-System wurden entwickelt, um das gesamte
Spektrum von Sehbehinderungen zu berücksichtigen. Beim Entwickeln des Systems
achten wir jedoch sorgfältig darauf, dass die Komponenten auch korrekt
verwendet werden.

Semantik
--------

hr könnt in HTML und SVG Farben mit `aria-label
<https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute>`_
semantisch auszeichnen, :abbr:`z.B. (zum Beispiel)`:

.. code-block:: xml

    <svg aria-label="red">
        <rect fill="#da1e28"/>
    </svg>

Farbkontrast
------------

Das Cusy-Design-System erfüllt die `WCAG AA-Standards
<https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html>`_
für die beiden Standard-Themes des Systems, einschließlich der
Farbkontrastverhältnisse.

Standardtext
~~~~~~~~~~~~

Standardtext und Textbilder müssen ein Kontrastverhältnis von mindestens 4,5:1
haben.

Großer Text
~~~~~~~~~~~

Großer Text (mindestens 24px normal und hell oder 19px halbfett) muss ein
Kontrastverhältnis von 3:1 haben.

Text vor nicht statischem-Hintergrund
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wenn Text auf einem Verlaufshintergrund oder Bild gerendert wird, muss
sichergestellt werden, dass die Textfarbe an allen Stellen, an denen sie
angezeigt wird, den Kontraststandards entspricht. Dies ist besonders
wichtig für Parallax-Anwendungen oder Animationen, bei denen sich Text und
Hintergrund unabhängig voneinander bewegen.

UI-Komponenten
~~~~~~~~~~~~~~

Visuelle Informationen, die zum Anzeigen von Zuständen und Grenzen von
UI-Komponenten verwendet werden, müssen ein Kontrastverhältnis von 3:1 zu
benachbarten Farben aufweisen. Dies schließt auch Formularelemente ein.

.. seealso::
   * `IBM Checkpoint 1.4.3 Contrast (Minimum)
     <https://www.ibm.com/able/requirements/requirements/?version=7_1#1_4_3>`_

Farbenblindheit
---------------

Farbenblindheit beinhaltet Schwierigkeiten beim Wahrnehmen oder Unterscheiden
zwischen Farben sowie die Empfindlichkeit gegenüber Farbhelligkeit. Es betrifft
ungefähr einen von zwölf Männern und eine von zweihundert Frauen weltweit.

+---------------------+------------------------------------------------------+
| Art                 | Farbenblindheit                                      |
+=====================+======================================================+
| Protanopie          | Rot-Grün                                             |
+---------------------+------------------------------------------------------+
| Tritanopie          | Blau                                                 |
+---------------------+------------------------------------------------------+
| Deuteranopie        | Grün                                                 |
+---------------------+------------------------------------------------------+
| Monochromie         | Alle Farben                                          |
+---------------------+------------------------------------------------------+

Entwerfen für Farbenblindheit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Verlasst euch nicht nur auf Farbe, um Bedeutung zu vermitteln. Von Bedeutung ist
sowohl

* Informationen übermitteln
* Aktionen anzeigen
* zum beantworten von Fragen auffordern
* oder zwischen visuellen Elementen zu unterscheiden.

Wenn Ihr mit Farbe entwerft, kann für Euch ein Simulator für Farbenblindheit
hilfreich sein, um die Sichtbarkeit von Inhalten zu überprüfen, wie :abbr:`z.B.
(zum Beispiel)` das `Stark <https://www.getstark.co/>`_-Plugin für Sketch.

.. figure:: color-accessibility-1.png
   :alt: Trichomatische und Dichomatische Simulationen der Regenbogenfarben

Sehschwäche
-----------

Sehschwächen können  teilweises Sehen eines oder beider Augen umfassen und von
leicht bis schwer reichen. Sie betreffen etwa 4% der Weltbevölkerung.


+---------------------+------------------------------------------------------+
| Art                 | Sehschwäche                                          |
+=====================+======================================================+
| Geringe Schärfe     |  Auch als *verschwommenes Sehen* bekannt. Kann das   |
|                     |  Lesen von Text erschweren, da er unscharf erscheint.|
+---------------------+------------------------------------------------------+
| Kontrastarme        |  Verminderte Fähigkeit, feine Details zu bestimmen   |
| Empfindlichkeit     |  und ein Objekt von einem anderen Rzu unterscheiden  |
+---------------------+------------------------------------------------------+
| Eingeschränktes     |  Die Sicht des Benutzers ist teilweise eingeschränkt.|
| Sichtfeld           |  Kann zentrales Sehen und fleckiges Sehen umfassen.  |
+---------------------+------------------------------------------------------+
| Retinitis           |  Auch als *Tunnelblick* bekannt, bei dem nur zentrale|
| pigmentosa          |  Elemente zu sehen sind.                             |
+---------------------+------------------------------------------------------+

.. figure:: color-accessibility-2.png
   :alt: Beispiel für verschwommenes Sehen und Tunnelblick

Entwerfen für Sehschwäche
~~~~~~~~~~~~~~~~~~~~~~~~~

Um ein Verständnis für die verschiedenen Sehschwächen zu erhalten, empfehlen wir
die Verwendung des `NoCoffee Vision Simulator
<https://github.com/eeejay/NoCoffee>`_ zur Vorschau von Websites. Ihr könnt ihn
auch direkt als `Firefox add-on
<https://addons.mozilla.org/en-US/firefox/addon/nocoffee/>`_ installieren.
Personen mit Sehschwächen verwenden möglicherweise einen Screen-Reader, um eine
Vorschau der Website anzuzeigen. Daher sollten unbedingt die
:doc:`Tastaturrichtlinien <keyboard>` befolgt werden, um sicherzustellen, dass
die Seite in einer logischen Reihenfolge vorgelesen wird.
