import { toast } from "react-hot-toast"
import { setUser } from "../../slices/profileSlices";
import { userApi } from "../api";
import { setLoading } from "../../slices/authSlice";
import { apiConnector } from "../apiConnector";
// import { logout } from "./authServices";


export const getCurrentUser = async (token, dispatch, navigate) => {
  const toastId = toast.loading('Loading ...');
  setLoading(true);

  try {
    const response = await apiConnector('GET', userApi.GET_CURRENT_LOGGED_USER_API, null,
      {
        'Authorization': `Bearer ${token}`
      });
    dispatch(setUser(response.data.data));
  } catch (error) {
      toast.error('Error message:', error.message);
    }
  
  setLoading(false);
  toast.dismiss(toastId);
}


// Get Instructor Dashboard data of a Instructor
export const getInstructorDashboardData = async (token, navigate) => {
  const toastId = toast.loading('Loading ...');
  let result = null;
  try {
    const response = await apiConnector('GET', userApi.GET_GET_INSTRUCTOR_DASHBOARD_DATA_API, null,
      {
        Authorization: `Bearer ${token}`
      });
    result = response.data?.data;
  } catch (error) {
    toast.error('Could not get user details, Login Again')
    // navigate('/dashboard/my-courses'); // TODO - uncomment it
  }
  toast.dismiss(toastId);
  return result;
}
