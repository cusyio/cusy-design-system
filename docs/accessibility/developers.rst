Bewährte Praktiken für HTML, CSS und SVG
========================================

Code und Navigation strukturieren
---------------------------------

Denkt bei der Strukturierung eurer Inhalte an die Code-Hierarchie, damit
Screen Reader und Personen, die nur über die Tastatur verfügen, über Tabulatoren
in einer logischen und vorhersehbaren Reihenfolge auf interaktive Elemente
zugreifen können. Beginnt mit der Kopfzeile, gefolgt von der Hauptnavigation,
dann der Seitennavigation (von links nach rechts und von oben nach unten) und
enden Sie mit der Fußzeile. Ziel ist es, Personen über die Tastatur eine
vergleichbare Benutzung zu ermöglichen wie Personen, die eine Maus benutzen.

Semantisches HTML
-----------------

Verwendet native HTML-Elemente so oft wie möglich und verwendet sie für den
richtigen Zweck. Diese Elemente bieten integrierte Vorteile für die
Barrierefreiheit. Sie informieren Personen mit Screen-Reader darüber, wo sie
sind und welche Interaktionen ihnen in diesem Kontext zur Verfügung stehen.
Abgesehen von einer erhöhten Zugänglichkeit werden die Seiten auch einfacher zu
entwickeln und zu warten sein, besser auf Mobilgeräten funktionieren und die
Suchmaschinenoptimierung verbessern.

.. code-block:: html

     <body>
        <header>
          <nav>
            <ul>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
            </ul>
          </nav>
          <h1>
            Page Title
          </h1>
        </header>

        <section>
          <h2>
            My Blog Posts
          </h2>
          <article>
            <header>
              <p>
                Article Title
              </p>
            </header>
            <p>
              content
            </p>
          </article>
          <article>
            <header>
              <p>
                Article Title
              </p>
            </header>
            <p>
              content
            </p>
          </article>
          <aside>
            <p>
              Author info
            </p>
          </aside>
        </section>

        <footer>
          Copyright Info
        </footer>
      </body>

Klare Sprache
-------------

Berücksichtigt beim Hinzufügen von Inhalten kognitive Einschränkungen,
Personen, deren Muttersprache nicht die Sprache ist, in der Ihre Inhalte
geschrieben sind und Personen, die sich die Inhalte mit einem Screen-Reader
erschließen. Vermeidet nach Möglichkeit Bindestriche, Abkürzungen, Akronyme
(zumindest beim ersten Mal) und Tabellenlayouts, wenn keine Tabelleninhalte
vorhanden sind. Verwendet bei Abkürzungen das native ``<abbr/>``-Element mit dem
``title``-Attribut.

.. code:: html

    <abbr title="HyperText Markup Language">HTML</abbr>

In Sphinx könnt Ihr dies erreichen mit der ``abbr``-Rolle::

    :abbr:`HTML (HyperText Markup Language)`

Aussagekräftige Textbeschriftungen
----------------------------------

Berücksichtigt beim Beschriften von Elementen sehbehinderte Personen und stellt
sicher, dass für Screen-Reader ein Textkontext vorhanden ist.

.. code-block:: html

    <div role="form" id="contact-info" aria-label="Contact information">
      <!-- content of the contact form -->
    </div>

Zugängliche Tabellen
--------------------

* Gebt Tabellenüberschriften immer mit ``<th/>``-Elementen an und stellt sicher,
  dass sie herausragen.
* Verwendet bei Bedarf das Attribut ``scope`` um anzugeben, ob es sich um
  Überschriften für Zeilen oder Spalten handelt.
* Verwendet alternativen Text zusammen mit Tabellen für sehbehinderte Benutzer.
* Für die Beschreibung der Tabelle wird ``<caption/>`` bevorzugt, aber
  ``<table summary=""/>`` funktioniert auch.

  In reStructuredText könnt ihr die ``table``-Direktive verwenden, :abbr:`z.B.
  (zum Beispiel)`::

    .. table:: Tabellentitel

       +-------+-------+
       …

  oder::

    .. csv-table:: Tabellentitel

  oder::

    .. list-table:: Tabellentitel

  Dies führt zu folgendem HTML:

  .. code-block:: html

    <table class="docutils align-default" id="id1">
        <caption>
            <span class="caption-text">
                Tabellentitel
            </span>
            <a class="headerlink" href="#id1" title="Link zu dieser Tabelle">
                ¶
            </a>
        </caption>
        …
    </table>

Unterscheiden zwischen Mäusen und Touchscreens
----------------------------------------------

Ihr könnt die Gestaltung von Links, Tasten :abbr:`etc. (etcetera)` einfach mit
der `hover <https://www.w3.org/TR/mediaqueries-5/#hover>`_-Funktion variieren,
je nachdem ob euer Publikum eine Maus oder einen Touchscreen verwendet. Dies
funktioniert in den meisten aktuellen Browsern gut, bei einigen
Android-Versionen emuliert langes Drücken jedoch *Hover*, sodass die
Medienabfrage ``hover: hover`` wahr bewertet wird. Daher sollte auch noch eine
zweite Abfrage nach ``pointer: fine`` erfolgen:

.. code-block:: css

    .some-component {
      /* Stil für Touchscreens, einschließlich Android-Geräte */
    }

    @media (hover: hover) and (pointer: fine) {
      .some-component {
        /* Stil für Mäuse und ähnliche Geräte */
      }
    }

.. seealso::
   * `Media features
     <https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features>`_
   * `Detecting Hover-Capable Devices
     <https://css-irl.info/detecting-hover-capable-devices/>`_

Zugängliche Datenvisualisierungen
---------------------------------

