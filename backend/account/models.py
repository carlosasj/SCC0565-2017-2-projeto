from django.db import models
from django.contrib.auth.models import (AbstractUser, BaseUserManager,
                                        PermissionsMixin)
from datetime import date


def test_or_raise_msg(var, msg):
    if not var:
        raise ValueError(msg)
    return True


class UserManager(BaseUserManager):
    def create_user(self, email, full_name, password=None, **kwargs):
        test_or_raise_msg(email, 'Entre com um endereço de email')
        test_or_raise_msg(full_name, 'Entre com o nome completo do usuário')
        test_or_raise_msg(kwargs.get('birthday'),
                          'Entre com a data de nascimento')
        test_or_raise_msg(kwargs.get('city'), 'Entre com a cidade do usuário')
        test_or_raise_msg(kwargs.get('state'), 'Entre com o estado do usuário')
        test_or_raise_msg(kwargs.get('phone'),
                          'Entre com o telefone do usuário')

        user = self.model(
            email=UserManager.normalize_email(email),
            full_name=full_name,
            first_name=''.join(full_name.split(None, 1)[:1]),
            last_name=''.join(full_name.split(None, 1)[1:]),
            **kwargs
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, full_name, birthday: str, city, state,
                         phone, password=None):
        splitted = list(map(int, birthday.split('/')[::-1]))
        date_birthday = date(splitted[0], splitted[1], splitted[2])

        user = self.create_user(email,
                                full_name=full_name,
                                password=password,
                                birthday=date_birthday,
                                city=city,
                                state=state,
                                phone=phone,
                                )
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractUser):
    STATES = (
        ('AC', 'Acre'),
        ('AL', 'Alagoas'),
        ('AP', 'Amapá'),
        ('AM', 'Amazonas'),
        ('BA', 'Bahia'),
        ('CE', 'Ceará'),
        ('DF', 'Distrito Federal'),
        ('ES', 'Espírito Santo'),
        ('GO', 'Goiás'),
        ('MA', 'Maranhão'),
        ('MT', 'Mato Grosso'),
        ('MS', 'Mato Grosso do Sul'),
        ('MG', 'Minas Gerais'),
        ('PA', 'Pará'),
        ('PB', 'Paraíba'),
        ('PR', 'Paraná'),
        ('PE', 'Pernambuco'),
        ('PI', 'Piauí'),
        ('RJ', 'Rio de Janeiro'),
        ('RN', 'Rio Grande do Norte'),
        ('RS', 'Rio Grande do Sul'),
        ('RO', 'Rondônia'),
        ('RR', 'Roraima'),
        ('SC', 'Santa Catarina'),
        ('SP', 'São Paulo'),
        ('SE', 'Sergipe'),
        ('TO', 'Tocantins'),
    )

    username = models.CharField(
        max_length=1,
        unique=False,
        blank=True,
        default='')

    email = models.EmailField(
        'Email',
        max_length=254,
        unique=True,
    )

    full_name = models.CharField(
        'Nome completo',
        max_length=255,
    )

    birthday = models.DateField(
        'Data de Nascimento',
    )

    city = models.CharField(
        'Cidade',
        max_length=255,
    )

    state = models.CharField(
        'Estado',
        choices=STATES,
        max_length=2,
    )

    phone = models.CharField(
        'Telefone',
        max_length=255,
    )

    objects = UserManager()

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name', 'birthday', 'city', 'state', 'phone']

    class Meta:
        verbose_name = 'usuário'

    def __str__(self):
        if self.full_name:
            return self.full_name
        return self.email
