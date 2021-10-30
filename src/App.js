import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Booking/Booking';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PagenotFound from './Pages/PagentFound/PagenotFound';

function App() {
  return (
    <div>

      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <PagenotFound></PagenotFound>
            </Route>

          </Switch>
        </Router >
      </AuthProvider>


    </div>


  );
}

export default App;
