from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

_urlpatterns = [
    url(r'^$', views.RecipeListCreate.as_view({'get': 'list', 'post': 'create'})),
    url(r'^(?P<pk>[0-9]+)/$', views.RecipeDetail.as_view()),
    url(r'^category/$', views.CategoryListCreate.as_view()),
    url(r'^category/(?P<pk>[0-9]+)/$', views.CategoryDetail.as_view()),
]

urlpatterns = format_suffix_patterns(_urlpatterns)
