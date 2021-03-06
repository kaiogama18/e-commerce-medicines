import { BreakpointProvider, Breakpoint } from 'react-socks';
import { Search, Navbar, Footer } from '..';

const Layout = ({ children }) => (
  <>
    <main>
      <BreakpointProvider>
        <Navbar />
        <Breakpoint small down>
          <Search />
        </Breakpoint>
        {children}
        <Footer />
      </BreakpointProvider>
    </main>
  </>
);

export default Layout;
