Schreibstil
===========

Das Schreiben sollte immer einfach, klar und leicht verständlich sein. Die
Verwendung der Alltagssprache ist im Ton freundlich, menschlich und einladend.
Bevorzugt kurze Wörter vor langen, einschüchternd wirkenden Worten.

Groß-/Kleinschreibung
---------------------

Verwendet Groß-/Kleinschreibung für alle Textelemente der Bedienoberfläche.
Dieser Stil verwendet überwiegend Kleinbuchstaben. Lediglich der
Anfangsbuchstabe des ersten Wortes im Text oder andere Worte, die
großgeschrieben werden müssen, wie Eigennamen.

Das cusy-Design-System unterstützt kein Konzept *wichtiger* oder *besonderer*
Wörter, da diese Bedeutung höchst subjektiv ist und schnell zu Inkonsistenzen
innerhalb einer Organisation führen kann. Eine Ausnahme hiervon bilden
markenrechtlich geschützte Namen.

Versalien oder Kapitälchen
~~~~~~~~~~~~~~~~~~~~~~~~~~

Texte, die nur in Großbuchstaben oder Kapitälchen geschrieben sind, lassen sich
sehr viel schwerer lesen als die Groß-/Kleinschreibung. Außerdem können
Eigennamen und Substantive schwerer unterschieden werden.

Großbuchstaben
~~~~~~~~~~~~~~

Großbuchstaben sollten verwendet werden

* wenn das Wort einen Satz oder eine Phrase beginnt
* bei Namen, :abbr:`z.B. (zum Beispiel)` *cusy Design-System*
* bei Initialismen wie :abbr:`z.B. (zum Beispiel)` BBC, HTML oder Akronymen wie
  :abbr:`NASA (National Aeronautics and Space Administration)`
* bei Verweisen auf Label der Bedienoberfläche, die selbst großgeschrieben
  werden.

.. note::
   Manchmal verwenden offizielle Firmen- und Produktnamen jedoch unübliche
   Groß-/Kleinschreibung. Wenn ihr euch auf sie beziehen wollt, solltet ihr die
   Schreibweise beibehalten, also :abbr:`z.B. (zum Beispiel)` bei *GitHub* und
   *iOS*.

.. note::
   Mehrere Wörter eines Hashtags sollten mit Großbuchstaben gekennzeichnet
   werden, also :abbr:`z.B. (zum Beispiel)` ``#EinfacheSprache``.

Einfaches Schreiben
-------------------

Verwendet einfache Wörter und Sätze
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. vale off

* Verwendet den einfachsten Begriff, der für das Publikum geeignet ist.
  Verwendet beispielsweise *groß* statt *voluminös* und *klein* anstelle von
  *Diminutiv*.
* Seit prägnant und haltet die Sätze so kurz und einfach wie möglich. Lasst
  wortreiche oder überflüssige Sätze weg.
* Ermöglicht die Dinge schnell und einfach lesen zu können. Beschränkt euch auf
  so wenige Wörter wie möglich, aber seid nicht zu knapp.
* Vermeidet Höflichkeitsformen wie *Bitte* und *Danke* in der Bedienoberfläche,
  da sie in manchen kulturellen Kontexten unangemessen oder beleidigend sein
  könnten.

.. vale on

.. note::
   Erstellt eine Liste mit Wörtern für euer Thema, die sowohl bevorzugte wie auch nicht zu
   verwendende Wörter enthält. Dieses einfache Werkzeug kann im Laufe der Zeit zur
   Konsistenz beitragen, insbesondere wenn mehrere Personen zu diesem Thema schreiben.

Verwendet die einfache Gegenwartsform
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Verwendet einfache Verben und Zeitformen und haltet die Sätze prägnant, einfach,
freundlich und ausdrucksvoll. Konzentriert euch auf den Kontext des Publikums
und macht die Inhalte relevant.

Wenn ihr Vergangenheits- oder Zukunftsformen verwenden müsst, vermeidet
Verbformen mit den Wörtern *haben*, *hat*, *hatte*, *gewesen*, *sollten*,
*würden* und *werden*.

Konversationsstil
-----------------

Um den passenden Ton zu finden, hilft die Vorstellung, dass mit der Software wie
bei einem Gespräch interagiert wird. Das Zusammenspiel von Text, Bildern und
Interaktionen bildet die abwechslungsreiche Konversation mit der Software.

Die Konversationsebene wird bestimmt durch die Aufgabe, die das Publikum zu
einem bestimmten Zeitpunkt ausführt. Die meisten Konversationen durchlaufen
dabei die Phasen *Entdecken*, *Ausprobieren* und *Fixieren*.

Unabhängig von der Gesprächsebene sollte das Schreiben immer einfach, klar und
leicht verständlich sein. Haltet den Ton freundlich, menschlich und einladend.
Verwendet Alltagssprache, keinen Jargon.

Formaler versus lässiger Ton
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Während bei Geschäftskorrespondenz häufig ein formellerer Ton angebracht ist,
wird bei technischen Dokumentationen und User Interfaces häufig ein lockerer Ton
erwartet.

* Kontraktionen können verwendet werden, wenn sie zum Kontext passen und den
  Lesefluss verbessern.
