interface IRecipe {
  id: string
  name: string
  description: string
  img: string
  cookingTime: ICookingTime
  ingredients: IIngredient[]
  steps: IStep[]
}

interface ICookingTime {
  hours: number
  minutes: number
}

interface IIngredient {
  name: string
  quantity: IQuantity
}

interface IQuantity {
  amount: number
  unit: Unit
}

enum Unit {
  Grams = 'grams',
  Pieces = 'pieces'
}

interface IStep {
  stepNumber: number
  name: string
  description: string
}

export const recipeData: IRecipe[] = [
  {
    id: '6649f6e489ea6c8a536f950b',
    name: 'Daal',
    description:
      'A tasty dish with lentils, tomato and spices. It goes very fast to cook. It is a refreshing dish and contains nutrious things for the belly.',
    img: 'assets/images/tablet-and-food.png',
    cookingTime: {
      hours: 0,
      minutes: 15
    },
    ingredients: [
      {
        name: 'Red lentils',
        quantity: {
          amount: 100,
          unit: Unit.Grams
        }
      },
      {
        name: 'Tomatoes',
        quantity: {
          amount: 2,
          unit: Unit.Pieces
        }
      },
      {
        name: 'Mustard seeds',
        quantity: {
          amount: 10,
          unit: Unit.Grams
        }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        name: 'Fry tomatoes',
        description: 'Put tomatoes in hot pan medium heat.'
      },
      {
        stepNumber: 2,
        name: 'Throw in lentils',
        description: 'Wash the lentils and throw in the pan with tomatoes.'
      },
      {
        stepNumber: 3,
        name: 'Add mustard seeds',
        description: 'Throw mustard seeds in pan until they pop.'
      }
    ]
  },
  {
    id: '6649f6f389ea6c8a536f950c',
    name: 'Blabla dish',
    description:
      'Lorem sakogkao fa lsmalsmfl amdfma slkm flkasmklfmas kfmalks mfkasmflkasnfkansk fmaslkfm alsmfklasmnfkl nakfnas klfm klasmf',
    img: 'assets/images/tablet-and-food.png',
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
