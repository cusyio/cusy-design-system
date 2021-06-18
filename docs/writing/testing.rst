Testen
======

Durch das Testen Eurer Inhalte könnt Ihr sicherstellen, dass sie sich in einem
konsistenten Zustand befinden. Die Erfahrung beim Lesen wird besser und
problemloser.

Continuous Integration
----------------------

Wir überprüfen systematisch, ob die Dokumentation des Cusy-Design-System
erstellt werden kann und zeigen Euch dies auch mit folgendem Abzeichen
(:abbr:`engl. (englisch)`: Badge) an: |Docs|.

.. |Docs| image:: https://readthedocs.org/projects/cusy-design-system/badge/?version=latest
   :target: https://cusy-design-system.readthedocs.io/de/latest/

Dieses Abzeichen wird vom Dokumentationsserver `Read the Docs
<https://readthedocs.org/>`_, auf dem unsere Dokumentation des
Cusy-Design-System veröffentlicht wird.

Weitere automatisch generierte Abzeichen findet Ihr auf unserer Seite
:doc:`../intro` mit Hinweisen zur Anzahl der Mitwirkenden, zur
Aktualisierungshäufigkeit und zur Lizenz.

Solche Abzeichen lassen sich jedoch nicht nur verwenden um den Status Eures
Projekts zu dokumentieren, sondern auch um einen stets aktuellen Überblick über
viele verschiedene Projekte zu erhalten. Ein Beispiel hierfür findet Ihr in
unserem `PyViz-Tutorial
<https://pyviz-tutorial.readthedocs.io/de/latest/overview.html#aktivitaten-und-lizenzen>`_.

Build-Fehler
------------

Ihr habt jedoch auch die Möglichkeit, vor der Veröffentlichung Eurer Änderungen
zu überprüfen, ob Eure Inhalte ordnungsgemäß erstellt werden. Hierfür hat
:abbr:`z.B. (zum Beispiel)` das für die Erstellung des Cusy-Design-System
verwendete `Sphinx <https://www.sphinx-doc.org/>`_ einen pingelig (:abbr:`engl.
(englisch)` nitpicky)-Modus, der mit der Option ``-n`` aufgerufen werden kann,
also :abbr:`z.B. (zum Beispiel)` mit:

.. code-block:: console

    $ pipenv run sphinx-build -nb html docs/ docs/_build/

Links überprüfen
----------------

Ihr könnt auch automatisiert sicherstellen, dass die von Euch angegebenen
Linkziele erreichbar sind. Unser Dokumentationswerkzeug Sphinx verwendet hierfür
einen ``linkcheck``-Builder, den Ihr :abbr:`ggf. (gegebenenfalls)` aufrufen
könnt mit:

.. code-block:: console

    $ pipenv run sphinx-build -b linkcheck docs/ docs/_build/

Die Ausgabe kann dann :abbr:`z.B. (zum Beispiel)` so aussehen:

.. code-block:: console

    $ pipenv run sphinx-build -b linkcheck docs/ docs/_build/
    Running Sphinx v3.5.2
    loading translations [de]... done
    …
    building [mo]: targets for 0 po files that are out of date
    building [linkcheck]: targets for 27 source files that are out of date
    …
    (content/accessibility: line   89) ok        https://bbc.github.io/subtitle-guidelines/
    (content/writing-style: line  164) ok        http://disabilityinkidlit.com/2016/07/08/introduction-to-disability-terminology/

    …
    (   index: line    5) redirect  https://cusy-design-system.readthedocs.io/ - with Found to https://cusy-design-system.readthedocs.io/de/latest/
    …
    (accessibility/color: line  114) broken    https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl - 404 Client Error: Not Found for url: https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl

Falls Ihr ein anderes Werkzeug zum technischen Schreiben verwendet, könnt Ihr
:abbr:`z.B. (zum Beispiel)` `HTMLProofer
<https://github.com/gjtorikian/html-proofer>`_ verwenden um Links, Bilder, Titel
und Tags zu überprüfen.

Code überprüfen
---------------

Ihr könnt automatisch Euren Quellcode überprüfen und :abbr:`ggf.
(gegebenenfalls)` auch neu formatieren lassen. Einen Überblick über solche
Werkzeuge erhaltet Ihr in unserem Jupyter-Tutorial unter `Checker
<https://jupyter-tutorial.readthedocs.io/de/latest/refactoring/qa/index.html#checker>`_
und `Formatter
<https://jupyter-tutorial.readthedocs.io/de/latest/refactoring/qa/index.html#formatter>`_.

Syntax-Überprüfung
------------------

Es gibt auch Werkzeuge, die Eure Inhalte anhand von Regeln überprüfen.

.. seealso::
   * `Regulating English with retext-mapbox-standard
     <https://blog.mapbox.com/regulating-english-with-retext-mapbox-standard-d79a8158f251>`_
   * `Writing automated tests for your documentation
     <https://krausefx.com/blog/writing-automated-tests-for-your-documentation>`_

Vale
~~~~

`Vale <https://docs.errata.ai/vale/about>`_ wird von vielen Open-Source-Projekten genutzt, u.a. von

* GitLab (`.vale.ini <https://gitlab.com/gitlab-org/gitlab/blob/master/.vale.ini>`_, `Regeln
  <https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc/.vale/gitlab>`__)
* Homebrew (`.vale.ini <https://github.com/Homebrew/brew/blob/master/.vale.ini>`__, `Regeln
  <https://github.com/Homebrew/brew/tree/master/docs/vale-styles/Homebrew>`__).

Mit Vale selbst kommen die folgenden Stile mit:

`Microsoft <https://github.com/errata-ai/Microsoft>`_
    Eine Implementierung des `Microsoft Writing Style Guide
    <https://docs.microsoft.com/en-us/style-guide/welcome/>`__.
`Google <https://github.com/errata-ai/Google>`_
    Eine Implementierung des Styleguides für den `Google developer documentation style guide
    <https://developers.google.com/style/>`__.
`write-good <https://github.com/errata-ai/write-good>`_
    Eine Umsetzung der vom `write-good <https://github.com/btford/write-good>`__-Linter erzwungenen
    Richtlinien.
`proselint <https://github.com/errata-ai/Joblint>`_
    Eine Umsetzung der vom `proselint <https://github.com/amperser/proselint/>`__-Linter erzwungenen
    Richtlinien.
`Joblint <https://github.com/errata-ai/Joblint>`_
    Eine Umsetzung der vom `Joblint <https://github.com/rowanmanning/joblint>`__-Linter erzwungenen
    Richtlinien.
