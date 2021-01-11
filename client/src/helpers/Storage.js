const hasStorage = typeof window.Storage !== "undefined";

export const LoadFromLS = (Name, InitVal) =>
  hasStorage && window.localStorage.getItem(Name) !== null
    ? JSON.parse(window.localStorage.getItem(Name))
    : InitVal;
export const SetToLS = (Name, Value) => {
  if (hasStorage) {
    window.localStorage.setItem(Name, JSON.stringify(Value));
  }
};
