from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

_urlpatterns = [
    url(r'^user/$', views.UserCreate.as_view()),
    url(r'^user/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
]

urlpatterns = format_suffix_patterns(_urlpatterns)
