import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "routes/Coin";
import Coins from "routes/Coins";

function Router() {
  // react-router-dom 5버전의 switch 방식. 6버전에서는 switch를 사용하지 않는다.
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
