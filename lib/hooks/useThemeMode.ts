import { useEffect, useState } from 'react'
import createPersistedState from 'use-persisted-state'

import { darkTheme, lightTheme, ThemeType } from '../../styles/theme'

export interface ThemeModeResType {
    isLightMode: boolean
    toggleThemeMode: () => void
    theme: ThemeType
}

const usePerstedThemeMode = createPersistedState<boolean>('isLightMode')

/**
 * Handles setting and getting theme state
 * @returns isLightMode, toggleThemeMode, theme
 */
const useThemeMode = (): ThemeModeResType => {
    const [isLightMode, setIsLightMode] = usePerstedThemeMode(false)
    const [theme, setTheme] = useState(darkTheme)

    useEffect(() => {
        setTheme(isLightMode ? lightTheme : darkTheme)
    }, [isLightMode])

    const toggleThemeMode = () => setIsLightMode((current) => !current)

    return {
        isLightMode,
        toggleThemeMode,
        theme,
    }
}

export { useThemeMode }
