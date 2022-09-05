import graphene
from graphene import ObjectType
from graphene_django import DjangoObjectType
from authapp.models import User
from todoapp.models import Note, Project


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class NoteType(DjangoObjectType):
    class Meta:
        model = Note
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class Query(ObjectType):
    all_users = graphene.List(UserType)
    all_note = graphene.List(NoteType)
    all_project = graphene.List(ProjectType)

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_all_note(root, info):
        return Note.objects.all()

    def resolve_all_project(root, info):
        return Project.objects.all()


schema = graphene.Schema(query=Query)
