from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.generics import CreateAPIView
from rest_framework.generics import DestroyAPIView
from rest_framework.generics import UpdateAPIView
from security_movements.serializers import MovementSerializer
from security_movements.models import Movement

class ListAPIView(ListAPIView):
    queryset = Movement.objects.all()
    serializer_class = MovementSerializer

class CreateAPIView(CreateAPIView):
    # TODO: data validation
    queryset = Movement.objects.all()
    serializer_class = MovementSerializer

class UpdateAPIView(UpdateAPIView):
    # TODO: data validation
    queryset = Movement.objects.all()
    serializer_class = MovementSerializer

class DeleteAPIView(DestroyAPIView):
    queryset = Movement.objects.all()
    serializer_class = MovementSerializer