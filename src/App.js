import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Card,
  Heading,
  View,
  withAuthenticator,
  Image,
} from "@aws-amplify/ui-react";

function App({signOut}) {
  return(
  <View className="App">
    <Card>
      <Image src={logo} className="App-logo" alt="logo" />
      <Heading level={1}>We now have Auth!</Heading>
    </Card>
      
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
