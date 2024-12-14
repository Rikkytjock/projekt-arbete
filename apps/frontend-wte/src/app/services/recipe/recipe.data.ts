import { IRecipe, Unit } from '@inglorious/core-types'

export const recipeData: IRecipe[] = [
  {
    id: '6649f6e489ea6c8a536f950b',
    name: 'Daal Fry',
    description:
      'A rich, flavorful and nutritious lentil dish made with red lentils, tomatoes, and aromatic spices. Simple to prepare and packed with protein, perfect for a wholesome meal.',
    img: 'assets/images/daal-fry.jpg',
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
    description: 'Tasty pasta with beetroot and coconut milk',
    img: 'assets/images/beetroot-pasta.jpg',
    cookingTime: {
      hours: 1,
      minutes: 25
    },
    ingredients: [
      {
        name: 'Red lentils',
        quantity: {
          amount: 500,
          unit: Unit.Grams
        }
      },
      {
        name: 'Cucumber',
        quantity: {
          amount: 1,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Weird spices',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Throw some spices in the trash',
        description: 'Throw around 50 grams of weird spices in trash. This is a ritual.'
      },
      {
        stepNumber: 2,
        name: 'Fry lentils dry',
        description: 'You want to burn them a little.'
      },
      {
        stepNumber: 3,
        name: 'Add cucumber',
        description: 'Throw in the cucumber and fry it for 1 hour.'
      }
    ]
  },

  // RECEPT 3

  {
    id: '6649f6f389ea6c8a536f950d',
    name: 'Chana Masala',
    description: 'Chickpeas in spicy indian curry',
    img: 'assets/images/chana-masala.jpg',
    cookingTime: {
      hours: 1,
      minutes: 30
    },
    ingredients: [
      {
        name: 'Red lentils',
        quantity: {
          amount: 500,
          unit: Unit.Grams
        }
      },
      {
        name: 'Cucumber',
        quantity: {
          amount: 1,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Weird spices',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Throw some spices in the trash',
        description: 'Throw around 50 grams of weird spices in trash. This is a ritual.'
      },
      {
        stepNumber: 2,
        name: 'Fry lentils dry',
        description: 'You want to burn them a little.'
      },
      {
        stepNumber: 3,
        name: 'Add cucumber',
        description: 'Throw in the cucumber and fry it for 1 hour.'
      }
    ]
  },

  // RECEPT 4

  {
    id: '6649f6f389ea6c8a536f950e',
    name: 'Swedish Bread',
    description: 'Classical bread baked the swedish way',
    img: 'assets/images/bread.jpg',
    cookingTime: {
      hours: 1,
      minutes: 30
    },
    ingredients: [
      {
        name: 'Red lentils',
        quantity: {
          amount: 500,
          unit: Unit.Grams
        }
      },
      {
        name: 'Cucumber',
        quantity: {
          amount: 1,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Weird spices',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Throw some spices in the trash',
        description: 'Throw around 50 grams of weird spices in trash. This is a ritual.'
      },
      {
        stepNumber: 2,
        name: 'Fry lentils dry',
        description: 'You want to burn them a little.'
      },
      {
        stepNumber: 3,
        name: 'Add cucumber',
        description: 'Throw in the cucumber and fry it for 1 hour.'
      }
    ]
  },

  // RECEPT 5

  {
    id: '6649f6f389ea6c8a536f950f',
    name: 'Dosa',
    description: 'Indian style pancake made of lentils and rice',
    img: 'assets/images/dosa.jpeg',
    cookingTime: {
      hours: 1,
      minutes: 30
    },
    ingredients: [
      {
        name: 'Red lentils',
        quantity: {
          amount: 500,
          unit: Unit.Grams
        }
      },
      {
        name: 'Cucumber',
        quantity: {
          amount: 1,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Weird spices',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Throw some spices in the trash',
        description: 'Throw around 50 grams of weird spices in trash. This is a ritual.'
      },
      {
        stepNumber: 2,
        name: 'Fry lentils dry',
        description: 'You want to burn them a little.'
      },
      {
        stepNumber: 3,
        name: 'Add cucumber',
        description: 'Throw in the cucumber and fry it for 1 hour.'
      }
    ]
  },

  // RECEPT 6

  {
    id: '6649f6f389ea6c8a536f950g',
    name: 'Chapati',
    description: 'Flatbread made the indian way',
    img: 'assets/images/chapati.webp',
    cookingTime: {
      hours: 1,
      minutes: 30
    },
    ingredients: [
      {
        name: 'Red lentils',
        quantity: {
          amount: 500,
          unit: Unit.Grams
        }
      },
      {
        name: 'Cucumber',
        quantity: {
          amount: 1,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Weird spices',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Throw some spices in the trash',
        description: 'Throw around 50 grams of weird spices in trash. This is a ritual.'
      },
      {
        stepNumber: 2,
        name: 'Fry lentils dry',
        description: 'You want to burn them a little.'
      },
      {
        stepNumber: 3,
        name: 'Add cucumber',
        description: 'Throw in the cucumber and fry it for 1 hour.'
      }
    ]
  },

  // RECEPT 7

  {
    id: '6649f6f389ea6c8a536f950h',
    name: 'Idly',
    description: 'Steamed rice cakes',
    img: 'assets/images/idly.jpg',
    cookingTime: {
      hours: 1,
      minutes: 30
    },
    ingredients: [
      {
        name: 'Red lentils',
        quantity: {
          amount: 500,
          unit: Unit.Grams
        }
      },
      {
        name: 'Cucumber',
        quantity: {
          amount: 1,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Weird spices',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Throw some spices in the trash',
        description: 'Throw around 50 grams of weird spices in trash. This is a ritual.'
      },
      {
        stepNumber: 2,
        name: 'Fry lentils dry',
        description: 'You want to burn them a little.'
      },
      {
        stepNumber: 3,
        name: 'Add cucumber',
        description: 'Throw in the cucumber and fry it for 1 hour.'
      }
    ]
  },

  // RECEPT 8

  {
    id: '6649f6f389ea6c8a536f950i',
    name: 'Pani Puri',
    description: 'Spicy indian delicacy',
    img: 'assets/images/pani-puri.jpeg',
    cookingTime: {
      hours: 1,
      minutes: 30
    },
    ingredients: [
      {
        name: 'Red lentils',
        quantity: {
          amount: 500,
          unit: Unit.Grams
        }
      },
      {
        name: 'Cucumber',
        quantity: {
          amount: 1,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Weird spices',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Throw some spices in the trash',
        description: 'Throw around 50 grams of weird spices in trash. This is a ritual.'
      },
      {
        stepNumber: 2,
        name: 'Fry lentils dry',
        description: 'You want to burn them a little.'
      },
      {
        stepNumber: 3,
        name: 'Add cucumber',
        description: 'Throw in the cucumber and fry it for 1 hour.'
      }
    ]
  },

  // RECEPT 9

  {
    id: '6649f6f389ea6c8a536f950cj',
    name: 'Laddo',
    description: 'Sweetness in a ball',
    img: 'assets/images/laddo.jpeg',
    cookingTime: {
      hours: 1,
      minutes: 30
    },
    ingredients: [
      {
        name: 'Red lentils',
        quantity: {
          amount: 500,
          unit: Unit.Grams
        }
      },
      {
        name: 'Cucumber',
        quantity: {
          amount: 1,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Weird spices',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Throw some spices in the trash',
        description: 'Throw around 50 grams of weird spices in trash. This is a ritual.'
      },
      {
        stepNumber: 2,
        name: 'Fry lentils dry',
        description: 'You want to burn them a little.'
      },
      {
        stepNumber: 3,
        name: 'Add cucumber',
        description: 'Throw in the cucumber and fry it for 1 hour.'
      }
    ]
  }
]
