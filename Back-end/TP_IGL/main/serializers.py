from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from .models import AI, AiImage, Message, UserAccount
from rest_framework import serializers

User = get_user_model()


class AiImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AiImage
        fields = ["id", "ai", "image"]


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', "name_ai", "name_sender", "vue", "body", "user"]


class AISerializer(serializers.ModelSerializer):
    images = AiImageSerializer(many=True, read_only=True)
    uploaded_images = serializers.ListField(
        child=serializers.ImageField(
            max_length=1000000, allow_empty_file=False, use_url=False),
        write_only=True)

    class Meta:
        model = AI
        fields = ['id', 'titre', 'description', 'data_Publication', 'type_ai', 'category', 'surface',
                  'prix', 'information_name', 'information_tel', 'information_email', 'images', 'uploaded_images']

    def create(self, validated_data):
        uploaded_images = validated_data.pop("uploaded_images")
        ai = AI.objects.create(**validated_data)
        for image in uploaded_images:
            ai_image = AiImage.objects.create(
                ai=ai, image=image)
        return ai


class UserCreateSerializer(UserCreateSerializer):
    ais = AISerializer(many=True, read_only=True)
    uploaded_ais = serializers.ListField(
        child=AISerializer(), write_only=True)

    messages = MessageSerializer(many=True, read_only=True)
    uploaded_messages = serializers.ListField(
        child=MessageSerializer(), write_only=True)

    class Meta(UserCreateSerializer.Meta):
        model = User
        # fields = {'id', 'email', 'name', 'password'}
        # fields = ['id', 'email', 'first_name', 'last_name',
        #           'password']
        fields = ['id', 'email', 'first_name', 'last_name',
                  'password', 'messages', 'uploaded_messages', 'ais', 'uploaded_ais']

    def create(self, validated_data):
        uploaded_messages = validated_data.pop("uploaded_messages")
        user = UserAccount.objects.create(**validated_data)
        uploaded_ais = validated_data.pop("uploaded_ais")
        for message in uploaded_messages:
            user_message = Message.objects.create(
                user=user, name_ai=message.name_ai, name_sender=message.name_sender, vue=message.vue, body=message.body)
        for ai in uploaded_ais:
            user_ai = AI.objects.create(
                user=user, titre=ai.titre, description=ai.description, date_Publication=ai.date_Publication, type_ai=ai.type_ai, category=ai.category, surface=ai.surface, prix=ai.prix, information_name=ai.information_name, information_tel=ai.information_tel, information_email=ai.information_email, uploaded_images=ai.uploaded_images)
        return user
