Schnelleinstieg
===============

|Contributors| |License| |Docs|

.. |Contributors| image:: https://img.shields.io/github/contributors/cusyio/cusy-design-system.svg
   :target: https://github.com/cusyio/cusy-design-system/graphs/contributors
.. |License| image:: https://img.shields.io/github/license/cusyio/cusy-design-system.svg
   :target: https://github.com/cusyio/cusy-design-system/blob/master/LICENSE
.. |Docs| image:: https://readthedocs.org/projects/cusy-design-system/badge/?version=latest
   :target: https://cusy-design-system.readthedocs.io/de/latest/

.. first-steps::

Installation
------------

#. Herunterladen und Auspacken:

   .. code-block:: console

    $ curl -O https://codeload.github.com/cusyio/cusy-design-system/zip/master
    $ unzip master
    Archive:  master
    …
       creating: cusy-design-system-master/
    …

#. Pipenv installieren

   Siehe `Pipenv installieren
   <https://jupyter-tutorial.readthedocs.io/de/latest/productive/envs/pipenv/install.html>`_

#. Python-Pakete installieren:

   .. code-block:: console

    $ cd cusy-design-system
    $ pipenv install
    Creating a virtualenv for this project…
    …
    Installing dependencies from Pipfile.lock (fbb457)…
    …
    $ pipenv run jupyter nbextension enable highlighter/highlighter
        Enabling notebook extension highlighter/highlighter...
              - Validating: OK

#. HTML-Dokumentation erstellen:

   .. code-block:: console

    $ pipenv run sphinx-build -b html docs/ docs/_build/

#. PDF erstellen:

   .. code-block:: console

    $ cd docs/
    $ pipenv run make latexpdf
    …
    The LaTeX files are in _build/latex.
    Run 'make' in that directory to run these through (pdf)latex
    …

   Das PDF findet ihr anschließend in ``docs/_build/latex/cusy-design-system.pdf``.

Folge uns
---------

* `GitHub <https://github.com/cusyio/cusy-design-system>`_
* `Twitter <https://twitter.com/CusyDesign>`_
* `Mastodon <https://mastodon.social/web/accounts/1122757>`_

Pull-Requests
-------------

Wenn ihr Vorschläge für Verbesserungen und Ergänzungen habt, empfehle ich euch,
einen `Fork <https://github.com/cusyio/cusy-design-system/fork>`_ meines
`GitHub-Repository <https://github.com/cusyio/cusy-design-system/>`_ zu erstellen
und darin eure Änderungen vorzunehmen. Gerne dürft ihr auch einen *Pull Request*
stellen. Sofern die darin enthaltenen Änderungen klein und atomar sind, schaue ich
mir eure Vorschläge gerne an.
