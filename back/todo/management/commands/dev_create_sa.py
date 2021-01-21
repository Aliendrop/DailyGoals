from django.core.management.base import BaseCommand

from todo.utils import DEFAULT_USERNAME, DEFAULT_PASSWORD, get_or_create_demo_user


class Command(BaseCommand):
    help = 'Create superuser for tests'

    def handle(self, **options):
        _, created = get_or_create_demo_user(is_staff=True, is_superuser=True)
        msg = [
            f'Superuser {"created" if created else "exist"}!',
            f'username={DEFAULT_USERNAME}', f'password={DEFAULT_PASSWORD}',
        ]
        print('\n'.join(msg))
