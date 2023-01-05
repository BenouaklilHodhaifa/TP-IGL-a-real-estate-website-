from django.shortcuts import render
from django.http import HttpResponse

from django.http.response import JsonResponse
from .models import AI
from rest_framework.decorators import api_view
from .serializers import AISerializer
from rest_framework import status, filters
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from django.http import Http404
from rest_framework import mixins, generics, viewsets
# from rest_framework.authentication import BasicAuthentication
# from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password
from rest_framework.utils import json
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
# from django.contrib.auth.models import User
from .models import UserAccount


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)


class GoogleView(APIView):
    def post(self, request):
        payload = {'access_token': request.data.get(
            "token")}  # validate the token

        # r = requests.get(
        #    'https://www.googleapis.com/oauth2/v2/userinfo', params=payload)
        id_token = request.data.get("token")
        r = requests.get(
            f'https://www.googleapis.com/oauth2/v3/tokeninfo/?id_token={id_token}')

        data = json.loads(r.text)

        if 'error' in data:
            content = {
                'message': 'wrong google token / this google token is already expired.'}
            return Response(content)

        # create user if not exist
        try:
            user = UserAccount.objects.get(email=data['email'])
        except UserAccount.DoesNotExist:
            user = UserAccount()
            user.email = data['email']  # this was user.username
            # provider random default password
            user.password = make_password(
                BaseUserManager().make_random_password())
            user.first_name = data["given_name"]
            user.last_name = data["family_name"]
            user.save()

        # generate token without username & password
        token = RefreshToken.for_user(user)
        response = {}
        response['username'] = user.email  # this was user.username
        response['access_token'] = str(token.access_token)
        response['refresh_token'] = str(token)
        return Response(response)


# class AiViewSet(ModelViewSet):
#     queryset = AI.objects.all()
#     serializer_class = AISerializer


@api_view(['POST'])
def create_ai(request):
    serializer = AISerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


class AI_Function(APIView):
    def get(self, request):
        ais = AI.objects.all()
        serializer = AISerializer(ais, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = AISerializer(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class AI_Function_Id(APIView):
    def get_object(self, id):
        try:
            return AI.objects.get(id=id)
        except AI.DoesNotExist:
            raise Http404

    def delete(self, request, id):
        ais = self.get_object(id)
        ais.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, id):
        ais = self.get_object(id)
        serializer = AISerializer(ais, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        ais = self.get_object(id)
        serializer = AISerializer(ais)
        return Response(serializer.data)
