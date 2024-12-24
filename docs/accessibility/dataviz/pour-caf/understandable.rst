Understandable
==============

Eine Visualisierung macht keinen Sinn, wenn sie nicht verstanden wird. Ein
Diagramm verständlicher zu machen, kann auf viele Arten geschehen:

* Der Titel des Diagramms sollte die Kernaussage des Diagramms enthalten.

  .. figure:: ingraham-co2-levels.jpg
     :alt: CO, Werte in einem besetzten Konferenzraum am 4. Juni 2019.

.. raw:: html

  <style>
  @media not print {
      body[data-theme="dark"] img {
        filter: invert(1) hue-rotate(160deg) saturate(1.1);
        mix-blend-mode: screen;
      }
      @media (prefers-color-scheme: dark) {
        body:not([data-theme="light"]) img {
           filter: invert(1) hue-rotate(160deg) saturate(1.1);
           mix-blend-mode: screen;
        }
      }
  }
  </style>

  Der verwendete Text sollte klar und frei von Jargon und Akronymen sein.

* Die Beschreibung kann erläutern, wie das Diagramm zu lesen ist:

.. raw:: html
   :file: preteaching-ft.svg
   :class: align-center

.. raw:: html

   <style>
   text {
      fill:var(--color-foreground-primary)}
   g[id="greyText"] text {
      fill:rgb(137,137,137);
   }
   g[id="invText"] text {
      fill:white;
   }
   g[class="blackText"] text {
      fill:black;
   }
   </style>
