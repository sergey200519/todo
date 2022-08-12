from django.db import models
from authapp.models import User

# Create your models here.
class Project(models.Model):
    name = models.CharField(verbose_name="название проекта", max_length=200)
    url = models.URLField(verbose_name="ссылка на репо", blank=True)
    users = models.ManyToManyField(User)

class Note(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField(verbose_name="текст заметки")
    time_created = models.DateTimeField(auto_now_add=True)
    time_updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ACTIVE_CHOICES = (
      ('A', "active"),
      ('N', 'not')
    )
    active = models.CharField(choices=ACTIVE_CHOICES, max_length=7)
