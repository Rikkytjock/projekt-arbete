import { IRecipe, Unit } from '@inglorious/core-types'

export const recipeData: IRecipe[] = [
  {
    id: '6649f6e489ea6c8a536f950b',
    name: 'Daal Fry',
    description:
      'A rich, flavorful and nutritious lentil dish made with red lentils, tomatoes, and aromatic spices. Simple to prepare and packed with protein, perfect for a wholesome meal.',
    img: 'assets/images/recipes/daal-fry.jpg',
    cookingTime: {
      hours: 0,
      minutes: 30
    },
    ingredients: [
      {
        name: 'Red lentils',
        quantity: {
          amount: 200,
          unit: Unit.Grams
        }
      },
      {
        name: 'Tomatoes',
        quantity: {
          amount: 3,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Mustard seeds',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Cumin seeds',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Turmeric powder',
        quantity: {
          amount: 0.5,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Coriander powder',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Ghee',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Curry leaves',
        quantity: {
          amount: 8,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Fresh coriander leaves',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Salt',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Water',
        quantity: {
          amount: 500,
          unit: Unit.Milliliters
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Rinse and soak lentils',
        description:
          'Rinse the red lentils under cold water until the water runs clear. Soak them in water for 15 minutes.'
      },
      {
        stepNumber: 2,
        name: 'Prepare the ingredients',
        description:
          'Chop the tomatoes and coriander leaves. Measure out all the spices and ingredients so they are ready to use.'
      },
      {
        stepNumber: 3,
        name: 'Cook the lentils',
        description:
          'In a medium pot, add the soaked red lentils, 500ml of water, and 1/2 teaspoon of turmeric. Bring to a boil, then reduce the heat to low and let it simmer for 15-20 minutes or until the lentils are soft.'
      },
      {
        stepNumber: 4,
        name: 'Heat the ghee',
        description: 'In a separate pan, heat 2 tablespoons of ghee on medium heat.'
      },
      {
        stepNumber: 5,
        name: 'Add mustard and cumin seeds',
        description: 'Add the mustard seeds and cumin seeds to the hot ghee. Let them splutter for 30 seconds.'
      },
      {
        stepNumber: 6,
        name: 'Add curry leaves and spices',
        description:
          'Add the curry leaves, turmeric powder, coriander powder, and a pinch of salt. Stir well for 30 seconds.'
      },
      {
        stepNumber: 7,
        name: 'Add tomatoes',
        description:
          'Add the chopped tomatoes to the pan and cook for 4-5 minutes until the tomatoes are soft and pulpy.'
      },
      {
        stepNumber: 8,
        name: 'Combine lentils and masala',
        description:
          'Once the tomatoes are soft, add the cooked lentils to the pan with the spice mixture. Mix well and cook for another 5-7 minutes on low heat.'
      },
      {
        stepNumber: 9,
        name: 'Add fresh coriander leaves',
        description: 'Turn off the heat and sprinkle fresh coriander leaves on top. Mix it into the dal gently.'
      },
      {
        stepNumber: 10,
        name: 'Serve hot',
        description:
          'Serve the daal fry hot with rice or flatbread like roti or chapati. Enjoy your delicious, wholesome meal.'
      }
    ]
  },

  // RECEPT 2

  {
    id: '6649f6f389ea6c8a536f950c',
    name: 'Beetroot Pasta',
    description:
      'A creamy and vibrant pasta dish made with beetroot, coconut milk, and aromatic spices. This vegetarian dish is colorful, nutritious, and full of flavor.',
    img: 'assets/images/recipes/beetroot-pasta.jpg',
    cookingTime: {
      hours: 0,
      minutes: 40
    },
    ingredients: [
      {
        name: 'Pasta',
        quantity: {
          amount: 250,
          unit: Unit.Grams
        }
      },
      {
        name: 'Beetroot',
        quantity: {
          amount: 2,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Coconut milk',
        quantity: {
          amount: 200,
          unit: Unit.Milliliters
        }
      },
      {
        name: 'Olive oil',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Salt',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Black pepper',
        quantity: {
          amount: 0.5,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Basil leaves',
        quantity: {
          amount: 8,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Lemon juice',
        quantity: {
          amount: 1,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Chili flakes',
        quantity: {
          amount: 0.5,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Fresh parsley',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Grated Parmesan (optional)',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Prepare the beetroot',
        description: 'Peel and chop the beetroot into small cubes.'
      },
      {
        stepNumber: 2,
        name: 'Cook the beetroot',
        description:
          'Boil the beetroot cubes in a pot of water for 15-20 minutes or until tender. Drain and let them cool.'
      },
      {
        stepNumber: 3,
        name: 'Cook the pasta',
        description:
          'In a large pot, bring water to a boil. Add salt and pasta. Cook according to package instructions, then drain the pasta and set aside.'
      },
      {
        stepNumber: 4,
        name: 'Blend the beetroot',
        description:
          'Add the cooked beetroot to a blender along with coconut milk, lemon juice, salt, and black pepper. Blend until smooth and creamy.'
      },
      {
        stepNumber: 5,
        name: 'Prepare the sauce',
        description: 'In a large pan, heat 2 tablespoons of olive oil over medium heat.'
      },
      {
        stepNumber: 6,
        name: 'Cook the sauce',
        description:
          'Pour the blended beetroot mixture into the pan. Cook on medium heat for 5-7 minutes, stirring occasionally, until it thickens slightly.'
      },
      {
        stepNumber: 7,
        name: 'Add the pasta',
        description:
          'Add the cooked pasta to the pan with the beetroot sauce. Toss to coat the pasta evenly with the sauce.'
      },
      {
        stepNumber: 8,
        name: 'Season the pasta',
        description: 'Add salt, black pepper, and chili flakes to the pasta. Toss well to combine the flavors.'
      },
      {
        stepNumber: 9,
        name: 'Add fresh herbs',
        description: 'Sprinkle fresh basil leaves and parsley over the pasta. Toss gently to mix.'
      },
      {
        stepNumber: 10,
        name: 'Serve and garnish',
        description:
          'Serve the beetroot pasta hot. Optionally, top with grated Parmesan or extra chili flakes for garnish.'
      }
    ]
  },

  // RECEPT 3

  {
    id: '6649f6f389ea6c8a536f950d',
    name: 'Chana Masala',
    description:
      'A rich, flavorful and spicy Indian curry made with chickpeas, tomatoes, and aromatic spices. This hearty dish is perfect to pair with rice or flatbreads.',
    img: 'assets/images/recipes/chana-masala.jpg',
    cookingTime: {
      hours: 1,
      minutes: 20
    },
    ingredients: [
      {
        name: 'Chickpeas (cooked or canned)',
        quantity: {
          amount: 300,
          unit: Unit.Grams
        }
      },
      {
        name: 'Tomatoes',
        quantity: {
          amount: 3,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Ginger',
        quantity: {
          amount: 1,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Green chili',
        quantity: {
          amount: 1,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Ghee or oil',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Cumin seeds',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Turmeric powder',
        quantity: {
          amount: 0.5,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Coriander powder',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Garam masala',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Paprika',
        quantity: {
          amount: 0.5,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Salt',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Water',
        quantity: {
          amount: 300,
          unit: Unit.Milliliters
        }
      },
      {
        name: 'Fresh coriander leaves',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Prepare the ingredients',
        description:
          'Chop the tomatoes, grate the ginger, and finely chop the green chili. Measure out all the spices and keep them ready for cooking.'
      },
      {
        stepNumber: 2,
        name: 'Heat the ghee or oil',
        description: 'In a large pan, heat 2 tablespoons of ghee or oil over medium heat.'
      },
      {
        stepNumber: 3,
        name: 'Add cumin seeds',
        description: 'Add cumin seeds to the hot oil and let them splutter for 30 seconds, releasing their aroma.'
      },
      {
        stepNumber: 4,
        name: 'Add ginger and green chili',
        description: 'Add the grated ginger and chopped green chili to the pan. Sauté for 1-2 minutes until fragrant.'
      },
      {
        stepNumber: 5,
        name: 'Add tomatoes and spices',
        description:
          'Add the chopped tomatoes to the pan. Add turmeric powder, coriander powder, paprika, and salt. Cook for 8-10 minutes until the tomatoes are soft and turn into a thick paste.'
      },
      {
        stepNumber: 6,
        name: 'Mash the tomato mixture',
        description: 'Use the back of a spoon to mash the tomatoes into a smooth mixture.'
      },
      {
        stepNumber: 7,
        name: 'Add chickpeas and water',
        description:
          'Add the cooked or canned chickpeas to the pan. Pour in 300ml of water and stir well to combine everything.'
      },
      {
        stepNumber: 8,
        name: 'Cook the chickpeas',
        description:
          'Simmer the curry for 10-15 minutes on low heat, allowing the chickpeas to absorb the flavors of the spices.'
      },
      {
        stepNumber: 9,
        name: 'Add garam masala',
        description: 'Sprinkle the garam masala into the curry and mix well. Let it cook for another 2-3 minutes.'
      },
      {
        stepNumber: 10,
        name: 'Garnish with coriander leaves',
        description: 'Turn off the heat and garnish with freshly chopped coriander leaves.'
      },
      {
        stepNumber: 11,
        name: 'Serve hot',
        description: 'Serve the chana masala hot with rice, roti, or naan. Enjoy your hearty and delicious meal!'
      }
    ]
  },

  // RECEPT 4

  {
    id: '6649f6f389ea6c8a536f950e',
    name: 'Swedish Bread',
    description:
      'A soft, traditional Swedish bread made from whole wheat flour and flavored with cardamom. Perfect for breakfast or as a side with soups and stews.',
    img: 'assets/images/recipes/bread.jpg',
    cookingTime: {
      hours: 2,
      minutes: 15
    },
    ingredients: [
      {
        name: 'Whole wheat flour',
        quantity: {
          amount: 500,
          unit: Unit.Grams
        }
      },
      {
        name: 'All-purpose flour',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      },
      {
        name: 'Dry yeast',
        quantity: {
          amount: 2,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Salt',
        quantity: {
          amount: 1.5,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Sugar',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Ground cardamom',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Milk (warm)',
        quantity: {
          amount: 300,
          unit: Unit.Milliliters
        }
      },
      {
        name: 'Water (warm)',
        quantity: {
          amount: 100,
          unit: Unit.Milliliters
        }
      },
      {
        name: 'Butter (melted)',
        quantity: {
          amount: 50,
          unit: Unit.Grams
        }
      },
      {
        name: 'Sesame seeds (optional for topping)',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Activate the yeast',
        description:
          'In a large bowl, mix warm milk, water, and sugar. Sprinkle the dry yeast on top and let it sit for 10 minutes until frothy.'
      },
      {
        stepNumber: 2,
        name: 'Mix dry ingredients',
        description: 'In a separate bowl, mix whole wheat flour, all-purpose flour, salt, and ground cardamom.'
      },
      {
        stepNumber: 3,
        name: 'Combine wet and dry ingredients',
        description:
          'Add the flour mixture to the yeast mixture. Pour in the melted butter and mix everything together to form a dough.'
      },
      {
        stepNumber: 4,
        name: 'Knead the dough',
        description:
          'Transfer the dough to a floured surface and knead for 10 minutes until the dough is smooth and elastic.'
      },
      {
        stepNumber: 5,
        name: 'First proofing',
        description:
          'Place the dough in a greased bowl, cover it with a clean kitchen towel, and let it rise for 1 hour or until it doubles in size.'
      },
      {
        stepNumber: 6,
        name: 'Shape the dough',
        description:
          'Punch down the dough and shape it into a round or oblong loaf. Place it on a baking sheet lined with parchment paper.'
      },
      {
        stepNumber: 7,
        name: 'Second proofing',
        description: 'Cover the shaped dough with a kitchen towel and let it rise for 30-40 minutes until it puffs up.'
      },
      {
        stepNumber: 8,
        name: 'Preheat oven',
        description: 'Preheat the oven to 200°C (390°F) while the dough is proofing for the second time.'
      },
      {
        stepNumber: 9,
        name: 'Optional topping',
        description:
          'Brush the top of the dough with a little milk or melted butter and sprinkle sesame seeds on top if desired.'
      },
      {
        stepNumber: 10,
        name: 'Bake the bread',
        description:
          'Bake the bread in the preheated oven for 25-30 minutes or until it turns golden brown and sounds hollow when tapped on the bottom.'
      },
      {
        stepNumber: 11,
        name: 'Cool the bread',
        description:
          'Remove the bread from the oven and let it cool on a wire rack for at least 20 minutes before slicing.'
      },
      {
        stepNumber: 12,
        name: 'Serve and enjoy',
        description: 'Slice the Swedish bread and enjoy it with butter, cheese, or your favorite spreads.'
      }
    ]
  },

  // RECEPT 5

  {
    id: '6649f6f389ea6c8a536f950f',
    name: 'Dosa',
    description:
      'A traditional Indian-style pancake made with a fermented batter of rice and lentils. Crispy, golden, and perfect for breakfast or dinner.',
    img: 'assets/images/recipes/dosa.jpg',
    cookingTime: {
      hours: 12,
      minutes: 30
    },
    ingredients: [
      {
        name: 'Rice',
        quantity: {
          amount: 300,
          unit: Unit.Grams
        }
      },
      {
        name: 'Urad dal (split black lentils)',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      },
      {
        name: 'Fenugreek seeds',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Water',
        quantity: {
          amount: 400,
          unit: Unit.Milliliters
        }
      },
      {
        name: 'Salt',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Oil (for cooking)',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Rinse and soak rice and dal',
        description:
          'Rinse the rice and urad dal in water until the water runs clear. Soak the rice, urad dal, and fenugreek seeds in water for 4-6 hours.'
      },
      {
        stepNumber: 2,
        name: 'Grind the ingredients',
        description:
          'Drain the soaked rice and dal. Grind them together in a blender with 400ml water to make a smooth batter.'
      },
      {
        stepNumber: 3,
        name: 'Ferment the batter',
        description:
          'Pour the batter into a large bowl, cover it, and let it ferment overnight or for 8-12 hours in a warm place.'
      },
      {
        stepNumber: 4,
        name: 'Add salt to the batter',
        description:
          'Once the batter has fermented and risen, add 1 teaspoon of salt and mix gently without knocking out the air.'
      },
      {
        stepNumber: 5,
        name: 'Preheat the pan',
        description: 'Heat a flat, non-stick pan (or dosa tawa) on medium heat and lightly grease it with oil.'
      },
      {
        stepNumber: 6,
        name: 'Pour the batter',
        description:
          'Pour a ladle of batter in the center of the pan and spread it in a circular motion to form a thin, round dosa.'
      },
      {
        stepNumber: 7,
        name: 'Cook the dosa',
        description:
          'Cook the dosa on medium-high heat for 2-3 minutes until the edges begin to lift and the bottom turns golden brown.'
      },
      {
        stepNumber: 8,
        name: 'Drizzle oil around the edges',
        description: 'Drizzle a few drops of oil around the edges of the dosa to make it crispy.'
      },
      {
        stepNumber: 9,
        name: 'Flip or fold the dosa',
        description:
          'Optionally, flip the dosa and cook the other side for 30 seconds, or fold it directly from one side to the other.'
      },
      {
        stepNumber: 10,
        name: 'Repeat for remaining batter',
        description: 'Repeat the process for the remaining batter, making fresh dosas one at a time.'
      },
      {
        stepNumber: 11,
        name: 'Serve hot',
        description:
          'Serve the dosa hot with coconut chutney, tomato chutney, or sambar for a delicious South Indian meal.'
      }
    ]
  },

  // RECEPT 6

  {
    id: '6649f6f389ea6c8a536f950g',
    name: 'Chapati',
    description:
      'A classic Indian flatbread made with whole wheat flour, water, and salt. Soft, chewy, and perfect to accompany any curry or dal.',
    img: 'assets/images/recipes/chapati.jpg',
    cookingTime: {
      hours: 1,
      minutes: 30
    },
    ingredients: [
      {
        name: 'Whole wheat flour',
        quantity: {
          amount: 250,
          unit: Unit.Grams
        }
      },
      {
        name: 'Water',
        quantity: {
          amount: 150,
          unit: Unit.Milliliters
        }
      },
      {
        name: 'Salt',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Ghee or oil',
        quantity: {
          amount: 1,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Extra flour (for dusting)',
        quantity: {
          amount: 20,
          unit: Unit.Grams
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Prepare the dough',
        description:
          'In a large mixing bowl, add the whole wheat flour and salt. Gradually add water and mix to form a dough.'
      },
      {
        stepNumber: 2,
        name: 'Knead the dough',
        description: 'Knead the dough for about 8-10 minutes until it becomes soft and smooth.'
      },
      {
        stepNumber: 3,
        name: 'Rest the dough',
        description: 'Cover the dough with a damp cloth and let it rest for 30 minutes.'
      },
      {
        stepNumber: 4,
        name: 'Divide the dough',
        description: 'After resting, divide the dough into 10-12 equal-sized portions and roll each into a small ball.'
      },
      {
        stepNumber: 5,
        name: 'Roll out the chapatis',
        description:
          'Using a rolling pin, flatten each ball into a thin, round disc about 15 cm in diameter. Use extra flour for dusting if the dough sticks.'
      },
      {
        stepNumber: 6,
        name: 'Preheat the pan',
        description: 'Heat a flat pan or tawa on medium-high heat.'
      },
      {
        stepNumber: 7,
        name: 'Cook the chapati',
        description: 'Place the rolled-out chapati on the hot pan. Cook for 30 seconds until bubbles form.'
      },
      {
        stepNumber: 8,
        name: 'Flip the chapati',
        description:
          'Flip the chapati and cook the other side for 30 seconds. Press the edges gently with a spatula to help it puff up.'
      },
      {
        stepNumber: 9,
        name: 'Apply ghee (optional)',
        description: 'Apply a small amount of ghee or oil on the cooked chapati to enhance flavor and keep it soft.'
      },
      {
        stepNumber: 10,
        name: 'Repeat the process',
        description: 'Repeat the process for the remaining dough balls to make the rest of the chapatis.'
      },
      {
        stepNumber: 11,
        name: 'Serve warm',
        description: 'Serve the fresh, warm chapatis with curries, dals, or as a side to any meal.'
      }
    ]
  },

  // RECEPT 7

  {
    id: '6649f6f389ea6c8a536f950h',
    name: 'Idli',
    description:
      'Soft and fluffy steamed rice cakes, perfect for breakfast or as a light meal. Made from fermented rice and lentil batter. Note that the time to make this is including the fermentation time',
    img: 'assets/images/recipes/idli.jpg',
    cookingTime: {
      hours: 10, // Including soaking and fermentation time. Behövs skrivas så det syns i kort info mer?
      minutes: 20
    },
    ingredients: [
      {
        name: 'Idly rice',
        quantity: {
          amount: 200,
          unit: Unit.Grams
        }
      },
      {
        name: 'Urad dal (split black gram)',
        quantity: {
          amount: 50,
          unit: Unit.Grams
        }
      },
      {
        name: 'Fenugreek seeds',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Water (for soaking and grinding)',
        quantity: {
          amount: 500,
          unit: Unit.Milliliters
        }
      },
      {
        name: 'Salt',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Oil (for greasing the idly molds)',
        quantity: {
          amount: 1,
          unit: Unit.Tablespoons
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Soak rice and lentils',
        description:
          'Rinse the idly rice, urad dal, and fenugreek seeds under cold water. Soak them in separate bowls with enough water for 6-8 hours.'
      },
      {
        stepNumber: 2,
        name: 'Grind the lentils',
        description:
          'Drain the water from the soaked urad dal. Grind it into a smooth, fluffy batter using 150ml of water. Transfer to a large bowl.'
      },
      {
        stepNumber: 3,
        name: 'Grind the rice',
        description:
          'Drain the soaked rice and grind it into a smooth, slightly coarse batter using 200ml of water. Add this to the bowl with the lentil batter.'
      },
      {
        stepNumber: 4,
        name: 'Mix and ferment the batter',
        description:
          'Mix the rice and lentil batters together. Add salt and mix thoroughly. Cover and leave the batter to ferment for 8 hours or overnight in a warm place.'
      },
      {
        stepNumber: 5,
        name: 'Prepare the idly molds',
        description: 'Grease the idly molds with oil to prevent sticking.'
      },
      {
        stepNumber: 6,
        name: 'Pour the batter into the molds',
        description:
          'Once the batter has fermented, stir it gently. Pour the batter into the prepared idly molds, filling each slot about 3/4 full.'
      },
      {
        stepNumber: 7,
        name: 'Steam the idly',
        description:
          'Heat a steamer with water. Place the idly molds in the steamer and steam for 10-12 minutes on medium heat.'
      },
      {
        stepNumber: 8,
        name: 'Check if idly is done',
        description: 'To check if the idly is cooked, insert a toothpick. If it comes out clean, they are ready.'
      },
      {
        stepNumber: 9,
        name: 'Cool and unmold the idly',
        description:
          'Allow the idly to cool for 2 minutes. Carefully remove them from the molds using a spoon or knife.'
      },
      {
        stepNumber: 10,
        name: 'Serve hot',
        description:
          'Serve the hot, fluffy idly with chutney, sambar, or a side of coconut chutney for a complete meal.'
      }
    ]
  },

  // RECEPT 8

  {
    id: '6649f6f389ea6c8a536f950i',
    name: 'Pani Puri',
    description:
      'Crispy hollow puris filled with spicy, tangy, and flavorful water along with mashed potatoes, chickpeas, and tangy chutneys.',
    img: 'assets/images/recipes/pani-puri.jpg',
    cookingTime: {
      hours: 1,
      minutes: 30
    },
    ingredients: [
      {
        name: 'Puris',
        quantity: {
          amount: 20,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Boiled potatoes',
        quantity: {
          amount: 2,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Cooked chickpeas',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      },
      {
        name: 'Tamarind pulp',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Jaggery',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Mint leaves',
        quantity: {
          amount: 20,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Coriander leaves',
        quantity: {
          amount: 10,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Green chili',
        quantity: {
          amount: 1,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Black salt',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Chaat masala',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Salt',
        quantity: {
          amount: 0.5,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Water',
        quantity: {
          amount: 500,
          unit: Unit.Milliliters
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Boil the potatoes and chickpeas',
        description:
          'Boil the potatoes and chickpeas until soft. Once done, mash the potatoes and set them aside. Keep the cooked chickpeas separate.'
      },
      {
        stepNumber: 2,
        name: 'Prepare the tamarind chutney',
        description:
          'In a small pan, heat 100ml of water. Add tamarind pulp, jaggery, and a pinch of salt. Simmer for 10 minutes. Set aside to cool.'
      },
      {
        stepNumber: 3,
        name: 'Prepare the spicy mint water',
        description:
          'In a blender, add mint leaves, coriander leaves, green chili, black salt, chaat masala, and 400ml of water. Blend it until smooth and strain the mixture to get a smooth tangy water.'
      },
      {
        stepNumber: 4,
        name: 'Mix potato and chickpea filling',
        description:
          'In a bowl, combine the mashed potatoes, cooked chickpeas, 1/2 teaspoon of salt, and chaat masala. Mix well to form the filling.'
      },
      {
        stepNumber: 5,
        name: 'Crack open the puris',
        description:
          'Take each puri and lightly crack the top open with a spoon to make space for the filling and water.'
      },
      {
        stepNumber: 6,
        name: 'Fill the puris with stuffing',
        description:
          'Fill each puri with the prepared potato-chickpea mixture, adding 1 teaspoon of the tamarind chutney to each puri.'
      },
      {
        stepNumber: 7,
        name: 'Add the tangy mint water',
        description:
          'Pour a small amount of the tangy mint water into each puri until it’s almost full but not overflowing.'
      },
      {
        stepNumber: 8,
        name: 'Serve fresh',
        description:
          'Serve the pani puri immediately, as they taste best when fresh and crispy. Provide extra mint water and chutney on the side for dipping.'
      }
    ]
  },

  // RECEPT 9

  {
    id: '6649f6f389ea6c8a536f950cj',
    name: 'Laddu',
    description:
      'A sweet and delicious Indian dessert made from roasted flour, sugar, and ghee, shaped into round balls.',
    img: 'assets/images/recipes/laddu.jpg',
    cookingTime: {
      hours: 0,
      minutes: 45
    },
    ingredients: [
      {
        name: 'Gram flour (Besan)',
        quantity: {
          amount: 200,
          unit: Unit.Grams
        }
      },
      {
        name: 'Ghee',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      },
      {
        name: 'Powdered sugar',
        quantity: {
          amount: 150,
          unit: Unit.Grams
        }
      },
      {
        name: 'Cardamom powder',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Chopped almonds',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Chopped cashews',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Chopped pistachios',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Heat ghee in a pan',
        description: 'In a large pan, melt 100g of ghee on low heat.'
      },
      {
        stepNumber: 2,
        name: 'Roast the gram flour',
        description:
          'Add the gram flour (besan) to the melted ghee. Stir continuously on low-medium heat for about 15-20 minutes until the flour turns golden brown and releases a nutty aroma.'
      },
      {
        stepNumber: 3,
        name: 'Add chopped nuts',
        description:
          'Add chopped almonds, cashews, and pistachios to the roasted flour. Mix well and roast for another 2-3 minutes.'
      },
      {
        stepNumber: 4,
        name: 'Remove from heat',
        description: 'Turn off the heat and let the mixture cool for 10-15 minutes.'
      },
      {
        stepNumber: 5,
        name: 'Add sugar and cardamom powder',
        description:
          'Once the mixture is warm (not hot), add the powdered sugar and cardamom powder. Mix well to ensure the sugar blends completely with the roasted flour.'
      },
      {
        stepNumber: 6,
        name: 'Prepare the ladoo mixture',
        description: 'Mix everything thoroughly until the mixture forms a slightly sticky dough-like texture.'
      },
      {
        stepNumber: 7,
        name: 'Shape the ladoos',
        description:
          'Take a small portion of the mixture and roll it between your palms to form a smooth round ball (ladoo). Repeat this step to make more ladoos.'
      },
      {
        stepNumber: 8,
        name: 'Decorate the ladoos',
        description: 'Optionally, garnish the ladoos with a pinch of chopped pistachios on top for decoration.'
      },
      {
        stepNumber: 9,
        name: 'Let the ladoos set',
        description: 'Let the ladoos set for 10-15 minutes to firm up before serving.'
      },
      {
        stepNumber: 10,
        name: 'Serve and store',
        description: 'Serve the ladoos fresh or store them in an airtight container. They stay fresh for up to a week.'
      }
    ]
  },

  {
    id: '6649f6f389ea6c8a536f950ck',
    name: 'Tofu & Vegetable Fried Rice',
    description:
      'A healthy and delicious fried rice dish made with tofu, colorful vegetables, and flavorful spices. Perfect for a wholesome lunch or dinner.',
    img: 'assets/images/recipes/tofu-rice.jpg',
    cookingTime: {
      hours: 0,
      minutes: 40
    },
    ingredients: [
      {
        name: 'Basmati rice',
        quantity: {
          amount: 200,
          unit: Unit.Grams
        }
      },
      {
        name: 'Firm tofu',
        quantity: {
          amount: 150,
          unit: Unit.Grams
        }
      },
      {
        name: 'Carrots',
        quantity: {
          amount: 2,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Green beans',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      },
      {
        name: 'Red bell pepper',
        quantity: {
          amount: 1,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Frozen peas',
        quantity: {
          amount: 50,
          unit: Unit.Grams
        }
      },
      {
        name: 'Coconut oil',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Soy sauce',
        quantity: {
          amount: 2,
          unit: Unit.Tablespoons
        }
      },
      {
        name: 'Ginger paste',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Black pepper',
        quantity: {
          amount: 0.5,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Salt',
        quantity: {
          amount: 1,
          unit: Unit.Teaspoons
        }
      },
      {
        name: 'Water',
        quantity: {
          amount: 400,
          unit: Unit.Milliliters
        }
      },
      {
        name: 'Spring onions (green part only)',
        quantity: {
          amount: 2,
          unit: Unit.Pieces
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Rinse and cook rice',
        description:
          'Rinse the basmati rice in cold water. In a pot, add 400ml of water, a pinch of salt, and the rice. Cook on medium heat for 15-20 minutes or until the rice is fluffy. Set aside to cool.'
      },
      {
        stepNumber: 2,
        name: 'Prepare tofu',
        description: 'Pat dry the tofu with a paper towel. Cut it into small cubes.'
      },
      {
        stepNumber: 3,
        name: 'Marinate tofu',
        description:
          'In a small bowl, mix 1 tablespoon of soy sauce and 1/2 teaspoon of black pepper. Toss the tofu cubes in the mixture and let them marinate for 10 minutes.'
      },
      {
        stepNumber: 4,
        name: 'Chop vegetables',
        description:
          'Finely chop carrots, green beans, and red bell pepper into small cubes. Keep them separate for easy cooking.'
      },
      {
        stepNumber: 5,
        name: 'Fry tofu',
        description:
          'In a large pan, heat 1 tablespoon of coconut oil on medium heat. Add the marinated tofu cubes and fry until golden brown on all sides (about 5-7 minutes). Remove from the pan and set aside.'
      },
      {
        stepNumber: 6,
        name: 'Stir-fry vegetables',
        description:
          'In the same pan, heat the remaining 1 tablespoon of coconut oil. Add carrots, green beans, and red bell pepper. Stir-fry for 5-7 minutes on medium-high heat until they are slightly soft but still crunchy.'
      },
      {
        stepNumber: 7,
        name: 'Add spices and peas',
        description:
          'Add the ginger paste, black pepper, and frozen peas to the vegetables. Cook for 2 minutes until the peas are thawed.'
      },
      {
        stepNumber: 8,
        name: 'Add cooked rice',
        description:
          'Add the cooked rice to the pan with the vegetables. Stir everything together and cook for 5 minutes on low-medium heat, ensuring the rice absorbs the flavors of the vegetables and spices.'
      },
      {
        stepNumber: 9,
        name: 'Add tofu and soy sauce',
        description:
          'Add the fried tofu back into the pan along with 1 tablespoon of soy sauce. Mix everything together for 2 minutes until well combined.'
      },
      {
        stepNumber: 10,
        name: 'Serve with garnish',
        description:
          'Garnish with freshly chopped spring onions (green parts only) and serve hot. Enjoy your wholesome Tofu & Vegetable Fried Rice!'
      }
    ]
  }
]
