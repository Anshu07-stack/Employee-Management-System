import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className="min-h-dvh bg-neutral-950 text-white flex flex-col md:flex-row">
      
      {/* LEFT PANEL  */}
      <div className="w-full md:w-1/2.5 flex flex-col justify-between p-5 sm:p-10 md:p-8 lg:p-10 bg-neutral-900 md:border-r border-white/10 min-h-[50vh] md:min-h-screen">
        
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            Manage Employees
            <span className="block text-emerald-400 mt-1">Without Chaos</span>
          </h1>

          <p className="text-neutral-400 max-w-md text-sm sm:text-base">
            Track attendance, performance and payroll in one unified dashboard.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <p className="text-xl font-semibold">2.4k</p>
            <p className="text-xs text-neutral-400">Companies</p>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <p className="text-xl font-semibold">98%</p>
            <p className="text-xs text-neutral-400">Retention</p>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <p className="text-xl font-semibold">24/7</p>
            <p className="text-xs text-neutral-400">Support</p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-6 md:p-8 min-h-[50vh] md:min-h-screen">
        
        <div className="w-full max-w-sm space-y-5">
          
          {/* Welcome Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">Welcome back</h2>
            <p className="text-neutral-400 text-sm mt-1">
              Enter credentials to access dashboard
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={submitHandler} className="space-y-4">

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm text-neutral-400">Email</label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10
                focus:outline-none focus:ring-2 focus:ring-emerald-500
                transition placeholder:text-neutral-500 text-sm"
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <label className="text-neutral-400">Password</label>
                <button type="button" className="text-emerald-400 text-xs">
                  Forgot?
                </button>
              </div>

              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10
                focus:outline-none focus:ring-2 focus:ring-emerald-500
                transition placeholder:text-neutral-500 text-sm"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-500 font-medium text-black
              hover:bg-emerald-400 active:scale-[0.98] transition text-sm"
            >
              Sign in
            </button>

          </form>

          {/* Demo Info */}
          <div className="text-center space-y-1 pt-2">
            <p className="text-xs text-neutral-400">
              <span className="text-emerald-400">Admin:</span> admin@company.com / 123
            </p>
            <p className="text-xs text-neutral-500">
              <span className="text-emerald-400">Employee:</span> rahul.sharma@company.com / 123
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;