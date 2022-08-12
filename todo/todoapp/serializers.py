from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from todoapp.models import Project, Note


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = "__all__"
