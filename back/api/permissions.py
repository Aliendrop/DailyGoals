from rest_framework.permissions import BasePermission

from todo.models import Goal


class IsGoalOwner(BasePermission):
    """ Allow access Goal owner  """
    def has_object_permission(self, request, view, obj):
        if isinstance(obj, Goal):
            return request.user == obj.user
        return False
