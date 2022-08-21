from django_filters import rest_framework as filters
from todoapp.models import Note


class NoteFilter(filters.FilterSet):
    create = filters.DateFromToRangeFilter()

    class Meta:
        model = Note
        fields = ['project', 'time_created']
