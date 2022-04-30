import * as React from 'react';
import { StyledLayout } from './Layout.styled';

interface LayoutProps {
  children: Array<React.ReactElement>;
}

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
