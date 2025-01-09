import { Theme } from '@/enums/theme'

export interface IThemeContextType {
  theme: Theme | string
  changeTheme: (theme: Theme | string) => void
}
