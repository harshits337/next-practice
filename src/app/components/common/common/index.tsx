
import { Spinner } from "../spinner/Spinner";
import Toast from "../toast/Toast";
import AuthCheck from "./auth";

const CommonLayoutComponents = () =>{
    // const {userDetails} = useAuth();
    // console.log('userDetails:',userDetails);
    return (
        <>
            <Spinner />
            <Toast />
            <AuthCheck />
        </>
    )
}

export default CommonLayoutComponents;