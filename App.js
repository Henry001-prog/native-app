import React from "react";
import { StatusBar } from "react-native";
import {LogBox} from 'react-native';
import Router from "./src/routes";
//LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Router />
    </>
  );
}
