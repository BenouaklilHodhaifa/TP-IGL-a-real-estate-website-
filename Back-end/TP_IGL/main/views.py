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

# Create your views here.


class AiViewSet(ModelViewSet):
    queryset = AI.objects.all()
    serializer_class = AISerializer

    # parser_classes = (MultiPartParser, FormParser)

    # filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    # filterset_class = ProductFilter
    # search_fields = ['name', 'description']
    # ordering_fields = ['old_price']
    # pagination_class = PageNumberPagination
