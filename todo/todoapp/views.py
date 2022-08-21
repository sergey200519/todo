from django.shortcuts import render

# Create your views here.

from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework import status

from .models import Project, Note
from .serializers import ProjectSerializer, NoteSerializer
from .filter import NoteFilter


class ProjectLimit(LimitOffsetPagination):
    default_limit = 10


class ProjectsModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = ProjectLimit


class NotesLimit(LimitOffsetPagination):
    default_limit = 20


class NotesModelViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    pagination_class = NotesLimit
    filterset_class = NoteFilter

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            instance.is_active = False
            instance.save()
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
