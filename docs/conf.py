# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# http://www.sphinx-doc.org/en/master/config
# -- Path setup --------------------------------------------------------------
# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))
import os
import re


# Set canonical URL from the Read the Docs Domain
html_baseurl = os.environ.get("READTHEDOCS_CANONICAL_URL", "")

# Tell Jinja2 templates the build is running on Read the Docs
html_context = {}
if os.environ.get("READTHEDOCS", "") == "True":
    html_context["READTHEDOCS"] = True

# -- Project information -----------------------------------------------------

project = "cusy Design-System"
copyright = "2020–2024, cusy GmbH"
author = "Veit Schiele, cusy GmbH"

# The full version, including alpha/beta/rc tags
release = re.sub("^v", "", os.popen("git describe --abbrev=0").read().strip())


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    "nbsphinx",
    "sphinx.ext.autodoc",
    "sphinx.ext.intersphinx",
    "sphinx.ext.graphviz",
    "sphinx.ext.todo",
    "sphinxcontrib.cairosvgconverter",
    "sphinx_design",
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ["_templates"]

# Fix for Sphinx < 2.0
master_doc = "index"

# The language for content autogenerated by Sphinx. Refer to documentation
# for a list of supported languages.
#
# This is also used if you do content translation via gettext catalogs.
# Usually you set "language" from the command line for these cases.
language = "de"

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = [
    "_build",
    "Thumbs.db",
    ".DS_Store",
    "**/.ipynb_checkpoints",
    "**/.*.ipynb",
]


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
html_theme = "furo"


# Theme options are theme-specific and customize the look and feel of a theme
# further.  For a list of options available for each theme, see the
# documentation.
#
# Change default HTML title
html_title = f"{project} {release}"

# html_theme_options = {}
# html_sidebars = {}

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ["_static"]

# html_logo = '_static/images/logo/logo.png'
# html_favicon = '_static/images/logo/favicon.ico'

# -- Options for LaTeX output ---------------------------------------------

latex_elements = {
    # The paper size ('letterpaper' or 'a4paper').
    # 'papersize': 'a4paper',
    # The font size ('10pt', '11pt' or '12pt').
    # 'pointsize': '9pt',
    # Additional stuff for the LaTeX preamble.
    # 'preamble': '',
    # Latex figure (float) alignment
    # 'figure_align': 'htbp',
}

# Grouping the document tree into LaTeX files. List of tuples
# (source start file, target name, title,
#  author, documentclass [howto, manual, or own class]).
latex_documents = [
    (
        master_doc,
        "cusy-design-system.tex",
        "cusy Design-System",
        "Veit Schiele",
        "manual",
    ),
]

linkcheck_timeout = 60

linkcheck_ignore = [
    # redirect temporarily
    r"https://www.bloomberg.com/graphics/*",
    # Anchor not found
    r"https://github.com/cusyio/cusy-design-system/issues/new",
    r"https://www.gapminder.org/tools/",
    r"https://m2.material.io/*#*",
    r"https://m3.material.io/*#*",
    # 403 Client Error
    r"https://www.jstor.org/",
]

# -- nbsphinx configuration --------------------------------------------------

nbsphinx_allow_errors = True
# nbsphinx_execute = 'always'

# -- intersphinx configuration -----------------------------------------------

jupyter_tutorial_url = "https://jupyter-tutorial.readthedocs.io/de/latest/"
python_basics_url = "https://python-basics-tutorial.readthedocs.io/de/latest/"
intersphinx_mapping = {
    "jupyter-tutorial": (f"{jupyter_tutorial_url}", None),
    "python-basics": (f"{python_basics_url}", None),
    "sphinx": ("https://www.sphinx-doc.org/en/master/", None),
}


def setup(app):
    # from sphinx.ext.autodoc import cut_lines
    # app.connect('autodoc-process-docstring', cut_lines(4, what=['module']))
    app.add_object_type(
        "label",
        "label",
        objname="label value",
        indextemplate="pair: %s; label value",
    )


# -- graphviz configuration --------------------------------------------------

graphviz_output_format = "svg"
