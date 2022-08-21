from django.shortcuts import render

# Create your views here.

from rest_framework.viewsets import ModelViewSet
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.viewsets import ModelViewSet, ViewSet, GenericViewSet

from .models import User
from .serializers import UsersSerializer



# class UsersModelViewSet(ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UsersSerializer
class UsersModelViewSet(ListModelMixin, DestroyModelMixin, RetrieveAPIView, UpdateAPIView, GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UsersSerializer
