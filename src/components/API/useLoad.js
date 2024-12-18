import { useState, useEffect } from "react";
import API from "../API/API.js";

const useLoad = (loadEndpoint) => {
  //State--------------------------------
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Loader--------------------------------
  const loadRecords = async (endpoint) => {
    const response = await API.get(endpoint);
    if (response.isSuccess) setRecords(response.result);
    setIsLoading(false);
  };

  useEffect(() => {
    loadRecords(loadEndpoint);
  }, []);
  //Return--------------------------------
  return [records, setRecords, isLoading, loadRecords];
};

export default useLoad;
