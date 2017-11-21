from .models import Recipe, Category
from .serializers import (RecipeSerializer, RecipeCompleteSerializer,
                          CategorySerializer, CategoryLimitterSerializer)
from rest_framework import generics, permissions, pagination, viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter, SearchFilter
from django.db.models import F


class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        return (
            request.method in permissions.SAFE_METHODS or
            request.user and
            request.user.is_authenticated and
            request.user.is_staff
        )


class RecipeListCreate(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    filter_backends = (DjangoFilterBackend, OrderingFilter, SearchFilter)
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    search_fields = ('name', 'description', 'ingredients__name',
                     'category__name')
    pagination_class = pagination.LimitOffsetPagination
    ordering_fields = ('views',)
    filter_fields = ('category__id',)

    def get_serializer_class(self):
        if self.action == 'create':
            return RecipeSerializer
        else:
            return RecipeCompleteSerializer


class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = (IsAdminOrReadOnly,)

    def get(self, request, *args, **kwargs):
        obj: Recipe = self.get_object()
        obj.views = F('views') + 1
        obj.save()
        return super().get(request, *args, **kwargs)


class CategoryListCreate(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAdminOrReadOnly,)


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAdminOrReadOnly,)


class HomeList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryLimitterSerializer
