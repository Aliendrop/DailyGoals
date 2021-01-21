from rest_framework import viewsets
from rest_framework import permissions

from .serializers import ToDoSerializer
from .permissions import IsGoalOwner
from todo.models import Goal


class ToDoViewSet(viewsets.ModelViewSet):
    queryset = Goal.objects.all()
    serializer_class = ToDoSerializer
    permission_classes = [permissions.IsAuthenticated & IsGoalOwner]

    def get_queryset(self):
        qs = self.queryset\
            .filter(user=self.request.user)\
            .order_by('done', '-created_at', '-updated_at')
        return qs
