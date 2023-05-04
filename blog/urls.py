from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('retificalonga/maq235', views.maq235),
    path('retificalonga/template', views.template),
    path('retificaorbital/maq15', views.maq15)
]