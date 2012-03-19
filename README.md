OwlMedia is TynyMCE plugin / Django App. It enables you to upload and resize images or add embed code into TinyMCE editor.

![OwlMedia Screenshot](https://github.com/janislankovskis/owlmedia/raw/master/screenshot.png)

Installation
------------

0. Download .zip ar .tar.gz from Github and copy archive content to Django project folder or anywhere where django can find it.
1. In project settings.py add ``'owlmedia'`` to ``INSTALLED_APPS``.
2. Configure static / media files ( see django docs - https://docs.djangoproject.com/en/1.3/howto/static-files/ ).
3. In urls.py add::
	
		url(r'^admin/owlmedia/', include('owlmedia.urls')),

4. run ``python manage.py collectstatic``

5. Customize admin template (see django docs - https://docs.djangoproject.com/en/dev/ref/contrib/admin/#overriding-admin-templates ). In change_form.html after ``{{ media }}`` add::
	&lt;script src="/tiny_mce/tiny_mce.js"&gt;&lt;/script&gt;
	&lt;script src="/static/owlmedia/tiny_mce_init.js"&gt;&lt;/script&gt;

Customize
---------

You can edit ``static/owlmedia/tiny_mce_init.js`` to change TinyMCE to your needs 
and ``views.py`` to change upload path. 