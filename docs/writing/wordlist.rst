Wortliste
=========

.. note::
   Dieses Dokument enthält Verweise auf Begriffe, die cusy als respektlos oder
   beleidigend betrachtet. Die Begriffe sind hier aufgeführt, um Hinweise
   zu alternativen Begriffe zu geben.

Wenn der Begriff, den ihr sucht, nicht auf dieser Seite zu finden ist, schaut
in :doc:`about` unter *Andere Redaktionsleitfäden*.

Wortliste
---------

#
~

.. glossary::

    Autonomous System Numbers
    ASN
        IANA hat für Autonomous System Numbers zwei Blöcke aufeinanderfolgender
        Nummern reserviert:

        * ``64496``–``64511`` für 16bit
        * ``65536``–``65551`` für 32bit

    ✅ 3D
        nicht ❌ 3-D

    Ethernet-Adressen
    MAC-Adressen
        In  :rfc:`7042` sind die Adressen festgelegt, die für die Dokumentation
        verwendet werden sollten, :abbr:`z. B. (zum Beispiel)`

        * ``00-00-5E-00-53-00 bis 00-00-5E-00-53-FF`` für Unicast EUI-48
        * ``01-00-5E-90-10-00 bis 01-00-5E-90-10-FF`` für Multicast EUI-48

        .. seealso::
           *  :rfc:`7042` für 64-bit Extended Unique Identifier (EUI-64)

    ❌ :samp:`1.2.3.4`
    IP-Adressen
        Verwendet in Beispielkonfigurationen keine öffentlich zugänglichen
        IP-Adressen, die ihr nicht selbst kontrollieren könnt. Verwendet
        stattdessen die in :rfc:`6890`, :rfc:`5737`, :rfc:`3849` und :rfc:`9637`
        dokumentierten IPv4- und IPv6-Bereiche:

        * ✅ ``192.0.2.0/24``
        * ✅ ``198.51.100.0/24``
        * ✅ ``203.0.113.0/24``
        * ✅ ``2001:db8::/32``

        .. seealso::
           * :term:`Domänennamen`.
           * :rfc:`6034` für IPv4 Multicast-Adressen
           * :rfc:`6676` für IPv6-Multicast-Dokumentationsadressen

    Telefonnummern
        Die Bundesnetzagentur stellt für Filme, Bücher und andere Medien
        :abbr:`sog. (sogenannte)` *Drama Numbers* zur Verfügung. Dies sind
        Rufnummern, denen dauerhaft keine Teilnehmenden zugeteilt sind, die
        beliebig angerufen und genehmigungsfrei *„in Medien gezeigt, abgedruckt
        und gesprochen verwendet werden können“*.

        .. seealso::
           * Bundesnetzagentur: `Nummerierung
             <https://www.bundesnetzagentur.de/DE/Fachthemen/Telekommunikation/Nummerierung/start.html#doc866026bodyText7>`_
           * `Rufnummern für Medienproduktionen („Drama Numbers“)
             <https://www.bundesnetzagentur.de/DE/Fachthemen/Telekommunikation/Nummerierung/_DL/mittlg148_2021.pdf?__blob=publicationFile&v=1>`_

Symbole
~~~~~~~

.. glossary::

    ⚠️ & (et-Zeichen)
        Verwendet *&* nicht anstelle von *und*  in Überschriften oder Texten;
        wenn ihr auf Elementen der Benutzeroberfläche oder in
        Tabellenüberschriften eine  Abkürzung verwenden wollt, dann nutzt *u.*;
        und natürlich kann das *&* auch in Quellcode verwendet werden.

A-Z
~~~

