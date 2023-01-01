from django.shortcuts import render
from django.http import HttpResponse

from django.http.response import JsonResponse
from .models import AI
from rest_framework.decorators import api_view
from .serializers import AISerializer
from rest_framework import status, filters
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404
# from rest_framework import mixins, generics, viewsets
# from rest_framework.authentication import BasicAuthentication
# from rest_framework.permissions import IsAuthenticated





def ouss(request):
    return HttpResponse('this is me')


# Create your views here.


# 4.1 List and Create ==GET and  POST

class CBV_List(APIView):
    def get(self, request):
        ais = AI.objects.all()
        serializer = AISerializer(ais, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AISerializer(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


# 4.1 GET and PUT and DELETE

# class CBV_pk(APIView):
#     def get_object(self, pk):
#         try:
#             return Guest.objects.get(pk=pk)
#         except Guest.DoesNotExist:
#             raise Http404

#     def delete(self, request, pk):
#         guest = self.get_object(pk)
#         guest.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

#     def put(self, request, pk):
#         guest = self.get_object(pk)
#         serializer = GuestSerializer(guest, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def get(self, request, pk):
#         guest = self.get_object(pk)
#         serializer = GuestSerializer(guest)
#         return Response(serializer.data)
