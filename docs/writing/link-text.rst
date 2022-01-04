Links
=====

Um Linktext zu schreiben, verwendet beschreibende Phrasen, die Kontext für den
Inhalt liefert, auf den ihr verlinkt.

Personen, die euren Text lesen, erleben die Links unterschiedlich. Einige
springen von einem Link zum nächsten um relevante Quellen zu finden ohne jedoch
den Text zwischen den Links zu lesen; andere erwarten, dass der Link vorher im
Text beschrieben wird. Effektiver Link-Text hilft, die Zugänglichkeit und
Lesbarkeit zu verbessern.

Linktext strukturieren
----------------------

Um effektiven Linktext zu schreiben, verwendet eine der folgenden Formen:

* Sorgt dafür, dass der Linktext genau dem Text des Titels entspricht, auf den
  er verweist.

  * ✅ Weitere Informationen findet ihr unter :doc:`Schreibstil <writing-style>`.

  Informationen zur Großschreibung solcher Verweise findet ihr unter
  Großschreibung in Verweisen auf Titel und Überschriften.

* Beschreibt die Zielseite im Linktext so, als ob sie Teil des Satzes wäre.

  * ✅ Ihr könnt :ref:`vale` verwenden um eure Dokumentation automatisch
    überprüfen zu lassen.

Manchmal müsst ihr einen Satz überarbeiten, um eine Phrase einzuschließen, die
einen guten Link-Text ergibt.

Schreiben von Linktext
----------------------

Wendet die folgenden Richtlinien an, wenn ihr Linktext schreiben:

* Wenn ihr einen vollständigen Satz schreibt, der euer Publikum auf ein anderes
  Thema verweist, leitet den Link mit der Phrase *Für weitere Informationen*,
  *siehe* oder *Für weitere Informationen über …, siehe* ein.

* Schreibt eindeutigen, beschreibenden Linktext, der ohne den umgebenden Text
  Sinn ergibt. Verwendet keine Phrasen wie *hier klicken* oder *dieses
  Dokument*; sie erschweren die Zugänglichkeit.

Interpunktion bei Links
-----------------------

Wenn ihr eine Interpunktion unmittelbar vor oder nach einem Link habt, setzt die
Interpunktion nach Möglichkeit außerhalb der Link-Tags.

Gestaltung von Linktext
-----------------------

Wendet die übliche Gestaltung auf Linktext an; dies hilft eurem Publikum, Links
in eurem Inhalt zu finden.

Kontrastiert die Farbe des Linktextes mit der Farbe des normalen Textes. Um eurem
Publikum das Erkennen von Links zu erleichtern, sollte sich der Linktext vom
restlichen Text auf der Seite abheben.

Unterstreicht Link-Text. Die horizontale Linie zeigt sehr klar an, wo ein Link endet
und der nächste beginnt. Dies erleichtert das Scannen der Website und hilft,
Links zu finden.

Besuchte Links sollten die Farbe wechseln. Verwendet farbenblind-freundliche
Farbwechsel, um Links, denen bereits gefolgt wurde, von noch nicht besuchten
Links zu unterscheiden. Dies erleichtert eurem Publikum, effektiv durch eure
Website zu navigieren, ohne dass es Inhalte, die es bereits gelesen hat, erneut
aufrufen zu müssen.

Verhalten von Links
-------------------

Ihr könnt Angaben machen, ob ein Link in einem neuen Fenster geöffnet werden
soll oder nicht. Personen, die euren Text lesen, werden das jeweilige
Standardverhalten ihres Browsers erwarten. Wenn ihr also festlegen wollt, dass
ein Link in einem neuen Fenster oder Tab geöffnet werden woll, solltet ihr
zumindest vorher auf dieses Verhalten hinweisen, :abbr:`z.B. (zum Beispiel)` mit
einem nachfolgenden Icon:

.. raw:: html

    <a href="https://material.io/design/usability/accessibility.html" target="_blank">implementing accessibility<span aria-hidden="true" class="v-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" style="font-size: 0.875rem; height: 0.875rem; width: 0.875rem;"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path></svg></span></a>

Links zu E-Mail-Adressen oder Telefonnummern
--------------------------------------------

Beim Klicken auf einen E-Mail-Link öffnet sich der E-Mail-Client der jeweiligen
Person, damit diese sofort eine E-Mail schreiben kann. Hierfür könnt Ihr statt
einer Webadresse :abbr:`z.B. (zum Beispiel)` einfach ``mailto:info@cusy.io``
verwenden. Auch Betreff, CC, BCC und Haupttext können in einem solchen Link
angegeben werden:

.. code-block:: html

    <a href="mailto:info@cusy.io?cc=info@cusy.io, support@cusy.io&subject=Cusy%20Support&body=Hier%20kann%der%20Haupttext%20stehen">
    Schreibt uns!
    </a>

Ein Link kann auch automatisch eine Telefonnummer wählen, :abbr:`z.B. (zum
Beispiel)` `+49 30 22430082 <tel:+493022430082>`_.

.. code-block:: html

    tel:+493022430082

Links zu  Dateien
-----------------

* ❌ `WebAIM Quick Reference
  <https://webaim.org/resources/quickref/quickref.pdf>`_
* ✅ `WebAIM Quick Reference (PDF, 327 KB)
  <https://webaim.org/resources/quickref/quickref.pdf>`_

Der erste Link sieht aus wie ein normaler Link, und diejenige Person, die auf
den Link klickt, wird vermutlich erwarten, dass eine neue Seite im Browser
geöffnet wird. Der zweite Link informiert vorab, dass es sich beim Linkziel um
eine PDF-Datei handelt und über die Dateigröße dieses PDF. Das Verhalten ist im
zweiten Fall sehr viel weniger überraschend.
