import React, { ReactNode, ReactElement } from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { buildStore, RootState } from "store/store";

type RenderOptions = { preloadedState?: Partial<RootState>; store?: RootState };

function render(
  ui: ReactElement,
  { store, preloadedState, ...renderOptions }: RenderOptions = {}
) {
  store =
    store ||
    buildStore({
      preloadedState,
    });

  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
