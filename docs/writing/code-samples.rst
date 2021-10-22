Code-Beispiele
==============

Mit `Sphinx <https://www.sphinx-doc.org/>`_ könnt ihr Code-Beispiele sehr
einfach darstellen. Zusammen mit `Pygments <http://pygments.org/>`_ lässt sich
die jeweilige Syntax einfach hervorheben. Die passende Sprache für einen
Code-Block könnt ihr angeben mit

.. rst:directive:: .. code-block:: language

Ihr könnt dies :abbr:`z.B. (zum Beispiel)` so verwenden.

.. code-block:: python

    import this

Für :rst:dir:`code-block` kann mit der ``linenos``-Option auch angegeben werden,
dass der Code-Block mit Zeilennummern angezeigt werden soll::

    .. code-block:: python
       :linenos:

       some more python code

.. code-block:: python
   :linenos:

   some more python code

Die erste Zeilennummer kann mit der ``lineno-start``-Option ausgewählt werden;
``linenos`` wird dann automatisch aktiviert::

   .. code-block:: python
      :lineno-start: 10

      Some more Python code, with line numbering starting at 10.

.. code-block:: python
    :lineno-start: 10

    Some more Python code, with line numbering starting at 10.

Mit

.. rst:directive:: code-block

   .. rst:directive:option:: emphasize-lines

könnt ihr auch einzelne Zeilen hervorheben.

Ihr könnt auch längere Texte einbinden mit

.. rst:directive:: .. literalinclude:: filename

Hier ein Beispiel aus unserem Jupyter-Tutorial::

    .. literalinclude:: main.py
       :emphasize-lines: 3,7-10,20-22
       :linenos:

.. literalinclude:: main.py
   :emphasize-lines: 3,7-10,20-22
   :linenos:

Wenn ihr das Diff eures Codes anzeigen möchtet, könnt ihr die alte Datei mit
der ``diff``-Option angeben, :abbr:`z.B. (zum Beispiel)`::

    .. literalinclude:: main.py
       :diff: main.py.orig

.. literalinclude:: main.py
   :diff: main.py.orig