Es ist wichtig, sehbehinderte Personen bei der Einbeziehung von
Datenvisualisierungen zu berücksichtigen. Datentabellen können dabei eine
Alternative zu den Datenvisualisierungen für Screen-Reader sein. Auch die
Farbauswahl für farbenblinde Personen ist zu berücksichtigen.

.. seealso::
   * `Case Study: Implementing Accessible Data Charts for the Khan Academy 2018
     Annual Report
     <https://www.sarasoueidan.com/blog/accessible-data-charts-for-khan-academy-2018-annual-report/>`_
   * `Accessible SVG line graphs <https://tink.uk/accessible-svg-line-graphs/>`_
   * `Accessible SVG flowcharts <https://tink.uk/accessible-svg-flowcharts/>`_

Multimedia-Textalternativen
---------------------------

Jedes Bild, das nicht dekorativ ist, sollte mit ``alt``-Text und einer
aussagekräftigen Beschreibung des Bildes sowie einem ``title``-Attribut versehen
sein. Ihr könnt auch `aria-labelledby
<https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute>`_
zusammen mit dem ``id``-Attribut verwenden.
Für dekorative Bilder solltet ihr ein leeres ``alt``-Attribut verwenden, da
andernfalls der Screen-Reader die gesamte Bild-URL liest.

Audio-Alternativen
------------------

Stellt Videos mit Untertiteln oder Transkriptionen in Audiodateien bereit:

.. code-block:: html

    <video controls>
      <source src="example.mp4" type="video/mp4" />
      <source src="example.webm" type="video/webm" />
      <track kind="subtitles" src="example_subtitles.vtt" srclang="en" />
    </video>

Schriftsymbolbibliotheken
-------------------------

Wir sind bei der Verwendung von Schriftsymbolbibliotheken auf zwei verschiedene
Anwendungsfälle gestoßen, die ihr berücksichtigen solltet:

Dekorative Symbole
    werden nur zu dekorativen Zwecken verwendet. Wenn sie von der Seite entfernt
    würden, würden Personen Eure Seite weiterhin verstehen und verwenden
    können.

    In diesem Fall kann dem Element ein ``aria-hidden="true"``-Attribut
    hinzugefügt werden, :abbr:`z.B. (zum Beispiel)`:

    .. code-block:: html

        <i class="fas fa-camera-retro" aria-hidden="true"></i>

Semantische Symbole
    sind solche, mit denen bedeutendes vermittelt werden soll, :abbr:`z.B. (zum
    Beispiel)` für Button, Formularelemente :abbr:`etc. (etcetera)`

    Neben dem ``aria-hidden="true"``-Attribut sollten zwei weitere Ergänzungen
    hinzugefügt werden:
  
    * eine Textalternative :abbr:`z.B. (zum Beispiel)` in einem ``<span>``-Tag,
      das via CSS ausgeblendet wird.
    * ein ``title``- Attribut auf dem Symbol, um einen Tooltip für sehende
      Personen bereitzustellen.

    .. code-block:: html

        <i aria-hidden="true" class="fas fa-trash" title="Delete this item?"></i>
        <span class="sr-only">"Delete this item?</span>

    Alternativ kann SVG mit JavaScript verwendet werden mit. In diesem Fall wird
    durch das ``title``-Attribut folgende drei Elemente hinzugefügt:
    
    * ARIA-Rolle ``role="img"``
    * ``title``-Tag mit ``id``-Attribut
    * ``aria-labelledby``-Attribut

    Aus

    .. code-block:: html

        <i title="Magic is included!" class="fas fa-magic"></i>

    wird

    .. code-block:: html

         <svg title="Magic is included!" class="svg-inline--fa fa-magic fa-w-16" aria-labelledby="svg-inline--fa-title-1" data-fa-i2svg="" data-prefix="fas" data-icon="magic" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title id="svg-inline--fa-title-1">Magic is included!</title>
          <path fill="currentColor" d="M101.1 505L7 410.9c-9.4-9.4-9.4-24.6 0-33.9L377 7c9.4-9.4 24.6-9.4 33.9 0l94.1 94.1c9.4 9.4 9.4 24.6 0 33.9L135 505c-9.3 9.3-24.5 9.3-33.9 0zM304 159.2l48.8 48.8 89.9-89.9-48.8-48.8-89.9 89.9zM138.9 39.3l-11.7 23.8-26.2 3.8c-4.7.7-6.6 6.5-3.2 9.8l19 18.5-4.5 26.1c-.8 4.7 4.1 8.3 8.3 6.1L144 115l23.4 12.3c4.2 2.2 9.1-1.4 8.3-6.1l-4.5-26.1 19-18.5c3.4-3.3 1.5-9.1-3.2-9.8L160.8 63l-11.7-23.8c-2-4.1-8.1-4.1-10.2.1zm97.7-20.7l-7.8 15.8-17.5 2.6c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4L240 69l15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-3-5.4-3-6.8-.1zm-192 0l-7.8 15.8L19.3 37c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4L48 69l15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-3-5.4-3-6.8-.1zm416 223.5l-7.8 15.8-17.5 2.5c-3.1.5-4.4 4.3-2.1 6.5l12.6 12.3-3 17.4c-.5 3.1 2.8 5.5 5.6 4l15.6-8.2 15.6 8.2c2.8 1.5 6.1-.9 5.6-4l-3-17.4 12.6-12.3c2.3-2.2 1-6.1-2.1-6.5l-17.5-2.5-7.8-15.8c-1.4-2.8-5.4-2.8-6.8 0z"></path>
        </svg>

.. seealso::
    * `Font Awesome Accessibility
      <https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility>`_
