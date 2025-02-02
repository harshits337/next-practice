"use client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";




export function AppProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <ReduxProvider store={store}>{children}</ReduxProvider>;
  }
