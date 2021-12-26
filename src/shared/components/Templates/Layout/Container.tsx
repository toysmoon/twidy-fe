import React from 'react';
import useTheme, { colorList } from 'shared/hooks/useTheme';

interface ContainerProps {
  children: React.ReactNode;
  color?: string;
}

export default function Container({ children, color }: ContainerProps) {
  const theme = useTheme();
  const primaryColor = color ? colorList[color] : theme;
  return (
    <div className="h-full max-w-xl my-0 mx-auto box-border bg-transparent ">
      {children}
      <style jsx global>{`
        html,
        body {
          background-color: ${primaryColor};
          --colors-primary: ${primaryColor};
        }
      `}</style>
    </div>
  );
}
