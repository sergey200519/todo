from django.core.management import BaseCommand
from authapp.models import User


class Command(BaseCommand):
    def handle(self, *args, **options):
        user = User.objects.filter(username="ser5").first()
        if not user:
            User.objects.create_superuser(username="ser5", password="1", email="admin@mail.ru")
