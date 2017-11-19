# import os
# os.environ["DJANGO_SETTINGS_MODULE"] = "querorosquinha.settings"  # noqa
# import django
# django.setup()  # noqa
#
# from django.contrib.auth import get_user_model
# from datetime import date
#
# User = get_user_model()
#
# try:
#     User.objects.get(email='admin@admin.net')
# except User.DoesNotExist:
#     User.objects.create_superuser(
#         'admin@admin.net',
#         full_name='Admin',
#         birthday='01/01/1994',
#         city='São Paulo',
#         state='SP',
#         phone='(11) 999 999 999',
#         password='senhasenha',
#     )
#
# try:
#     User.objects.get(email='vinicius@exemplo.com')
# except User.DoesNotExist:
#     User.objects.create_user(
#         'vinicius@exemplo.com',
#         full_name='Vinícius Alves Oliveira',
#         password='senhasenha',
#         birthday=date(1954, 1, 26),
#         city='Sarandi',
#         state='PR',
#         phone='(44) 6282-6563',
#     )
#
# try:
#     User.objects.get(email='vitoria@exemplo.com')
# except User.DoesNotExist:
#     User.objects.create_user(
#         'vitoria@exemplo.com',
#         full_name='Vitória Cavalcanti Barbosa',
#         password='senhasenha',
#         birthday=date(1996, 7, 20),
#         city='Teresina',
#         state='PI',
#         phone='(86) 2117-4827',
#     )
#
