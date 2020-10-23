from rest_framework import authentication
from homebhvfhjf.models import Hghfhgjh
from .serializers import HghfhgjhSerializer
from rest_framework import viewsets


class HghfhgjhViewSet(viewsets.ModelViewSet):
    serializer_class = HghfhgjhSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Hghfhgjh.objects.all()
