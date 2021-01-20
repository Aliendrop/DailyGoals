from django.contrib.auth import get_user_model


DEFAULT_USERNAME = DEFAULT_PASSWORD = 'demo'


def get_or_create_demo_user(username=DEFAULT_USERNAME, is_staff=False, is_superuser=False) -> tuple:
    payload = {
        'first_name': "Demo",
        'last_name': "User",
        'email': "example@example.com",
        'username': username,
        'password': DEFAULT_PASSWORD,
        'is_staff': is_staff,
        'is_superuser': is_superuser,
    }
    return get_user_model().objects.get_or_create(defaults=payload)
