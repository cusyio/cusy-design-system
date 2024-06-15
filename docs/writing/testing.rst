Testen
======

Durch das Testen eurer Inhalte könnt ihr sicherstellen, dass sie sich in einem
konsistenten Zustand befinden. Die Erfahrung beim Lesen wird besser und
problemloser.

Continuous Integration
----------------------

Wir überprüfen systematisch, ob die Dokumentation des cusy Design-System
erstellt werden kann und zeigen euch dies auch mit folgendem Abzeichen
(:abbr:`engl. (englisch)`: Badge) an: |Docs|.

.. |Docs| image:: https://readthedocs.org/projects/cusy-design-system/badge/?version=latest
   :target: https://cusy.design/

Dieses Abzeichen wird vom Dokumentationsserver `Read the Docs
<https://readthedocs.org/>`_, auf dem unsere Dokumentation des
cusy Design-System veröffentlicht wird, bereitgestellt.

Weitere automatisch generierte Abzeichen findet ihr auf unserer Seite
:doc:`../index` mit Hinweisen zur Anzahl der Mitwirkenden, zur
Aktualisierungshäufigkeit, zur Lizenz und zu Mastodon.

Solche Abzeichen lassen sich jedoch nicht nur verwenden um den Status eures
Projekts zu dokumentieren, sondern auch um einen stets aktuellen Überblick über
viele verschiedene Projekte zu erhalten. Ein Beispiel hierfür findet ihr in
unserem `PyViz-Tutorial
<https://pyviz-tutorial.readthedocs.io/de/latest/overview.html#aktivitaten-und-lizenzen>`_.

Sphinx-Checks
-------------

.. seealso::
   * :ref:`python-basics:build-errors`
   * :ref:`python-basics:link-checks`

.. note::
   Falls ihr ein anderes Werkzeug zum technischen Schreiben verwendet, könnt ihr
   :abbr:`z.B. (zum Beispiel)` `HTMLProofer
   <https://github.com/gjtorikian/html-proofer>`_ verwenden um Links, Bilder,
   Titel und Tags zu überprüfen.

Code überprüfen
---------------

Ihr könnt automatisch euren Quellcode überprüfen und :abbr:`ggf.
(gegebenenfalls)` auch neu formatieren lassen. Einen Überblick über solche
Werkzeuge erhaltet ihr in unserem Jupyter-Tutorial unter `Checker
<https://jupyter-tutorial.readthedocs.io/de/latest/refactoring/qa/index.html#checker>`_
und `Formatter
<https://jupyter-tutorial.readthedocs.io/de/latest/refactoring/qa/index.html#formatter>`_.

Syntax überprüfen
-----------------

Es gibt auch Werkzeuge, die eure Inhalte anhand von Regeln überprüfen.

.. seealso::
   * `Regulating English with retext-mapbox-standard
     <https://blog.mapbox.com/regulating-english-with-retext-mapbox-standard-d79a8158f251>`_
   * `Writing automated tests for your documentation
     <https://krausefx.com/blog/writing-automated-tests-for-your-documentation>`_

.. _vale:

Sprachstil überprüfen
~~~~~~~~~~~~~~~~~~~~~

Prosa-Linters wie :abbr:`z.B. (zum Beispiel)` `Vale
<https://docs.errata.ai/vale/about>`__ gehen weit über Rechtschreib- und
Grammatikprüfungen hinaus und betrachten auch den Sprachgebrauch: Wiederholt
sich das Gesagte? Ist die Sprache zu informell? Ist die Ansprache inkonsistent?
Werden unerwünschte Klischees bedient? Oder ist die Sprache sexistisch?

Vale wird von vielen Open-Source-Projekten genutzt, :abbr:`u.a. (unter anderem)`
von

* GitLab (`.vale.ini
  <https://gitlab.com/gitlab-org/gitlab/blob/master/.vale.ini>`_, `Regeln
  <https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc/.vale/gitlab>`__)
* Homebrew (`.vale.ini
  <https://github.com/Homebrew/brew/blob/master/.vale.ini>`__, `Regeln
  <https://github.com/Homebrew/brew/tree/master/docs/vale-styles/Homebrew>`__)

