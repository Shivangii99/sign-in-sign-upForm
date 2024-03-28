import { SignUpForm } from "./SignUpForm";
import { Header } from "./Header";
import '../App.css'

export const SignUp = ()=>{
    return(
        <div className="main-section">
            <Header/>
            <SignUpForm/>
        </div>
    )
}