import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, BookOpen, ArrowRight, AlertCircle } from 'lucide-react';

function Login() {
  const formRef = React.useRef(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(formData);
    const body = JSON.stringify(
      {
        userName: formData.username,
        password: formData.password
      }
    )
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    try {
      const response = await fetch("http://localhost:8080/public/login", {
        method: "POST",
        body: body,
        headers: myHeaders
      })
      if (response.ok) {
        const data = await response.text();
        const token = data;
        console.log(data);
        localStorage.setItem("token", token);
        // formRef.current.reset();
        setFormData({
          username: '',
          password: '',
          rememberMe: false
        })
        setIsLoading(false);
        navigate("/dashboard");
      }
      else {
        const errorMsg = await response.text();
        window.alert("Login failed : " + errorMsg);
        setIsLoading(false);
      }
    } catch (error) {
      window.alert("Network error while signup ❌");
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>
          <p className="mt-2 text-slate-600">
            Sign in to continue your journaling journey
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}

          <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
            {/* username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-2">
                Username
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  id="username"
                  name="username"
                  type="username"

                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}

                  className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"

                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-slate-700">
                  Remember me
                </label>
              </div>
              <Link
                to="#"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center space-x-2 bg-blue-600 
              hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium 
               active:scale-95 transition transform duration-150"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">Or Login with</span>
              </div>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center items-center pl-4 mt-5 ">
            <div className="border-2 border-slate-300 rounded-lg px-3 py-1 flex hover:shadow-2xl
                    active:scale-95  transform  transition-all duration-300">
              <img
                className="h-6"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGq_iOx_JxKOsJJbZxkZTngb9wXF1CWPmAOA&s"
                alt=""
              />
              <button className="ml-3 font-serif text-slate-500" onClick={() => (window.location.href = "http://localhost:8080/oauth2/authorization/google")}>
                Google
              </button>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-slate-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;