// Mock authentication service
// In a real application, this would connect to a backend authentication API

// Mock admin user
const adminUser = {
    username: 'admin',
    password: 'password123', // In a real app, passwords would never be stored in plain text
    role: 'admin'
  };
  
  // Local storage keys
  const TOKEN_KEY = 'auth_token';
  const USER_KEY = 'auth_user';
  
  /**
   * Login function
   * @param {string} username - The username
   * @param {string} password - The password
   * @param {boolean} rememberMe - Whether to remember the user
   * @returns {Promise} Promise that resolves with the user info or rejects with error
   */
  export const login = (username, password, rememberMe = false) => {
    return new Promise((resolve, reject) => {
      // Simulate API call with a small delay
      setTimeout(() => {
        // Validate credentials
        if (username === adminUser.username && password === adminUser.password) {
          // Generate a mock token
          const token = `mock_token_${Math.random().toString(36).substring(2)}`;
          
          // Store auth data in local storage or session storage based on rememberMe
          const storage = rememberMe ? localStorage : sessionStorage;
          
          // Store token and user info
          storage.setItem(TOKEN_KEY, token);
          storage.setItem(USER_KEY, JSON.stringify({
            username: adminUser.username,
            role: adminUser.role
          }));
          
          // Return user info
          resolve({
            username: adminUser.username,
            role: adminUser.role,
            token
          });
        } else {
          // Invalid credentials
          reject(new Error('Username atau password tidak valid'));
        }
      }, 1000); // Simulate network delay
    });
  };
  
  /**
   * Check if the user is logged in
   * @returns {boolean} True if the user is logged in
   */
  export const isLoggedIn = () => {
    return !!getToken();
  };
  
  /**
   * Get the authentication token
   * @returns {string|null} The token or null if not logged in
   */
  export const getToken = () => {
    // Check in both local and session storage
    return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
  };
  
  /**
   * Get the current user information
   * @returns {Object|null} The user object or null if not logged in
   */
  export const getCurrentUser = () => {
    // Check in both local and session storage
    const userJson = localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  };
  
  /**
   * Logout the current user
   */
  export const logout = () => {
    // Remove auth data from both storages
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
    
    // Reload page or redirect
    window.location.href = '/login';
  };
  
  /**
   * Request a password reset (mock)
   * @param {string} email - The email address for reset
   * @returns {Promise} Promise that resolves on success
   */
  export const requestPasswordReset = (email) => {
    return new Promise((resolve) => {
      // Simulate API call with a small delay
      setTimeout(() => {
        // Always resolves in this mock version
        resolve({ success: true, message: 'Instruksi reset password telah dikirim ke email Anda' });
      }, 1000);
    });
  };