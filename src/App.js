import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Booking/Booking';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PagenotFound from './Pages/PagentFound/PagenotFound';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import AllService from './Pages/AllService/AllService';
import MyOrder from './Pages/MyOrder/MyOrder';
import Gallery from './Pages/Gallery/Gallery';
import ManageOrder from './Pages/ManageOrder/ManageOrder';


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

            <Route path="/allService">
              <Header></Header>
              <AllService></AllService>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/myorder">
              <Header></Header>
              <MyOrder></MyOrder>
              <Footer></Footer>
            </PrivateRoute>

            <PrivateRoute path="/manageorder">
              <Header></Header>
              <ManageOrder></ManageOrder>
              <Footer></Footer>
            </PrivateRoute>


            <Route path="/gallery">
              <Header></Header>
              <Gallery></Gallery>
              <Footer></Footer>
            </Route>

            <Route path="/login">
              <Header></Header>
              <Login></Login>
              <Footer></Footer>
            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <Header></Header>
              <Booking></Booking>
              <Footer></Footer>
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
