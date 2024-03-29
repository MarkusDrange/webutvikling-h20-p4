import React, { useState, useContext, useEffect } from 'react';
import { View, Switch, StyleSheet } from "react-native";

interface filterProps{
  setSort:(a: string)=> void;
  setSortByGoals:(a: boolean) => void;
  setSortByName:(a: boolean) => void;
  sortByName: boolean;
  sortByGoals: boolean;
}


export const GoalsSort: React.FC<filterProps> = (props: filterProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  

  function checkEnable() {
    toggleSwitch()
    if(!isEnabled){
      props.setSort('goalsScored');
      props.setSortByName(false);
      props.setSortByGoals(true);
      
    }
    else{
      props.setSort('');
      props.setSortByName(false);
      props.setSortByGoals(false);
    }
  }

  useEffect(() => {
    if (props.sortByName && isEnabled){
      toggleSwitch()
    }
    else if (props.sortByGoals && !isEnabled){
      toggleSwitch()
    }
  })

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#19ca42" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3D195B"
        onValueChange={checkEnable}
        value={isEnabled}
      />
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  }
});
