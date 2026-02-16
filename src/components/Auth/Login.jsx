import React, { useState } from "react";

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('hello')
    setEmail("")
    setPassword("")
  }

  return (
    <div className="min-h-dvh bg-neutral-950 text-white flex lg:grid lg:grid-cols-2">

      {/* LEFT PANEL (desktop only) */}
      <div className="hidden lg:flex flex-col justify-between p-14 bg-neutral-900 border-r border-white/10">
        
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold tracking-tight leading-tight">
            Manage Employees
            <span className="block text-emerald-400">Without Chaos</span>
          </h1>

          <p className="text-neutral-400 max-w-md">
            Track attendance, performance and payroll in one unified dashboard.
            Built for speed, clarity and control.
          </p>
        </div>

        {/* fake stats */}
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-2xl font-semibold">2.4k</p>
            <p className="text-xs text-neutral-400">Companies</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-2xl font-semibold">98%</p>
            <p className="text-xs text-neutral-400">Retention</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-2xl font-semibold">24/7</p>
            <p className="text-xs text-neutral-400">Support</p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="
        flex w-full
        items-start pt-14 px-5
        sm:px-8
        lg:items-center lg:justify-center lg:p-6
      ">

        <div className="w-full max-w-md space-y-8">

          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              Welcome back
            </h2>
            <p className="text-neutral-400 text-sm">
              Enter your credentials to access dashboard
            </p>
          </div>

          <form onSubmit={submitHandler} className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm text-neutral-400">Email</label>
              <input
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent
                transition duration-200 placeholder:text-neutral-500"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <label className="text-neutral-400">Password</label>
                <button type="button" className="text-emerald-400 hover:underline">
                  Forgot?
                </button>
              </div>

              <input
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent
                transition duration-200 placeholder:text-neutral-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-500 font-medium text-black
              hover:bg-emerald-400 active:scale-[0.98] transition duration-150"
            >
              Sign in
            </button>

          </form>

          <p className="text-center text-sm text-neutral-400">
            New here? <span className="text-emerald-400 hover:underline cursor-pointer">Create account</span>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Login;
