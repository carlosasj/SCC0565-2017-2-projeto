from .models import User
from .serializers import UserSerializer
from rest_framework import generics, permissions


class IsOwner(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to retrieve/edit it.
    """

    def has_object_permission(self, request, view, obj):
        return obj.id == request.user.id


class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner)
