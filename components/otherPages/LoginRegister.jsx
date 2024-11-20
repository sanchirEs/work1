"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginRegister() {
  const router = useRouter();

  // State for login and registration forms
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: loginData.email,
      password: loginData.password,
    });
    if (result?.error) {
      setLoginError("Login failed. Please check your credentials.");
    } else {
     // Fetch session to check user role
     const res = await fetch("/api/auth/session");
     const session = await res.json();

     // Redirect based on user role
     if (session.user.role === "ADMIN") {
       router.push("/dashboard");
     } else {
       router.push("/");
     }
   }
  };

  // Handle register form submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null);
    setRegisterSuccess(false);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    });

    if (response.ok) {
      setRegisterSuccess(true);
      setLoginData({ email: registerData.email, password: "" });
    } else {
      const data = await response.json();
      setLoginError(data.message || "Registration failed. Please try again.");
    }
  };

  return (
    <section className="login-register container">
      <h2 className="d-none">Login & Register</h2>
      <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link nav-link_underscore active"
            id="login-tab"
            data-bs-toggle="tab"
            href="#tab-item-login"
            role="tab"
            aria-controls="tab-item-login"
            aria-selected="true"
          >
            Login
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link nav-link_underscore"
            id="register-tab"
            data-bs-toggle="tab"
            href="#tab-item-register"
            role="tab"
            aria-controls="tab-item-register"
            aria-selected="false"
          >
            Register
          </a>
        </li>
      </ul>
      <div className="tab-content pt-2" id="login_register_tab_content">
        <div
          className="tab-pane fade show active"
          id="tab-item-login"
          role="tabpanel"
          aria-labelledby="login-tab"
        >
          <div className="login-form">
            <form onSubmit={handleLoginSubmit} className="needs-validation">
              {loginError && <div className="alert alert-danger">{loginError}</div>}
              <div className="form-floating mb-3">
                <input
                  name="login_email"
                  type="email"
                  className="form-control form-control_gray"
                  placeholder="Email address *"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
                <label>Email address *</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  name="login_password"
                  type="password"
                  className="form-control form-control_gray"
                  placeholder="Password *"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
                <label>Password *</label>
              </div>

              <div className="d-flex align-items-center mb-3 pb-2">
                <div className="form-check mb-0">
                  <input
                    name="remember"
                    className="form-check-input form-check-input_fill"
                    type="checkbox"
                  />
                  <label className="form-check-label text-secondary">
                    Remember me
                  </label>
                </div>
                <Link href="/reset_password" className="btn-text ms-auto">
                  Lost password?
                </Link>
              </div>

              <button className="btn btn-primary w-100 text-uppercase" type="submit">
                Log In
              </button>

              <div className="customer-option mt-4 text-center">
                <span className="text-secondary">No account yet?</span>{" "}
                <a href="#register-tab" className="btn-text js-show-register">
                  Create Account
                </a>
              </div>
            </form>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="tab-item-register"
          role="tabpanel"
          aria-labelledby="register-tab"
        >
          <div className="register-form">
            <form onSubmit={handleRegisterSubmit} className="needs-validation">
              {registerSuccess && (
                <div className="alert alert-success">
                  Registration successful! You can now log in.
                </div>
              )}
              {loginError && <div className="alert alert-danger">{loginError}</div>}
              <div className="form-floating mb-3">
                <input
                  name="register_username"
                  type="text"
                  className="form-control form-control_gray"
                  placeholder="Username"
                  value={registerData.username}
                  onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                  required
                />
                <label>Username</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  name="register_email"
                  type="email"
                  className="form-control form-control_gray"
                  placeholder="Email address *"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  required
                />
                <label>Email address *</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  name="register_password"
                  type="password"
                  className="form-control form-control_gray"
                  placeholder="Password *"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  required
                />
                <label>Password *</label>
              </div>

              <p className="m-0">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>

              <button className="btn btn-primary w-100 text-uppercase" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
