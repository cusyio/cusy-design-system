Wortliste
=========

.. note::
   Dieses Dokument enthält Verweise auf Begriffe, die Cusy als respektlos oder
   beleidigend betrachtet. Die Begriffe sind hier aufgeführt, um Hinweise 
   zu alternativen Begriffe zu geben.

Wenn der Begriff, den ihr sucht, nicht auf dieser Seite zu finden ist, schaut
bitte in :doc:`about` unter *Andere Redaktionsleitfäden*.

Wortliste
---------

#
~

3D
    nicht 3-D

Symbole
~~~~~~~

& (et-Zeichen)
    Verwendet *&* nicht anstelle von *und*  in Überschriften oder Texten; wenn
    ihr auf Elementen der Benutzeroberfläche oder in Tabellenüberschriften eine
    Abkürzung verwenden wollt, dann nutzt *u.*; und natürlich kann das *&* auch
    in Quellcode verwendet werden.

A-Z
~~~

🚫 agnostisch
    solltet ihr nicht verwenden. Nutzt stattdessen präzisere Begriffe wie
    *plattformunabhängig*
API
    verwendet das Akronym API erst, nachdem ihr den Begriff erläutert habt,
    nämlich (engl. **A**\pplication **P**\rogramming **I**\nterface)
Authentifizierung und Autorisierung
    solltet ihr nur verwenden, wenn *authentifiziert* sich auf Personen bezieht,
    und *autorisiert* nur, um sich auf Berechtigungen zu beziehen, die von einer
    Anwendung im Namen einer authentifizierten Person gesendet werden. Eine
    authentifizierte Person hat einen Identitätsnachweis erbracht, z.B. durch die
    Eingabe eines Passworts.
best effort
    solltet ihr wenn möglich vermeiden; verwendet stattdessen spezifischere
    Formulierungen.
Beta
    geschrieben mit Großbuchstaben am Anfang.

    * 👍 PACKAGE_NAME Beta
    * 👍 PACKAGE_NAME ist derzeit in der Beta-Phase.

CLI
    verwendet das Akronym CLI erst, nachdem ihr den Begriff erläutert habt,
    nämlich (engl. **C**\ommand **L**\ine **I**\nterface)
🚫 erlauben
    solltet ihr nicht verwenden. Nutzt stattdessen *ermöglichen*
🚫 oberhalb, unterhalb
    verwendet es nicht, da es ein spezifisches Layout voraussetzt; verwendet
    stattdessen *vorausgehend* oder *nachfolgend*
🚫 Schwarze Liste, Blacklist, Black-List
    solltet ihr ebensowenig verwenden wie *Whitelist* und *Graylist*; verwendet
    stattdessen Begriffe, die für die jeweilige Fachdomäne präziser sind wie
    z.B. *Excludelist* oder *Blocklist*. Beachtet bitte auch, dass es sich
    häufig nicht wirklich um Listen handelt.

    * 👍 Um Anfragen von einer IP-Adresse zu verweigern, fügt sie der Datei
      `dos.yaml` hinzu.
    * 👎 Um Anfragen von einer IP-Adresse zu verweigern, fügt sie der Denylist
      hinzu.
    * 👎 Um eine IP-Adresse auf die schwarze Liste zu setzen, fügt sie der Datei
      `dos.yaml` hinzu.

Hier klicken
    solltet ihr nicht verwenden; für Details und Alternativen siehe
    :doc:`link-text`.
⚠️ Kontoname
    solltet ihr nicht verwenden; nutzt stattdessen Anmeldename
🚫 Man-Power
    Vermeidet die Verwendung geschlechtsspezifischer Begriffe. Verwendet
    stattdessen Begriffe wie *Personal* oder *Arbeitskraft*.
Markdown
    Wird immer großgeschrieben, auch wenn ihr euch auf eine nicht
    standardisierte Version bezieht.
Markup (Substantiv)
    Ohne Bindestrich.
🚫 Master
    Verwendet es niemals in Verbindung mit *slave*. Wenn möglich, ersetzt
    *master* durch einen spezifischen Begriff, der für den Kontext zutreffend
    ist, z.B. *primär*, *main*, *Original*, *Elternteil*,  *Aggregator* oder
    *aktiv*.

    Wenn ihr einen Befehl oder Code dokumentiert, der wörtlich *master*
    verwendet, dann verwendet dieses Wort nur in direktem Bezug auf den
    formatierten Code und macht deutlich, worauf ihr euch bezieht. Verwendet
    danach einen spezifischeren Begriff.

    Siehe Slave.

🚫 Slave
    Verwendet stattdessen alternative Begriffe, die für eure Domäne besser
    geeignet sind, z.B. *Worker* oder *Replik*. Wenn ihr die Begriffe *Master*
    und *Slave* gemeinsam ersetzen wollt, dann zieht Kombinationen wie
    *primär/sekundär*, *Original/Replik*, *Controller/Worker*,
    *Publisher/Subscriber* oder *aktiv/standby* in Betracht.

    Wenn der Befehl oder Code, den ihr dokumentiert, wörtlich *Slave* verwendet,
    dann formattiert ihn als Code und macht deutlich, worauf ihr euch bezieht.
    Verwendet danach einen spezifischeren Begriff, z.B.

        Startet den sekundären Prozess mit ``slave:start``, wenn ihr Probleme
        zwischen dem primären und sekundären Prozess analysieren wollt.

und/oder
    ist manchmal die klarste und effizienteste Art, etwas auszudrücken. Dennoch
    solltet ihr überlegen, ob sich die Aussage umschreiben lässt ohne dass sie
    schwerer zu verstehen ist.
⚠️ Zugriff
    Vermeidet es, wenn möglich. Verwendet stattdessen freundlichere und
    präzisere Wörter wie *sehen*, *bearbeiten*, *finden*, *verwenden* oder
    *ansehen*.

