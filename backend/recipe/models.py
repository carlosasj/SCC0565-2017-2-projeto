from django.db import models
from django.conf import settings
from django.utils import timezone


class Category(models.Model):
    name = models.CharField(
        'Nome da Categoria',
        max_length=32,
    )

    subtitle = models.CharField(
        'Subtítulo',
        max_length=64,
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.name


class Ingredient(models.Model):
    name = models.CharField(
        'Nome',
        max_length=255,
    )

    quantity = models.CharField(
        'Quantidade',
        max_length=255,
        null=True,
        blank=True,
    )

    unit = models.CharField(
        'Unidade',
        max_length=255,
        null=True,
        blank=True,
    )

    recipe = models.ForeignKey(
        'Recipe',
        related_name='ingredients',
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f'{self.quantity} {self.unit} {self.name}'


class Recipe(models.Model):
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        verbose_name='Autor',
        on_delete=models.CASCADE,
    )

    publish_date = models.DateTimeField(
        'Data de Publicação',
        default=timezone.now
    )

    name = models.CharField(
        'Nome da receita',
        max_length=255,
    )

    description = models.TextField('Descrição')

    category = models.ForeignKey(
        Category,
        verbose_name='Categoria',
        on_delete=models.CASCADE,
    )

    ready_in_time = models.PositiveSmallIntegerField(
        'Tempo de preparo',
        help_text='(em minutos)',
    )

    portions = models.PositiveSmallIntegerField('Número de porções')

    cooking_method = models.CharField(
        'Método de cozimento',
        max_length=255,
    )

    nutritional_info = models.CharField(
        'Valor nutricional',
        max_length=255,
    )

    instructions = models.TextField('Instruções de preparo')

    views = models.PositiveIntegerField('Número de visualizações', default=0)

    def __str__(self):
        return self.name
