import { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import API from "../API/API.js";
import RenderCount from "../UI/RenderCount.js";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";
import ModuleList from "../entity/modules/ModuleList.js";
const ModuleListScreen = ({ navigation }) => {
  //Initialisations--------------------------
  const modulesEndpoint = "https://softwarehub.uk/unibase/api/modules";
  //State------------------------
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadModules = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsLoading(false);
    if (response.isSuccess) setModules(response.result);
  };
  useEffect(() => {
    loadModules(modulesEndpoint);
  }, []);
  //Handles------------------------
  const handleDelete = (deleteModule) =>
    setModules(modules.filter((module) => module.ModuleID !== deleteModule));

  const handleAdd = (module) => setModules([...modules, module]);

  const handleModify = (updatedModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID === updatedModule.ModuleID ? updatedModule : module
      )
    );

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };
  const onModify = (updatedModule) => {
    handleModify(updatedModule);
    navigation.navigate("ModuleListScreen");
  };

  const gotoViewScreen = (module) => {
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
  };
  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  //Views------------------------
  return (
    <Screen>
      <RenderCount />
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      {isLoading && <Text>Loading records ...</Text>}
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
