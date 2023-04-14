import { Sizes } from './namespace';

declare global {
  namespace Typography {
    type TypographySizes = keyof typeof Sizes;

    type Font = 'Lato' | 'Syne';

    type Style = {
      fontSize: string;
      lineHeight: string;
      fontWeight: number;
      fontFamily: Font;
    };

    type FontStyle = Record<TypographySizes, Style>;
  }
}

export {};
