from django.shortcuts import render

# Create your views here.

from rest_framework.viewsets import ModelViewSet

from .models import User
from .serializers import UsersSerializer


class UsersModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsersSerializer
