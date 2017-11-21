from rest_framework import serializers
from .models import Category, Ingredient, Recipe
from account.serializers import UserSerializer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'subtitle')


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('name', 'quantity', 'unit')


class RecipeSerializer(serializers.ModelSerializer):
    """
    Serializer para criar uma nova receita (o Frontend pode passar só o ID da
    categoria, e o autor é inserido automaticamente conforme o usuário logado)
    """
    author = UserSerializer(
        default=serializers.CurrentUserDefault()
    )
    ingredients = IngredientSerializer(many=True)

    class Meta:
        model = Recipe
        fields = ('id', 'author', 'views', 'name', 'description', 'category',
                  'ready_in_time', 'portions', 'cooking_method',
                  'nutritional_info', 'ingredients', 'instructions',
                  'publish_date')

    def create(self, validated_data):
        ingredients_data = validated_data.pop('ingredients')
        recipe = Recipe.objects.create(**validated_data)
        for ingredient_data in ingredients_data:
            Ingredient.objects.create(recipe=recipe, **ingredient_data)
        return recipe


class RecipeCompleteSerializer(RecipeSerializer):
    """
    Serializer para listar receitas ou mostrar detalhes de uma receita (
    o autor e a categoria se tornam um objeto completo, ao invés de IDs)
    """
    category = CategorySerializer(read_only=True)
    author = UserSerializer(read_only=True)


class CategoryLimitterSerializer(serializers.ModelSerializer):
    """
    Serviço usado na Home, lista todas as categorias junto com as 3 receitas
    mais recentes
    """
    recipes = RecipeSerializer(many=True, source='recipes_limit_3')

    class Meta:
        model = Category
        fields = ('id', 'name', 'subtitle', 'recipes')
