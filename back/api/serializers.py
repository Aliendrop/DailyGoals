from rest_framework import serializers

from todo.models import Goal


class ToDoSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Goal
        fields = ['user', 'title', 'done', 'url']
