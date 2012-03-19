OwlMedia is TynyMCE plugin / Django App. It enables you to upload images into TinyMCE editor.

Installation
------------

0. Download .zip ar .tar.gz from Github and copy archive content to Django project folder or anywhere where django can find it.
1. In project settings.py add ``'owlmedia'`` to ``INSTALLED_APPS``.
2. In urls.py add 
	``
		url(r'^admin/owlmedia/', include('owlmedia.urls')),
	``

2. run python manage.py collectstatic


3. in change_form.html after ``{{ media }}`` add::

	<script src="/tiny_mce/tiny_mce.js"></script>
	<script src="/static/owlmedia/tiny_mce_init.js"></script>

Customize
---------

You can edit ``static/owlmedia/tiny_mce_init.js`` to change TinyMCE to your needs 
and ``views.py`` to change upload path. 