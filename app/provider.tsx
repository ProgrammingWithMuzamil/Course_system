"use client";

import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { useRef } from "react";
import { addId, viewId } from "../lib/features/course/Couresdet";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();
  const persistorRef = useRef<any>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(addId(""));
    storeRef.current.dispatch(viewId());
    persistorRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistorRef.current}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
