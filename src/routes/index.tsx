import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

import { UseAppThemeContext } from "../shared/contexts";

const appRoutes = () => {
  const { toggleTheme } = UseAppThemeContext();
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toggleTheme}
          >
            Teste
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};

export default appRoutes;
