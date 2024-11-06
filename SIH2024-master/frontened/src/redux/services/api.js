// const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL
const BASE_URL = "http://localhost:4000/api/v1"

// AUTHENTICATION API
export const authApi = {
  POST_SEND_OTP_API: BASE_URL + '/auth/sendotp',
  POST_SIGNUP_USER_API: BASE_URL + '/auth/signup',
  POST_LOGIN_USER_API: BASE_URL + '/auth/login',
  POST_LOGOUT_USER_API: BASE_URL + '/auth/logout',
//   GET_GET_ME_API: BASE_URL + '/auth/getme',
//   PUT_CHANGE_PASSWORD_API: BASE_URL + '/auth/changepassword',
//   POST_FORGOT_PASSWORD_API: BASE_URL + '/auth/forgotpassword',
//   PUT_RESET_PASSWORD_API: BASE_URL + '/auth/resetpassword',
//   POST_CREATE_ADMIN_API: BASE_URL + '/auth/createadmin',
}
export const PDAApi = {
  Post_PDAForm_Save_API : BASE_URL + '/pda/register'
}

// USER API
export const userApi = {
  // GET_GET_ALL_USERS_API: BASE_URL + '/users',
  // GET_GET_USER_API: BASE_URL + '/users/getuser', // /userId
  // PUT_CHANGE_AVATAR_API: BASE_URL + '/users/changeavatar',
  // GET_GET_ENROLLED_COURSES_API: BASE_URL + '/users/getenrolledcourses',
  // GET_GET_CREATED_COURSES_API: BASE_URL + '/users/getcreatedcourses',
  GET_GET_INSTRUCTOR_DASHBOARD_DATA_API: BASE_URL + '/users/getinstructordashboarddata',
  // GET_GET_ALL_REVIEWS_BY_USER_API: BASE_URL + '/users/getallreviews',
  // DELETE_DELETE_CURRENT_USER_API: BASE_URL + '/users/deletecurrentuser',
  GET_CURRENT_LOGGED_USER_API: BASE_URL + '/users/currentuser',
}
