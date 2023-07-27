import { Platform, StyleSheet } from "react-native";

const appTheme = {
  textColors: {
    main: "#202020",
    light: "#606060",
    contrast: "#f0f0f0",
    secondary: "#606060",
  },
  textProperties: {
    defaultSize: 16,
    smallSize: 14,
    largeSize: 20,
    headingSize: 20,
    fontFamily: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "system",
    }),
    fontWeight: "400",
    boldWeight: "700",
  },
  fontSizes: {
    body: 1
  },
  colors: {
    primary: "#2e93ff",
    primaryLight: "#82e2e3",
    secondary: "#202020",
    secondaryLight: "#9d9d9d",
    veryLight: "#e1e4e8",
    white: "#ffffff",
    error: "#831b0e",
  },
  smallImage: {
    height: 50,
    width: 50,
  },
  input: {
    inputHeight: 40,
  },
  circle: {
    height: 60,
    width: 60,
  },
};

export const style = StyleSheet.create({
  view: {
    padding: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: appTheme.colors.white,
    flex: 1,
  },
  buttonArea: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: appTheme.colors.primary,
    fontSize: appTheme.textProperties.defaultSize,
    color: appTheme.textColors.contrast,
    fontWeight: appTheme.textProperties.boldWeight,
    height: appTheme.input.inputHeight,
    flexGrow: 1,
    textAlign: "center",
    padding: 6,
    borderRadius: 5,
  },
});

export default appTheme;
