Wortliste
=========

.. note::
   Dieses Dokument enthält Verweise auf Begriffe, die Cusy als respektlos oder
   beleidigend betrachtet. Die Begriffe sind hier aufgeführt, um Hinweise 
   zu alternativen Begriffe zu geben.

Wenn der Begriff, den ihr sucht, nicht auf dieser Seite zu finden ist, schaut
in :doc:`about` unter *Andere Redaktionsleitfäden*.

Wortliste
---------

#
~

.. glossary::

    3D
        nicht 3-D

Symbole
~~~~~~~

.. glossary::

    & (et-Zeichen)
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
        nämlich (engl. **A**\pplication **P**\rogramming **I**\nterface)

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

        * ✅ PACKAGE_NAME Beta
        * ✅ PACKAGE_NAME ist derzeit in der Beta-Phase.

    CLI
        verwendet das Akronym CLI erst, nachdem ihr den Begriff erläutert habt,
        nämlich (engl. **C**\ommand **L**\ine **I**\nterface)

    ❌ cons
        Verwendet stattdessen *Nachteile*.

    ❌ erlauben
        solltet ihr nicht verwenden. Nutzt stattdessen *ermöglichen*

    ❌ Graylist
        siehe :term:`❌ Schwarze Liste, Blacklist, Black-List`

    Hier klicken
        solltet ihr nicht verwenden; für Details und Alternativen siehe
        :doc:`link-text`.

    HTTPS
        nicht *HTTPs*

    IPsec
        nicht *IPSec* or *IPSEC*. Akronym für *Internet Protocol Security*.

    ❌ K8s
        Verwendet stattdessen *Kubernetes*.

    ⚠️ Kontoname
        solltet ihr nicht verwenden; nutzt stattdessen Anmeldename

    ❌ Man-Power
        Vermeidet die Verwendung geschlechtsspezifischer Begriffe. Verwendet
        stattdessen Begriffe wie *Personal* oder *Arbeitskraft*.

    Markdown
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

    N/A
        nicht NA. Erläutert es bei der ersten Verwendung als *nicht verfügbar*
        oder *nicht anwendbar*.

    ❌ oberhalb
        verwendet es nicht, da es ein spezifisches Layout voraussetzt; verwendet
        stattdessen *vorausgehend*.

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
        euch bezieht. Verwendet danach einen spezifischeren Begriff, :abbr:`z.B.
        (zum Beispiel)` 

            Startet den sekundären Prozess mit ``slave:start``, wenn ihr
            Probleme zwischen dem primären und sekundären Prozess analysieren
            wollt.

    ❌ Smartphone
        Verwendet stattdessen *Mobiltelefon*.

    ssh und SSH
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

    URL
        in Großbuchstaben; der Plural ist URLs. Schreibt *der URL*.

    :abbr:`v (Version)`
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

    Web-Server
        nicht Webserver

    Website
        nicht Web-Site

    ❌ White-box
        Vermeidet die Verweundung von white-box und verwendet stattdessen
        präzisere Begriffe wie

        * introspektives Monitoring
        * Clear-Box-Testing

    ❌ Whitelist
        siehe :term:`❌ Schwarze Liste, Blacklist, Black-List`

    Wi-Fi
        nicht wifi oder WiFi. Dies bezeichnet sowohl das Firmenkonsortium wie
        auch die zugehörigen Markenbegriffe; WLAN hingegen bezeichnet das
        Funknetzwerk.

    ⚠️ Zugriff
        Vermeidet es, wenn möglich. Verwendet stattdessen freundlichere und
        präzisere Wörter wie *sehen*, *bearbeiten*, *finden*, *verwenden* oder
        *ansehen*.

