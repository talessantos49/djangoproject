from django.shortcuts import render
from django.utils import timezone
from .models import Post

def post_list(request): 
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date') 
    return render(request, 'blog/post_list.html', {'posts':posts})

def maq235(request):
    return render(request, "blog/maq235.html")

def template(request):
    return render(request, "blog/template.html")

def maq15(request):
    return render(request, "blog/maq15.html")