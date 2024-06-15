Schnelleinstieg
===============

|Contributors| |License| |Docs|

.. |Contributors| image:: https://img.shields.io/github/contributors/cusyio/cusy-design-system.svg
   :target: https://github.com/cusyio/cusy-design-system/graphs/contributors
.. |License| image:: https://img.shields.io/github/license/cusyio/cusy-design-system.svg
   :target: https://github.com/cusyio/cusy-design-system/blob/master/LICENSE
.. |Docs| image:: https://readthedocs.org/projects/cusy-design-system/badge/?version=latest
   :target: https://cusy.design

.. first-steps::

Installation
------------

#. Herunterladen und auspacken:

   … auf Linux/macOS:

   .. code-block:: console

    $ curl -O https://github.com/cusyio/cusy-design-system/archive/refs/heads/main.zip
    $ unzip cusy-design-system-main.zip
    Archive:  cusy-design-system-main.zip
    …
       creating: cusy-design-system-main/
    …

   … auf Windows:

   .. code-block:: ps1con

    C:> curl.exe -o main.zip -O https://github.com/cusyio/cusy-design-system/archive/refs/heads/main.zip
    C:> tar -xvzf cusy-design-system-main.zip
    …

#. Installieren von Python-Paketen:

   … auf Linux/macOS:

   .. code-block:: console

      $ python3 -m venv .
      $ bin/python -m pip install --upgrade pip
      $ bin/python -m pip install -r docs/requirements.txt

   … auf Windows:

   .. code-block:: ps1con

      C:> python -m venv .
      C:> Scripts\python -m pip install --upgrade pip
      C:> Scripts\python -m pip install -r docs/requirements.txt

#. Erstellen der HTML-Dokumentation:

   .. note::
      pandoc muss installiert sein.

      … auf Debian/Ubuntu:

      .. code-block:: console

         $  sudo apt install pandoc

   Zum Erstellen der HTML-Dokumentation führt den folgenden Befehl aus:

   .. code-block:: console

      $ sphinx-build -ab html docs/ docs/_build/

#. Erstellen eines PDF:

   Zum Erstellen einer PDF-Dokumentation benötigt ihr zusätzliche Pakete, die
   ihr installieren könnt

   … auf Debian/Ubuntu mit

   .. code-block:: console

      $ sudo apt install texlive-latex-recommended texlive-latex-extra texlive-fonts-recommended latexmk

   … auf macOS mit

   .. code-block:: console

      $ brew cask install mactex
      …
      🍺  mactex was successfully installed!
      $ curl --remote-name https://www.tug.org/fonts/getnonfreefonts/install-getnonfreefonts
      $ sudo texlua install-getnonfreefonts
      …
      mktexlsr: Updating /usr/local/texlive/2020/texmf-dist/ls-R...
      mktexlsr: Done.

   Anschließend könnt ihr ein PDF generieren mit:

   .. code-block:: console

    $ source bin/activate
    $ cd docs/
    $ make latexpdf
    …
    The LaTeX files are in _build/latex.
    Run 'make' in that directory to run these through (pdf)latex
    …

   Das PDF findet ihr dann in ``_build/latex/cusy-design-system.pdf``.

Folge uns
---------

* `GitHub <https://github.com/cusyio/cusy-design-system>`_
* `Mastodon <https://mastodon.social/@cusyDesign>`_

Pull-Requests
-------------

Wenn ihr Vorschläge für Verbesserungen und Ergänzungen habt, empfehle ich euch,
einen `Fork <https://github.com/cusyio/cusy-design-system/fork>`_ meines
`GitHub-Repository <https://github.com/cusyio/cusy-design-system/>`_ zu erstellen
und darin eure Änderungen vorzunehmen. Gerne dürft ihr auch einen *Pull Request*
stellen. Sofern die darin enthaltenen Änderungen klein und atomar sind, schaue ich
mir eure Vorschläge gerne an.
