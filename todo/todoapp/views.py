from django.shortcuts import render

# Create your views here.

from rest_framework.viewsets import ModelViewSet

from .models import Project, Note
from .serializers import ProjectSerializer, NoteSerializer


class ProjectsModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class NotesModelViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