Mit Vale selbst kommen die folgenden Stile mit:

`Microsoft <https://github.com/errata-ai/Microsoft>`_
    Eine Implementierung des `Microsoft Writing Style Guide
    <https://docs.microsoft.com/en-us/style-guide/welcome/>`__.
`Google <https://github.com/errata-ai/Google>`_
    Eine Implementierung des Styleguides für den `Google developer documentation
    style guide <https://developers.google.com/style/>`__.
`write-good <https://github.com/errata-ai/write-good>`_
    Eine Umsetzung der vom `write-good
    <https://github.com/btford/write-good>`__-Linter erzwungenen Richtlinien.
`proselint <https://github.com/errata-ai/Joblint>`_
    Eine Umsetzung der vom `proselint
    <https://github.com/amperser/proselint/>`__-Linter erzwungenen Richtlinien.
`Joblint <https://github.com/errata-ai/Joblint>`_
    Eine Umsetzung der vom `Joblint
    <https://github.com/rowanmanning/joblint>`__-Linter erzwungenen Richtlinien.

Ihr könnt Vale installieren mit

.. code-block:: console

    $ brew install vale

Wenn ihr als Dokumentationswerkzeug Sphinx nutzt, solltet ihr noch den
``rst2html``-Parser installieren mit

.. code-block:: console

    $ brew install docutils

Nun könnt ihr Vale konfigurieren in :file:`.vale.ini`:

.. code-block:: ini

    StylesPath = ./styles
    MinAlertLevel = suggestion

    [*.{md,rst}]
    BasedOnStyles = mystyles

    vale.Redundancy = YES
    vale.Repetition = YES
    vale.GenderBias = YES

Anschließend werden die Stile definiert, :abbr:`u.a. (unter anderem)` in
:file:`styles/{MY_STYLE}/Polite.yml`, :abbr:`z.B. (zum Beispiel)` mit:

.. code-block:: yaml

    extends: existence
    message: 'Do not use “%s” in technical documentation.'
    level: error
    ignorecase: true
    tokens:
      - please
      - thank you

Und schließlich könnt ihr eure Dokumentation überprüfen mit:

.. code-block:: console

    $ vale docs/
    ✔ 0 errors, 0 warnings and 0 suggestions in 201 files.

Vale liefert nur ein Wörterbuch für `amerikanisches-Englisch
<https://github.com/errata-ai/en_US-web>`_ mit. Ihr könnt jedoch auch andere
Wörterbücher hinzufügen, :abbr:`z.B. (zum Beispiel)` aus
`github.com/freedesktop/libreoffice-dictionaries
<https://github.com/freedesktop/libreoffice-dictionaries>`_. Diese könnt ihr
einbinden indem ihr sie lokal zur Verfügung stellt, :abbr:`z.B. (zum Beispiel)`
unter :file:`~/Library/Spelling/{de_DE}.{dic,aff}` und sie anschließend in eurem
Projekt in der Datei
:file:`styles/{MY_STYLE}/Spelling.yml` referenziert:

.. code-block:: yaml

    extends: spelling
    message: "Rechtschreibprüfung: '%s'"
    dicpath: ~/Library/Spelling
    dictionaries:
      - de_DE_frami
    level: warning
    ignore: styles/cusy/ignore.txt

.. note::
   Wenn ihr den Inhalt eures GitHub-Repository mit Vale überprüfen wollt, könnt
   ihr eine GitHub-Action hierfür einrichten: `vale-action
   <https://github.com/errata-ai/vale-action>`_.

Üblicherweise werden *literal blocks*, *inline literals* und *code-blocks*
ignoriert. Ihr könnt jedoch auch Bereiche aus der Überprüfung herausnehmen mit:

.. code-block::

    .. vale off

    Text, der nicht überprüft werden soll.

    .. vale on

.. seealso::

   * `Docs <https://docs.errata.ai/>`_
   * `GitHub <https://github.com/errata-ai/vale>`_
   * `check package <https://pkg.go.dev/github.com/errata-ai/vale/v2>`_
