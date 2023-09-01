import React, { ReactNode } from 'react';

interface WithLayoutProps {
  children: ReactNode;
}

const WithLayout: React.FC<WithLayoutProps> = ({ children }) => {
  return (
    <div>
        <nav>
          <a href="/">Home</a>
        </nav>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default WithLayout;
