from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import HghfhgjhViewSet

router = DefaultRouter()
router.register("hghfhgjh", HghfhgjhViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
