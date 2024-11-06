import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { authApi } from "../api";
import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlices";

export const login = async (email, password, dispatch, navigate) => {
  dispatch(setLoading(true));
  const toastId = toast.loading("Loading ...");

  try {
    const response = await apiConnector("POST", authApi.POST_LOGIN_USER_API, {
      email,
      password,
    });
    toast.success("Login Successful");
    dispatch(setToken(response.data.token));
    dispatch(setUser(response.data.user));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    navigate("/");
  } catch (error) {
    toast.error(error?.response?.data?.error);
  }

  toast.dismiss(toastId);
  dispatch(setLoading(false));
};

export const signUp = async (signUpData, dispatch, navigate) => {
  dispatch(setLoading(true));
  const toastId = toast.loading("Loading ...");

  try {
    console.log(signUpData);
    const response = await apiConnector(
      "POST",
      authApi.POST_SIGNUP_USER_API,
      signUpData
    );

    toast.success("SignUp Successful");
    dispatch(setToken(response.data.token));
    dispatch(setUser(response.data.user));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    navigate("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.error || "SignUp Failed");
    navigate("/register");
  }

  toast.dismiss(toastId);
  dispatch(setLoading(false));
};

export const sendOtp = async (email, dispatch, navigate) => {
  const toastId = toast.loading("Loading...");
  dispatch(setLoading(true));

  try {
    await apiConnector("POST", authApi.POST_SEND_OTP_API, {
      email,
    });
    toast.success("OTP sent successfully");
    navigate("/verify-email");
  } catch (error) {
    toast.error(error?.response?.data?.error || "SignUp Failed");
  }
  toast.dismiss(toastId);
  dispatch(setLoading(false));
};
