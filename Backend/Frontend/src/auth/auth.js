export const getToken = () => {
  localStorage.getItem("token");
};
export const removeToken = () => {
  console.log("hii");
  localStorage.removeItem("token");
};
export const saveToken = () => {
  let token;
  localStorage.setItem("token", token);
};
