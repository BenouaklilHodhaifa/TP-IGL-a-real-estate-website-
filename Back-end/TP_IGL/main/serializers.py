from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from .models import AI
from rest_framework import serializers

User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        # fields = {'id', 'email', 'name', 'password'}
        fields = {'id', 'email', 'first_name', 'last_name', 'password'}

class AISerializer(serializers.ModelSerializer):
    class Meta:
        model = AI
        fields = '__all__'
