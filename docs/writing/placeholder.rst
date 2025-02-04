Platzhalter
===========

In diesem Abschnitt wird erklärt, wie Platzhaltervariablen in Befehlen und
Codebeispielen formatiert werden soll.

Platzhalter in Beispielcode und Befehlen stellen Werte dar, die beim
Verwenden des Codes ersetzt werden müssen. Platzhalter in Beispielausgaben
können die Werte auch variieren. Im Allgemeinen hat ein Platzhalter einen
beschreibenden Namen als Standardwert.

Der Platzhalter :samp:`PROJECT_{ID}` steht für eine beispielhafte
Projektbezeichnung, die mit ``PROJECT_`` beginnt, gefolgt von einer
variablen ID.

Beim Platzhalter :samp:`{HTTP_RESPONSE_CODE}` wird signalisiert, dass ein
HTTP-Antwortcode zwischen ``100`` und ``599`` erwartet wird.

Text für Platzhaltervariablen
-----------------------------

* Verwendet Großbuchstaben mit Unterstrich als Trennzeichen.

  * ✅ :file:`https://cusy.io/{LANGUAGE_CODE}/`
  * ❌ :file:`https://cusy.io/LANGUAGE_CODE/`
  * ❌ :file:`https://cusy.io/{language-code}/`
  * ❌ :file:`https://cusy.io/{LanguageCode}/`

* Wenn der Kontext, in dem ihr Platzhaltervariablen verwenden wollt,
  Großbuchstaben und Unterstriche missverständlich sein können, dann verwendet
  etwas anderes, aber seid intern konsistent.

* Verwendet keine Possessivpronomen in Platzhaltern.

  * ❌ :file:`https://cusy.io/{MY_LANGUAGE}/`
  * ❌ :file:`https://cusy.io/{YOUR_LANGUAGE}/`

Erläutert Platzhalter
---------------------

Wenn ihr einen Platzhalter in Text oder Code verwendet, fügt bei der ersten
Verwendung eine Erklärung für den Platzhalter ein. Wenn nach der Verwendung
dieses Platzhalters noch weitere Schritte und andere Platzhalter folgen, könnt
ihr sie auch alle auf einmal erklären.

Verwendet bei Prozeduren die folgende Reihenfolge:

#. Erklärt, was gemacht werden soll
#. Nennt den Befehl
#. Erläutert den Platzhalter
#. Erläutert den Befehl bei Bedarf ausführlicher
#. Führt die Ausgabe auf, falls erforderlich
#. Erläutert ggf. die Ausgabe

* ✅

  #. Damit euch die Spack-Umgebung zur Verfügung steht, müsst ihr folgendes
     in die :file:`~/.bashrc` oder :file:`~/.profile` eingetragen:

     .. code-block:: console

        export SPACK_ROOT=~/spack
        . $SPACK_ROOT/share/spack/setup-env.sh

  #. :envvar:`SPACK_ROOT` gibt dabei den Pfad zu eurer Spack-Installation an.

     :envvar:`.` definiert den Pfad zur Datei :file:`setup-env.sh`, wodurch ihr
     zukünftig die Spack-Befehle direkt in eurer Konsole aufrufen könnt.

  #. Die geänderte Konfiguration wird nun übernommen mit ``source``,
     :abbr:`z.B. (zum Beispiel)` mit:

     .. code-block:: console

        $ source ~/.bashrc

  #. Schließlich könnt ihr eure Shell-Konfiguration überprüfen, :abbr:`z.B.
     (zum Beispiel)`:

     .. code-block:: console

        $ spack compiler find
        ==> Found no new compilers
        ==> Compilers are defined in the following files:
            /Users/veit/.spack/darwin/compilers.yaml

  #. ``spack`` konnte direkt im Pfad aufgerufen werden und auch die
     Direktive :samp:`compiler` war verfügbar. Damit sind die Pfadangaben in der
     Shell-Konfiguration richtig und wirksam.

.. seealso::
   * :doc:`python-basics:document/sphinx/placeholder`
