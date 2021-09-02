import Router from './router'
import BreakpointProvider from './providers/BreakpointProvider'

const App = () => {
  return (
    <div id='app'>
      <BreakpointProvider>
        <Router />
      </BreakpointProvider>
    </div>
  );
}

export default App;