* Sätze können mit *Und*, *Aber* oder *So* beginnen wenn hierdurch kürzere,
  prägnantere Sätze möglich sind. Diese Möglichkeit sollte jedoch nicht
  überbeansprucht werden.
* Verwendet Ausrufezeichen nur positiv, nicht negativ. Stellt sicher, dass ihr
  nicht mehr als ein Ausrufezeichen im Kontext verwendet.

Inklusive Sprache
-----------------

cusy setzt sich für die Verwendung einer Sprache ein, die rassistische,
kulturelle oder geschlechtsspezifische Vorurteile beseitigt.

Vermeidet Analogien, Gleichnisse und Metaphern, die stark von Demographie,
Geographie, Religion oder Kultur abhängig sind.

.. seealso::
   * `macht.sprache. <https://www.machtsprache.de/>`_

Geschlechtergerechte Sprache
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. vale off

Bevorzugt Begriffe, die eine geschlechtergerechte Sprache ermöglichen, also
:abbr:`z.B. (zum Beispiel)` *Person* anstatt *Benutzer*.

.. vale on

.. seealso::
   * `Das Genderwörterbuch <https://geschicktgendern.de/>`_.

Akronyme
~~~~~~~~

Nicht geläufige Akronyme sollten vollständig erläutert werden bevor sie das erste Mal
verwendet werden. Zudem sollten sie durch das ``abbr``-Tag gekennzeichnet sein,
:abbr:`z.B. (zum Beispiel)`:

    Das User Interface (:abbr:`UI (User Interface)`) erlaubt die vollständige
    Bedienung über Tastatureingaben.

.. note::
   In unserem Dokumentationssystem :doc:`sphinx:index` könnt ihr diesen Tag mit
   der ``:abbr:``-Rolle hinzufügen.

Links
~~~~~

Links sollten Kontext für die Inhalte bieten, auf die sie verweisen. Vermeidet mehrdeutige
Inhalte wie *hier klicken*.

Anmaßende Aussagen
~~~~~~~~~~~~~~~~~~

Vermeidet wertende Begriffe wie *nur*, *einfach*, *offensichtlich* :abbr:`usw
(und so weiter)`.

.. _`ableistische-sprache`:

Ableistische Sprache
~~~~~~~~~~~~~~~~~~~~

Die Diskriminierung von Menschen mit Behinderungen wird als Ableismus (englisch
Ableism) bezeichnet. Personen dürfen nicht auf ihre Beeinträchtigung reduziert
werden; auch Vorstellungen von Minderwertigkeit sind genausowenig akzeptabel wie
Grenzüberschreitungen, Einschränkungen der Autonomie und Ausschluss.

.. seealso::
   * `Autistic Hoya: Ableism/Language
     <https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html>`_
   * `Guidelines for Writing About People With Disabilities
     <https://adata.org/factsheet/ADANN-writing>`_
   * `Choosing Words for Talking About Disability
     <https://www.apa.org/pi/disability/resources/choosing-words>`_
   * `Introduction to Disability Terminology
     <http://disabilityinkidlit.com/2016/07/08/introduction-to-disability-terminology/>`_

Zeichensetzung
--------------

* Schreibt vollständige Sätze.
* Verwendet Ausrufezeichen sparsam.
* Vermeidet rhetorische Fragen.
* Vermeidet nachfolgende Gedanken.
* Versucht so wenig wie möglich Kommas, Bindestriche und Semikolons zu
  verwenden, da diese das Verständnis des Satzes erschweren.
* Vermeidet Klammern in Sätzen.

Pronomen
--------

Verwendet so oft wie möglich die freundliche und engagierte zweite Person
(*ihr*, *euer* :abbr:`etc. (etcetera)`) um euer Publikum zu adressieren.

Die erste Person kann in Überschriften oder Label verwendet werden, die
spezifisch für die betreffende Person sind, :abbr:`z.B. (zum Beispiel)` *Mein
Konto* oder *Meine Einstellungen*. Wechselt jedoch im erklärenden Text wieder
zur zweiten Person, :abbr:`z.B. (zum Beispiel)` *eure Nutzung wird am Ende des
Monats berechnet*.

.. vale off

Vermeidet geschlechtsspezifische Pronomen in der dritten Person.

.. vale on

.. _aktiv-und-passiv:

Aktiv und Passiv
----------------

Aktivsätze sind direkt und betonen das Thema. So enthält der Satz *Als Nächstes konfiguriert ihr eure Einstellungen* sehr viel direkter und auffordernder als
*Als nächstes können die Einstellungen konfiguriert werden*.

Der Passivsatz dreht die Konstruktion so um, dass das Subjekt dem Verb und dem
Objekt untergeordnet ist. In bestimmten Anwendungsfällen kann jedoch das Passiv
natürlicher erscheinen, :abbr:`z.B. (zum Beispiel)` *Dies startet die
Datenbankverbindung neu*.

Leseniveau überprüfen
---------------------

Versucht, das Leseniveau der siebten Klasse nicht zu überschreiten. Vermeidet
unnötigen Jargon und ähnliche Metaphern. Mit dem `Lesbarkeitsindex
<https://www.psychometrica.de/lix.html>`_ oder für die englische Sprache mit der
`Hemingway App <https://hemingwayapp.com/>`_ könnt ihr berechnen, wie komplex
euer Text ist.
