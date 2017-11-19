from django.conf.urls import url, include

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
    url(r'account/', include('account.urls', namespace='account')),
    url(r'recipe/', include('recipe.urls', namespace='recipe')),
]
