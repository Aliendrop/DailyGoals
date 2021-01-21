from rest_framework import routers
from .views import ToDoViewSet


router = routers.DefaultRouter()
router.register(r'todo', ToDoViewSet)

urlpatterns = router.urls
