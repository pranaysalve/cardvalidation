import React, { useState, createContext } from "react";
import { CardValidity } from "./cardcheck.service";
export const CardCheckContext = createContext();

export const CardCheckContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validation, setValidation] = useState();

  const CheckCard = (body) => {
    CardValidity(body)
      .then((res) => {
        setIsLoading(true);
        setValidation(res.validity);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <CardCheckContext.Provider
      value={{
        isLoading,
        error,
        validation,
        CheckCard,
      }}
    >
      {children}
    </CardCheckContext.Provider>
  );
};
