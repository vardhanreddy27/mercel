export const saveUserData = (userData) => {
  return {
    type: "SAVE_USER_DATA",
    payload: userData,
  };
};
