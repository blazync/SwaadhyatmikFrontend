import parseJwt from "../util/jwt";

// Function to get JWT configuration or false if not logged in
function getJwtConfig() {
  const encodedToken = localStorage.getItem("token");

  if (encodedToken) {
    try {
      // Parse the JWT to get the data
      const token = parseJwt(encodedToken);

      // Return an object with JWT data if the token could be parsed
      return {
        token: encodedToken,
        userId: token.userId,
        name: token.name,
        role: token.role,
      };
    } catch (error) {
      // Log the error or handle it as per your application's error handling policy
      console.error("Failed to parse JWT:", error);
      return false;
    }
  } else {
    // Return false if no token is found
    return false;
  }
}

export default getJwtConfig;