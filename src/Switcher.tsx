import React, { useState } from "react";
import "./App.css";
import "@ionic/react/css/core.css";
import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonToggle,
} from "@ionic/react";
import { v4 as uuidv4 } from "uuid";

type ListType = "first" | "second";

const Switcher = () => {
  const [renderedList, setRenderedList] = useState<ListType>("first");

  const toggleRenderedList = () => {
    if (renderedList === "first") {
      setRenderedList("second");
    } else {
      setRenderedList("first");
    }
  };

  const renderItem = (key: number, itemText: string) => {
    return (
      <IonItem key={key}>
        <IonToggle />
        <IonLabel>{uuidv4()}</IonLabel>
      </IonItem>
    );
  };

  const renderFirstGroup = () => {
    return (
      <>
        {[...Array(1000).keys()].map((index) => {
          return <>{renderItem(index, index.toString())}</>;
        })}
      </>
    );
  };

  const renderSecondGroup = () => {
    return (
      <>
        {[...Array(1000).keys()].map((index) => {
          return <>{renderItem(200 - index, (200 - index).toString())}</>;
        })}
      </>
    );
  };

  return (
    <IonContent>
      <IonList style={{ marginTop: "32px" }}>
        <IonButton onClick={() => toggleRenderedList()}>
          Switch 1000 Items
        </IonButton>
        {renderedList === "first" ? renderFirstGroup() : renderSecondGroup()}
      </IonList>
    </IonContent>
  );
};

export default Switcher;
