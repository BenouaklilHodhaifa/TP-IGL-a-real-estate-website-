from django.shortcuts import render
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
