from django.conf.urls.defaults import *

urlpatterns = patterns('owlmedia.views',
	(r'^$', 'index'),
	(r'embed/', 'embed'),
)