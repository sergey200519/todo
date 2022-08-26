from django.shortcuts import render

# Create your views here.

from rest_framework.viewsets import ModelViewSet
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.viewsets import ModelViewSet, ViewSet, GenericViewSet
from rest_framework.permissions import AllowAny, BasePermission

from .models import User
from .serializers import UsersSerializer


class SuperUserOnly(BasePermission):

    def has_permission(self, request, view):
        return request.user.is_superuser


class UsersModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsersSerializer
    permission_classes = [SuperUserOnly]
# class UsersModelViewSet(ListModelMixin, DestroyModelMixin, RetrieveAPIView, UpdateAPIView, GenericViewSet):
#     queryset = User.objects.all()
#     serializer_class = UsersSerializer
