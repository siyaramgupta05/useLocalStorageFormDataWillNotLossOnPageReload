import React, { useEffect, useState } from "react";
function getSavedValue(key, value) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  return value;
}
function useLocalStorage(key, value) {
  const [updatedvalue, setUpdatedvalue] = useState(() => {
    return getSavedValue(key, value);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(updatedvalue));
  }, [updatedvalue]);

  return [updatedvalue, setUpdatedvalue];
}
export default useLocalStorage;
