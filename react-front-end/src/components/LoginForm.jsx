import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-form mx-auto mt-8 p-6 bg-white rounded-lg shadow-md max-w-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Login to organize your trip</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input mt-1 block w-full border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input mt-1 block w-full border"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Sign in
        </button>
      </form>
      <p className="mt-4 text-gray-700 text-sm">No account? <a href="#" className="text-blue-500">Sign up here!</a></p>
    </div>
  );
};

export default LoginForm;
