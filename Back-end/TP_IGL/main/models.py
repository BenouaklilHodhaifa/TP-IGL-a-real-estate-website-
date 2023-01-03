from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from datetime import datetime
import uuid


class UserAccountManager(BaseUserManager):
    # def create_user(self, email, name, password=None):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('users must have an email adresse')

        email = self.normalize_email(email)
        # user = self.model(email=email, name=name)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)  # hashing password
        user.save()

        return user

    def create_superuser(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('superuser must have an email adresse')

        email = self.normalize_email(email)
        superuser = self.model(email=email, **extra_fields)
        superuser.set_password(password)
        superuser.is_superuser = True
        superuser.is_staff = True
        superuser.save()


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    # name = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['name']
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        # return self.name
        return self.first_name + self.last_name

    def get_short_name(self):
        # return self.name
        return self.first_name

    def __str__(self):
        return self.email


class AI(models.Model):
    x = [
        ("Terrain", "Terrain"),
        ("Terrain_Agricole", "Terrain Agricole"),
        ("Appartement", "Appartement"),
        ("Maison", "Maison"),
        ("Bungalow", "Bungalow")
    ]
    y = [
        ("Vente", "Vente"),
        ("Echange", "Echange"),
        ("Location", "Location")
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    titre = models.CharField(max_length=50)
    description = models.TextField()
    date_Publication = models.DateTimeField(default=datetime.now)
    type_ai = models.CharField(max_length=50, choices=x)
    category = models.CharField(max_length=50, choices=y)
    surface = models.DecimalField(max_digits=10, decimal_places=2)
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    information_name = models.CharField(max_length=50)
    information_tel = models.IntegerField()
    information_email = models.CharField(max_length=50)
    image = models.ImageField(upload_to='img')

    user = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE, related_name='ais', null=True, blank=True)

    def __str__(self):
        return self.titre


class AiImage(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    ai = models.ForeignKey(AI, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(
        upload_to="img", default="", null=True, blank=True)


class Message(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name_ai = models.CharField(max_length=50)
    name_sender = models.CharField(max_length=50)
    vue = models.BooleanField(default=False)
    body = models.TextField()
    user = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE, related_name='messages', null=True, blank=True)
