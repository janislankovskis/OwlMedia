from django.shortcuts import get_object_or_404, render_to_response
from django.http import HttpResponseRedirect, HttpResponse
from django.core.urlresolvers import reverse
from django.template import RequestContext
from django.conf import settings
from os import path
from datetime import datetime
from random import randint

import Image


from owlmedia.forms import owlmediaForm

def index(request):
	insertfile = None;
	if request.method == 'POST':
	#	return HttpResponse(request.POST['resize'])
		form = owlmediaForm( request.POST, request.FILES )
		if(form.is_valid()):
			#generate newfilename & upload file to MEDIA_ROOT + uploads/
			filename, ext = path.splitext(request.FILES['file'].name)
			newname = datetime.now().strftime("%Y%m%d%H%M%S") + '-' + str(randint(10000, 99999)) + '.jpg'
			destination = open( settings.MEDIA_ROOT + 'uploads/' + newname, 'wb+')
			for chunk in request.FILES['file'].chunks():
				destination.write(chunk)
			destination.close()

			#resize & convert to JPEG
			im = Image.open(settings.MEDIA_ROOT + 'uploads/' + newname)
			#attribute = Image.ANTIALIAS
			if( str(request.POST['resize']) <> 'original'):
				sizes = request.POST['resize'].split("x")
				siz  = ( int(sizes[0]), int(sizes[1]) )
			else:
				siz = (1000,800)
				
			im.thumbnail( siz , Image.ANTIALIAS)
			im.save(settings.MEDIA_ROOT + 'uploads/' + newname, "JPEG")

			insertfile = newname
	else:	

		form = owlmediaForm()

	context = {
		'view' : 'upload',
		'form' : form,
		'insertfile': insertfile,
	}

	return render_to_response('owlmedia_index.html', context, context_instance=RequestContext(request))

def embed(request):
	return render_to_response('owlmedia_index.html', {'view':'embed'})