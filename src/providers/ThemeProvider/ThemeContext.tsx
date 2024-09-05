import React, { createContext, useState, useContext } from 'react';
import {Pressable, Text} from 'react-native';

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  colors: ColorsData;
}

export interface ColorsData {
  background: string;
  text: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
/** implement the theme provider **/
return (<></>);
};

export const ThemeToggleButton: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <Pressable
      style={{
        backgroundColor: isDarkTheme ? darkColors.background : lightColors.background,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        //drop shadow
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,
        borderRadius: 10,
      }}
      onPress={toggleTheme}>
      <Text style={{color: isDarkTheme ? darkColors.text : lightColors.text}}>
        {`Toggle Theme ${isDarkTheme ? 'Light' : 'Dark'}`}
      </Text>
    </Pressable>
  );
};

const lightColors = {
  background: '#F5F5F5',
  text: '#333',
};

const darkColors = {
  background: '#333',
  text: '#F5F5F5',
};
