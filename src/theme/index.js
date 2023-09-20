import { extendTheme } from "@chakra-ui/react";
import { cardTheme } from "./components/card";
import { Button } from './components/button';
import { inputTheme } from './components/input';
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors, components: { Card: cardTheme, Button, Input: inputTheme } });
export default theme;
