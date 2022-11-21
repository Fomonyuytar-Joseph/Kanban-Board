import React from "react";
import { AppContainer } from "./styles";
import Column from "./components/Column";
import Card from "./components/Card";
import AddNewItem from "./components/AddNewItem";
import { useAppState } from "./context/AppStateContext";

const App: React.FC = () => {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column  id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem 
      toggleButtonText="+ Add another list" 
      onAdd={(text)=>dispatch({type:"ADD_LIST",payload:text})} 
      
      
      />
    </AppContainer>
  );
};

export default App;
