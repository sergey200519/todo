from django import db
from django.test import TestCase

from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from authapp.models import User

from todoapp.views import NotesModelViewSet, ProjectsModelViewSet
from todoapp.models import Note, Project

class TestTodoViewSet(TestCase):

    def setUp(self) -> None:
        self.url = '/api/notes/'

    def test_factory_get_todo(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = NotesModelViewSet.as_view({'get':'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_api_client_detail(self):
        client = APIClient()
        response = client.get(f'{self.url}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def tearDown(self) -> None:
        pass


class TestProject(APITestCase):

    def setUp(self) -> None:
        self.url = '/api/projects/'

    def test_get(self):
        response = self.client.get(f'{self.url}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_mixer(self):
        bio = mixer.blend(Note)

        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def tearDown(self) -> None:
        pass
