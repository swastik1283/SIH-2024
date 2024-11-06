import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { PDAApi } from "../api";
import { setLoading } from "../../slices/authSlice";


export const formSave = async ( PDAformData,dispatch) => {
    // dispatch(setLoading(true));
    const toastId = toast.loading("Loading ...");
  
    try {

      const response = await apiConnector("POST", PDAApi.Post_PDAForm_Save_API, {
        PDAformData});
      console.log(PDAformData);
      toast.success("Form Data Save Succesfully");
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
  
