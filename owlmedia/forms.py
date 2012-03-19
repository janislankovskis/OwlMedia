from django import forms

SIZE_CHOICES = (
    ('original', 'Original'),
    ('100x100', '100x100'),
    ('200x200', '200x200'),
	('320x480', '320x480'),
    ('800x800', '800x600'),
)

class owlmediaForm(forms.Form):
	file = forms.ImageField()
	resize = forms.ChoiceField(choices = SIZE_CHOICES)