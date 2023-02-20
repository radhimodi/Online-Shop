import { ROUTE_HOME, ROUTE_SIGN_IN } from "../../containers/routes/routes";
import { useEffect } from "react";
import { Access_Token } from "../../constant/app.constant";

export default function NotFound() {
  useEffect(() => {
    if (!Access_Token) {
      window.location.href = ROUTE_SIGN_IN;
    } else {
      window.location.href = ROUTE_HOME;
    }
  }, []);

  return null;
}
