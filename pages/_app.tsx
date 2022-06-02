import "../styles/globals.css";
import "../styles/App.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import store, { persistor } from "../store/store";
import { Provider } from "react-redux";
import UISkeleton from "../components/ui/skeleton/UISkeleton";
import UIModalContextProvider from "../components/ui/modal/UIModal.context";
import { PersistGate } from "redux-persist/integration/react";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [isGoingToAnotherPage, setIsGoingToAnotherPage] =
    useState<boolean>(false);

  useEffect(() => {
    const handleRouteChange = (path: string) => {
      setIsGoingToAnotherPage(true);
    };

    const handleRouteChanged = (path: string) => {
      setTimeout(() => setIsGoingToAnotherPage(false), 1000);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChanged);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChanged);
    };
  }, []);

  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} persistor={persistor}>
        <UIModalContextProvider>
          <Component {...pageProps} />
        </UIModalContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
