import React, { useState } from "react";
import "./App.css";
import "@ionic/react/css/core.css";

import {
  IonApp,
  IonButton,
  IonLabel,
  IonPage,
  setupIonicReact,
} from "@ionic/react";
import Switcher from "./Switcher";

setupIonicReact();

function App() {
  const [screen, setScreen] = useState(1);

  const renderTitleScreen = () => {
    return (
      <div style={{ marginTop: "4rem" }}>
        <IonLabel>Title Page (App Start)</IonLabel>
        <IonButton
          onClick={() => {
            setScreen(2);
          }}
        >
          Go to app
        </IonButton>
      </div>
    );
  };

  return (
    <IonApp>
      <IonPage>
        {screen === 1 && <>{renderTitleScreen()}</>}
        {screen === 2 && <Switcher />}
      </IonPage>
    </IonApp>
  );
}

export default App;