.. glossary::

    ❌ agnostisch
        solltet ihr nicht verwenden. Nutzt stattdessen präzisere Begriffe wie
        *plattformunabhängig*

    API
        verwendet das Akronym API erst, nachdem ihr den Begriff erläutert habt,
        nämlich (engl. **A**\pplication **P**\rogramming **I**\nterface) oder,
        noch besser, in einem ``<abbr>``-Tag: :abbr:`API
        (Programmierschnittstelle, engl. Application Programming Interface)`.

    Authentifizierung und Autorisierung
        solltet ihr nur verwenden, wenn *authentifiziert* sich auf Personen
        bezieht, und *autorisiert* nur, um sich auf Berechtigungen zu beziehen,
        die von einer Anwendung im Namen einer authentifizierten Person gesendet
        werden. Eine authentifizierte Person hat einen Identitätsnachweis
        erbracht, :abbr:`z.B. (zum Beispiel)` durch die Eingabe eines Passworts.

    best effort
        solltet ihr wenn möglich vermeiden; verwendet stattdessen spezifischere
        Formulierungen.

    Beta
        geschrieben mit Großbuchstaben am Anfang.

        * ✅ *PACKAGE_NAME* Beta
        * ✅ *PACKAGE_NAME* ist derzeit in der Beta-Phase.

    CLI
        verwendet das Akronym CLI erst, nachdem ihr den Begriff erläutert habt,
        nämlich (engl. **C**\ommand-**L**\ine **I**\nterface) oder, noch besser,
        in einem ``<abbr>``-Tag: :abbr:`CLI (Kommandozeile, engl. Command-line
        interface)`.


    ❌ cons
        Verwendet stattdessen *Nachteile*.

    ❌ erlauben
        solltet ihr nicht verwenden. Nutzt stattdessen *ermöglichen*

    ❌ Graylist
        siehe :term:`❌ Schwarze Liste, Blacklist, Black-List`

    Domänennamen
        Verwendet keine öffentlichen Domänennamen, die ihr nicht selbst
        kontrollieren könnt. Verwendet stattdessen einen der verfügbaren
        reservierten Domänennamen, die in :rfc:`2606` dokumentiert sind, wie

        * ✅ ``.example`` für Dokumentationen
        * ✅ ``.test`` für Tests im DNS-Bereich
        * ✅ ``.invalid`` für Domänennamen, die als ungültig erkannt werden
        * ✅ ``.localhost`` sollte in Host-Implementierungen einen A-Record auf
          Loopback bereitstellen
        * ✅ ``example.com``
        * ✅ ``example.net``
        * ✅ ``example.org``

        .. seealso::
           * :rfc:`6761`
           * :rfc:`6762`
           * :rfc:`7686`
           * :rfc:`9476`
           * ICANN: `Reserving .INTERNAL for Private-Use Applications
             <https://www.icann.org/en/board-activities-and-meetings/materials/approved-resolutions-special-meeting-of-the-icann-board-29-07-2024-en#section2.a>`_

    ❌ Hier klicken
        solltet ihr nicht verwenden; für Details und Alternativen siehe
        :doc:`link-text`.

    ✅ HTTPS
        nicht *HTTPs*

    ✅ :abbr:`IPsec (Internet Protocol Security)`
        nicht *IPSec* oderr *IPSEC*.

    ❌ K8s
        Verwendet stattdessen *Kubernetes*.

    ⚠️ Kontoname
        solltet ihr nicht verwenden; nutzt stattdessen Anmeldename

    ❌ Man-Power
        Vermeidet die Verwendung geschlechtsspezifischer Begriffe. Verwendet
        stattdessen Begriffe wie *Personal* oder *Arbeitskraft*.

    ✅ Markdown
        Wird immer großgeschrieben, auch wenn ihr euch auf eine nicht
        standardisierte Version bezieht.

    Markup (Substantiv)
        Ohne Bindestrich.

    ❌ Master
        Verwendet es niemals in Verbindung mit *slave*. Wenn möglich, ersetzt
        *master* durch einen spezifischen Begriff, der für den Kontext
        zutreffend ist, :abbr:`z.B. (zum Beispiel)` *primär*, *main*,
        *Original*, *Elternteil*,  *Aggregator* oder *aktiv*.

        Wenn ihr einen Befehl oder Code dokumentiert, der wörtlich *master*
        verwendet, dann verwendet dieses Wort nur in direktem Bezug auf den
        formatierten Code und macht deutlich, worauf ihr euch bezieht. Verwendet
        danach einen spezifischeren Begriff.

        Siehe :term:`❌ Slave`.

    Medientypen
        Wenn in einer Dokumentation nicht relevant ist, um welchen Medientyp es
        konkret gehen soll, empfiehlt :rfc:`4735` folgende Platzhalter:

        Media Type:
            ``example``
        Media Subtypes:
            * ``application/example``
            * ``audio/example``
            * ``image/example``
            * ``message/example``
            * ``model/example``
            * ``multipart/example``
            * ``text/example``
            * ``video/example``

    ✅ N/A
        nicht NA. Erläutert es bei der ersten Verwendung als *nicht verfügbar*
        oder *nicht anwendbar*.

    ❌ oberhalb
        verwendet es nicht, da es ein spezifisches Layout voraussetzt; verwendet
        stattdessen *vorausgehend*.

    Passwörter
        Wir beschreiben für Passwörter, wie diese :abbr:`z. B. (zum Beispiel)`
        mit `pwgen <https://sourceforge.net/projects/pwgen/>`_ generiert werden
        können, da wir die Gefahr sehen, dass ein konkretes Beispiel wie
        ``ChangeMe`` oder ``MySuperSecretPassword`` zu leicht übernommen werden
        kann.

    ❌ Pros
        Verwendet stattdessen *Vorteile*.

    ❌ regex
        Verwendet stattdessen *regulärer Ausdruck*.

    ❌ Repo
        Verwendet stattdessen Repository.

    ❌ Representational State Transfer
        Erläutert stattdessen, wofür REST theoretisch steht, da Für Personen,
        die mit REST nicht vertraut sind auch die ausgeschriebenen Worte des
        Akronyms bedeutungslos bleiben.

    ❌ RTFM
        Verwendet stattdessen :abbr:`z.B. (zum Beispiel)` *Für weitere
        Informationen siehe …*.

    ❌ Sanity Check
        Verwendet stattdessen einen spezifischeren Begriff wie *Vorprüfung* oder
        Kohärenzprüfung.

    ❌ Schwarze Liste, Blacklist, Black-List
        solltet ihr ebensowenig verwenden wie :term:`❌ Whitelist` und
        :term:`❌ Graylist`; verwendet stattdessen Begriffe, die für die
        jeweilige Fachdomäne präziser sind wie :abbr:`z.B. (zum Beispiel)`
        *Excludelist* oder *Blocklist*.

        .. note::
           Häufig handelt es sich nicht um Listen im eigentlichen Sinne.

        * ✅ Um Anfragen von einer IP-Adresse zu verweigern, fügt sie der Datei
          `dos.yaml` hinzu.
        * ❌ Um Anfragen von einer IP-Adresse zu verweigern, fügt sie der
          Denylist hinzu.
        * ❌ Um eine IP-Adresse auf die schwarze Liste zu setzen, fügt sie der
          Datei `dos.yaml` hinzu.

    ❌ Slave
        Verwendet stattdessen alternative Begriffe, die für eure Domäne besser
        geeignet sind, z.B. *Worker* oder *Replik*. Wenn ihr die Begriffe
        *Master* und *Slave* gemeinsam ersetzen wollt, dann zieht Kombinationen
        wie *primär/sekundär*, *Original/Replik*, *Controller/Worker*,
        *Publisher/Subscriber* oder *aktiv/standby* in Betracht.

        Wenn der Befehl oder Code, den ihr dokumentiert, wörtlich *Slave*
        verwendet, dann formattiert ihn als Code und macht deutlich, worauf ihr
        euch bezieht. Verwendet danach einen spezifischeren Begriff,
        :abbr:`z. B. (zum Beispiel)`

            Startet den sekundären Prozess mit ``slave:start``, wenn ihr
            Probleme zwischen dem primären und sekundären Prozess analysieren
            wollt.

    ❌ Smartphone
        Verwendet stattdessen *Mobiltelefon*.

    ⚠️ ssh und SSH
        Verwendet ssh wenn ihr euch auf das Terminal-Werkzeug bezieht. Verwendet
        hingegen SSH wenn ihr euch auf das Kommunikationsprotokoll bezieht.

    ❌ Tarball
        verwendet stattdessen tar-Datei.

    ❌ :abbr:`tl;dr (Too long; didn’t read)`
        Verwendet stattdessen etwas wie *Zusammenzufassend*.

    und/oder
        ist manchmal die klarste und effizienteste Art, etwas auszudrücken.
        Dennoch solltet ihr überlegen, ob sich die Aussage umschreiben lässt
        ohne dass sie schwerer zu verstehen ist.

    ❌ untar, unzip
        verwendet stattdessen *entpacken*.

    ❌ unterhalb
        verwendet es nicht, da es ein spezifisches Layout voraussetzt; verwendet
        stattdessen *nachfolgend*.

    ✅ URL, der
        in Großbuchstaben; der Plural ist URLs.

    ✅ :abbr:`v (Version)`
        verwendet die Kleinschreibung zur Abkürzung von Version.

    ❌ via
        Verwendet stattdessen *über* um Zwischenstationen zu benennen.

    ❌ Vice versa
        Verwendet es nicht. Verwendet stattdessen eine Phrase wie *andersherum*,
        *umgekehrt* oder *anders*. In manchen Kontexten ist vice versa unklar
        oder ungenau, weil in einem komplexen Satz schwer zu wissen ist, welche
        zwei Dinge miteinander vertauscht werden. Macht in solchen Fällen
        explizit klar, welche zwei Dinge vertauscht werden.

    ❌ vs.
        Verwendet vs. nicht als Abkürzung für *versus*; verwendet stattdessen
        das ungekürzte *versus*.

    ❌ Webmaster
        Verwendet stattdessen einen genaueren Begriff, um die spezifische Rolle
        zu beschreiben, :abbr:`z.B. (zum Beispiel)` *Website von …*,
        *Website-Administration* :abbr:`etc. (etcetera)`

    ✅ Web-Server
        nicht Webserver

    ✅ Website
        nicht Web-Site

    ❌ White-box
        Vermeidet die Verweundung von white-box und verwendet stattdessen
        präzisere Begriffe wie

        * introspektives Monitoring
        * Clear-Box-Testing

    ❌ Whitelist
        siehe :term:`❌ Schwarze Liste, Blacklist, Black-List`

    ✅ Wi-Fi
        nicht wifi oder WiFi. Dies bezeichnet sowohl das Firmenkonsortium wie
        auch die zugehörigen Markenbegriffe; WLAN hingegen bezeichnet das
        Funknetzwerk.

    ⚠️ Zugriff
        Vermeidet es, wenn möglich. Verwendet stattdessen freundlichere und
        präzisere Wörter wie *sehen*, *bearbeiten*, *finden*, *verwenden* oder
        *ansehen*.
