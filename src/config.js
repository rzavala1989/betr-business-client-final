export const API_BASE_URL =
window.location.href.indexOf("localhost") > -1
  ? "http://localhost:8080/api"
  : "https://hidden-springs-67954.herokuapp.com/api";