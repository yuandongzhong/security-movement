from django.urls import path
from security_movements import views

urlpatterns = [
    path("",views.ListAPIView.as_view(),name="list"),
    path("create/", views.CreateAPIView.as_view(),name="create"),
    path("update/<int:pk>/",views.UpdateAPIView.as_view(),name="update"),
    path("delete/<int:pk>/",views.DeleteAPIView.as_view(),name="delete")
]