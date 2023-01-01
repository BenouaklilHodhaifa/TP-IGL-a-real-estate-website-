from django.urls import path, include
from . import views

urlpatterns = [
    path('api', views.CBV_List.as_view(), name='api'),
]
