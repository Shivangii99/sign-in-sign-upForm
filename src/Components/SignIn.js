import { SignInForm } from "./SignInForm";
import { Header } from "./Header";
import '../App.css'

export const SignIn = ()=>{
    return(
        <div className="main-section">
            <Header/>
            <SignInForm/>
        </div>
    )
}