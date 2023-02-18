import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      brand: {
        primary: string;
        secondary: string;
        muted: string;
      };
      ui: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        disabled: string;
        error: string;
        success: string;
      };
      bg: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        inverse: string;
        error: string;
        success: string;
      };
    };
    spacing: {
      none: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
