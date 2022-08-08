from django.shortcuts import render

# Create your views here.

from rest_framework.viewsets import ModelViewSet

from .models import Users
from .serializers import UsersSerializer

class UsersModelViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
