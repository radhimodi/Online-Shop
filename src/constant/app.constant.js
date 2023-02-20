export const Base_url = "https://tznwvelv.directus.app";
export const registerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzNzkxOWNhLWMxZDAtNDhjOC1hZTMwLTdjZjc1YmNhNzNhMSIsInJvbGUiOiI3MTkxZDVlZS00Nzg4LTRjMDItYWMxMy02MDk2NjllZmU1OTUiLCJhcHBfYWNjZXNzIjp0cnVlLCJhZG1pbl9hY2Nlc3MiOnRydWUsImlhdCI6MTY3NjcwNzk1MSwiZXhwIjoxNjc2NzA4ODUxLCJpc3MiOiJkaXJlY3R1cyJ9.f4SKXBGWKNbVzEcG2IQ5puaOIbh6tY5n6yV86IsTuyQ";
export const Access_Token = localStorage.getItem("accessToken");
export const emailPattern = new RegExp(
  /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.?)+\.[a-zA-Z]{2,}$/
);
export const passwordPattern = new RegExp(
  /^(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])((?=.*[0-9])|(?=.*[!@#$%^&*]))(?=.{8,})/
);
