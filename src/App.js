import PublicLayout from "./layouts/PublicLayaout";
import PrivateLayout from "./layouts/PrivateLayout";
import Index from "./pages/Index";
import ProductosAdmin from "./pages/admin/Productos";
import VentasAdmin from "./pages/admin/Ventas";
import UsuariosAdmin from "./pages/admin/Usuarios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/styles.css";
import "font-awesome/css/font-awesome.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      domain="misiontic-eucalipto.us.auth0.com"
      clientId="o6ZHWXgPtdoEsIVJ7n4CAKvSz3tuU5OJ"
      redirectUri="https://fast-fjord-96164.herokuapp.com/admin/productos"
      audience="api-autenticacion-eucalipto"
    >
      <div className="App">
        <Router>
          <Switch>
            <Route path={["/admin/productos", "/admin/ventas", "/admin/usuarios"]}>
              <PrivateLayout>
                <Switch>
                  <Route path="/admin/productos">
                    <ProductosAdmin />
                  </Route>
                  <Route path="/admin/ventas">
                    <VentasAdmin />
                  </Route>
                  <Route path="/admin/usuarios">
                    <UsuariosAdmin />
                  </Route>
                </Switch>
              </PrivateLayout>
            </Route>
            <Route path={["/"]}>
              <PublicLayout>
                <Route path="/">
                  <Index />
                </Route>
              </PublicLayout>
            </Route>
          </Switch>
        </Router>
      </div>
    </Auth0Provider>
  );
}

export default App;
