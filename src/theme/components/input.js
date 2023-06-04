import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const search = definePartsStyle({
  field: {
    "background": "#383733",
    "border": "1px solid #797670",
    "borderRadius": "4px",
    color: "#FFFFFF",

    // Let's also provide dark mode alternatives
    _dark: {
      borderColor: 'gray.600',
      background: 'gray.800',
    },
  },
  addon: {
    "background": "#383733",
    "border": "1px solid #797670",
    "borderRadius": "4px",
    color: 'white',

    _dark: {
      "background": "#383733",
      "border": "1px solid #797670",
      "borderRadius": "4px",
      color: 'white',
    },
  },
})

export const inputTheme = defineMultiStyleConfig({
  variants: { search },
})

  // Now we can use the new `pill` variant
