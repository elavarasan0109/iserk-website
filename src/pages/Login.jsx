import { useState } from "react";

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="6" fill="#e05530"/>
    <path d="M7 20V8l5 7 5-7v12" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" fill="none"/>
    <circle cx="21" cy="9" r="2.5" fill="#fff"/>
  </svg>
);

function EyeIcon({ open }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  );
}

function PasswordInput({ id, placeholder }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        id={id}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        className="w-full h-[42px] bg-white border border-[#ddd] rounded-lg px-3 pr-10 text-sm text-[#111] outline-none focus:border-[#e05530] transition-colors font-[DM_Sans]"
      />
      <button
        type="button"
        onClick={() => setShow(s => !s)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#555] bg-transparent border-none cursor-pointer p-0"
        aria-label={show ? "Hide password" : "Show password"}
      >
        <EyeIcon open={show} />
      </button>
    </div>
  );
}

function SignInPanel({ onSwitch }) {
  return (
    <div>
      <h1 className="font-[Syne] font-extrabold text-[28px] text-[#111] mb-1">Sign In</h1>
      <p className="text-[13px] text-[#555] mb-7">
        Don't have an account?{" "}
        <button onClick={onSwitch} className="text-[#e05530] font-medium bg-transparent border-none cursor-pointer p-0 hover:underline">
          Sign Up
        </button>
      </p>

      <div className="mb-4">
        <label className="block text-[11px] font-medium text-[#333] mb-1.5 uppercase tracking-wide">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full h-[42px] bg-white border border-[#ddd] rounded-lg px-3 text-sm text-[#111] outline-none focus:border-[#e05530] transition-colors"
        />
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-1.5">
          <label className="text-[11px] font-medium text-[#333] uppercase tracking-wide">Password</label>
          <a href="#" className="text-[12px] text-[#e05530] font-medium hover:underline no-underline">Forgot Password?</a>
        </div>
        <PasswordInput id="pw-signin" placeholder="Password" />
      </div>

      <button
        type="button"
        className="w-full h-[46px] bg-[#e05530] hover:bg-[#c94523] active:scale-[0.98] border-none rounded-full text-white font-[Syne] font-bold text-[15px] cursor-pointer mt-1.5 transition-all tracking-wide"
      >
        Sign In
      </button>

      <div className="flex items-center gap-3 my-4 text-[#aaa] text-xs">
        <span className="flex-1 h-px bg-[#ddd]" />
        or
        <span className="flex-1 h-px bg-[#ddd]" />
      </div>

      <button
        type="button"
        className="w-full h-[44px] bg-white hover:bg-[#f9f9f9] border border-[#ddd] hover:border-[#bbb] rounded-full flex items-center justify-center gap-2.5 text-sm text-[#333] font-medium cursor-pointer transition-all"
      >
        <GoogleIcon />
        Sign in with Google
      </button>
    </div>
  );
}

function SignUpPanel({ onSwitch }) {
  const [agreed, setAgreed] = useState(false);
  return (
    <div>
      <h1 className="font-[Syne] font-extrabold text-[28px] text-[#111] mb-1">Sign Up</h1>
      <p className="text-[13px] text-[#555] mb-7">
        Have an account?{" "}
        <button onClick={onSwitch} className="text-[#e05530] font-medium bg-transparent border-none cursor-pointer p-0 hover:underline">
          Sign In
        </button>
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-[11px] font-medium text-[#333] mb-1.5 uppercase tracking-wide">First Name</label>
          <input type="text" placeholder="First Name" className="w-full h-[42px] bg-white border border-[#ddd] rounded-lg px-3 text-sm text-[#111] outline-none focus:border-[#e05530] transition-colors" />
        </div>
        <div>
          <label className="block text-[11px] font-medium text-[#333] mb-1.5 uppercase tracking-wide">Last Name</label>
          <input type="text" placeholder="Last Name" className="w-full h-[42px] bg-white border border-[#ddd] rounded-lg px-3 text-sm text-[#111] outline-none focus:border-[#e05530] transition-colors" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-[11px] font-medium text-[#333] mb-1.5 uppercase tracking-wide">City / Town</label>
        <input type="text" placeholder="Enter City/Town" className="w-full h-[42px] bg-white border border-[#ddd] rounded-lg px-3 text-sm text-[#111] outline-none focus:border-[#e05530] transition-colors" />
      </div>

      <div className="mb-4">
        <label className="block text-[11px] font-medium text-[#333] mb-1.5 uppercase tracking-wide">Mobile</label>
        <input type="tel" placeholder="Mobile" className="w-full h-[42px] bg-white border border-[#ddd] rounded-lg px-3 text-sm text-[#111] outline-none focus:border-[#e05530] transition-colors" />
      </div>

      <div className="mb-4">
        <label className="block text-[11px] font-medium text-[#333] mb-1.5 uppercase tracking-wide">Email</label>
        <input type="email" placeholder="Email" className="w-full h-[42px] bg-white border border-[#ddd] rounded-lg px-3 text-sm text-[#111] outline-none focus:border-[#e05530] transition-colors" />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-[11px] font-medium text-[#333] mb-1.5 uppercase tracking-wide">Password</label>
          <PasswordInput id="pw-signup" placeholder="Password" />
        </div>
        <div>
          <label className="block text-[11px] font-medium text-[#333] mb-1.5 uppercase tracking-wide">Confirm Password</label>
          <PasswordInput id="pw-confirm" placeholder="Confirm password" />
        </div>
      </div>

      <label className="flex items-start gap-2 mb-3 cursor-pointer">
        <input
          type="checkbox"
          checked={agreed}
          onChange={e => setAgreed(e.target.checked)}
          className="mt-0.5 w-3.5 h-3.5 accent-[#e05530] shrink-0"
        />
        <span className="text-[12px] text-[#555] leading-relaxed">
          By signing up you agree to our{" "}
          <a href="#" className="text-[#e05530] hover:underline">Terms &amp; Conditions</a>
          {" "}and{" "}
          <a href="#" className="text-[#e05530] hover:underline">Privacy Policy</a>
        </span>
      </label>

      <button
        type="button"
        className="w-full h-[46px] bg-[#e05530] hover:bg-[#c94523] active:scale-[0.98] border-none rounded-full text-white font-[Syne] font-bold text-[15px] cursor-pointer mt-1 transition-all tracking-wide"
      >
        Create Account
      </button>

      <div className="flex items-center gap-3 my-4 text-[#aaa] text-xs">
        <span className="flex-1 h-px bg-[#ddd]" />
        or sign up with
        <span className="flex-1 h-px bg-[#ddd]" />
      </div>

      <button
        type="button"
        className="w-full h-[44px] bg-white hover:bg-[#f9f9f9] border border-[#ddd] hover:border-[#bbb] rounded-full flex items-center justify-center gap-2.5 text-sm text-[#333] font-medium cursor-pointer transition-all"
      >
        <GoogleIcon />
        Sign up with Google
      </button>
    </div>
  );
}

export default function NukePCAuth() {
  const [tab, setTab] = useState("signin");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .nukepc-left::before {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -60px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(192,57,32,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>

      <div className="flex min-h-screen items-center justify-center bg-[#e8e7e5] p-4">
        <div className="flex w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>

          {/* Left panel */}
          <div className="nukepc-left w-[40%] bg-[#0d0d0d] p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="flex items-center gap-2 mb-12">
              <LogoIcon />
              <span className="font-[Syne] font-extrabold text-[15px] text-white tracking-[1px]">NUKEPC</span>
            </div>
            <h1 className="font-[Syne] font-extrabold text-[32px] text-white leading-tight mb-2">
              Welcome Back! 👋
            </h1>
            <p className="text-[13px] font-medium text-[#e05530] mb-5 tracking-[0.3px]">
              Ready to customize your dream PC?
            </p>
            <p className="text-[13px] text-[#888] leading-relaxed max-w-[280px]">
              Log in to access your account and continue building the perfect setup. Our tools make it easy to select components and configure your PC just the way you want it. If you're new, create an account and start your journey with us today!
            </p>
          </div>

          {/* Right panel */}
          <div className="flex-1 bg-[#f5f4f2] p-10 overflow-y-auto">
            {/* Tabs */}
            <div className="flex bg-[#e8e7e5] rounded-lg p-1 mb-7">
              {["signin", "signup"].map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 h-[34px] rounded-md text-[13px] font-medium cursor-pointer border-none transition-all ${
                    tab === t
                      ? "bg-white text-[#111] shadow-sm"
                      : "bg-transparent text-[#666]"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {t === "signin" ? "Sign In" : "Sign Up"}
                </button>
              ))}
            </div>

            {tab === "signin" ? (
              <SignInPanel onSwitch={() => setTab("signup")} />
            ) : (
              <SignUpPanel onSwitch={() => setTab("signin")} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}