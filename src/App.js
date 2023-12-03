import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn/SignIn';
import { CreateAccount } from './pages/CreateAccount/CreateAccount';
import { PasswordUpdate } from './pages/PasswordUpdate/PasswordUpdate';
import { Verify } from './pages/Verify/Verify';
import { VerificationCode } from './pages/VerificationCode/VerificationCode';
import { CampaignPage } from './pages/CampaignPage/CampaignPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signIn' element={<SignIn />} />
    <Route path='/createAccount' element={<CreateAccount />} />
    <Route path='/updatePassword' element={<PasswordUpdate />} />
    <Route path='/verifyIdentity' element={<Verify />} />
    <Route path='/verifyCode' element={<VerificationCode />} />
    <Route path='/campaign' element={<CampaignPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
