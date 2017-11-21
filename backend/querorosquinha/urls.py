from django.conf.urls import url, include
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'account/', include('account.urls', namespace='account')),
    url(r'recipe/', include('recipe.urls', namespace='recipe')),
]
