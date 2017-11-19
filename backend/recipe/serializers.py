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
    author = UserSerializer(
        default=serializers.CurrentUserDefault()
    )
    ingredients = IngredientSerializer(many=True)

    class Meta:
        model = Recipe
        fields = ('id', 'author', 'name', 'description', 'category',
                  'ready_in_time', 'portions', 'cooking_method',
                  'nutritional_info', 'ingredients', 'instructions')

    def create(self, validated_data):
        ingredients_data = validated_data.pop('ingredients')
        recipe = Recipe.objects.create(**validated_data)
        for ingredient_data in ingredients_data:
            Ingredient.objects.create(recipe=recipe, **ingredient_data)
        return recipe


class RecipeCompleteSerializer(RecipeSerializer):
    category = CategorySerializer(read_only=True)
    author = UserSerializer(read_only=True)
