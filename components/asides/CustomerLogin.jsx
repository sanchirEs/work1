"use client";

import { closeModalUserlogin } from "@/utlis/aside";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function CustomerLogin() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  useEffect(() => {
    const pageOverlay = document.getElementById("pageOverlay");

    pageOverlay.addEventListener("click", closeModalUserlogin);

    return () => {
      pageOverlay.removeEventListener("click", closeModalUserlogin);
    };
  }, []);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: loginData.email,
      password: loginData.password,
    });
    if (result.ok) {
      router.push("/account_dashboard"); // Redirect after login
      closeModalUserlogin();
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    });
    const data = await response.json();
    if (response.ok) {
      alert("Registration successful! You can now log in.");
      setIsLogin(true); // Switch to login view
      setLoginData({ email: registerData.email, password: "" });
    } else {
      alert(data.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div
      id="userAside"
      className="aside aside_right overflow-hidden customer-forms "
    >
      <div className="customer-forms__wrapper d-flex position-relative">
        {isLogin ? (
          <div className="customer__login">
            <div className="aside-header d-flex align-items-center">
              <h3 className="text-uppercase fs-6 mb-0">Login</h3>
              <button
                onClick={closeModalUserlogin}
                className="btn-close-lg js-close-aside ms-auto"
              />
            </div>
            <form onSubmit={handleLoginSubmit} className="aside-content">
              <div className="form-floating mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control form-control_gray"
                  placeholder="name@example.com"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  required
                />
                <label>Username or email address *</label>
              </div>
              <div className="form-label-fixed mb-3">
                <label className="form-label">Password *</label>
                <input
                  name="password"
                  className="form-control form-control_gray"
                  type="password"
                  placeholder="********"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                />
              </div>
              <button
                className="btn btn-primary w-100 text-uppercase"
                type="submit"
              >
                Log In
              </button>
              <div className="customer-option mt-4 text-center">
                <span className="text-secondary">No account yet?</span>{" "}
                <a
                  href="#"
                  onClick={() => setIsLogin(false)}
                  className="btn-text js-show-register"
                >
                  Create Account
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="customer__register">
            <div className="aside-header d-flex align-items-center">
              <h3 className="text-uppercase fs-6 mb-0">Create an account</h3>
              <button
                onClick={closeModalUserlogin}
                className="btn-close-lg js-close-aside ms-auto"
              />
            </div>
            <form onSubmit={handleRegisterSubmit} className="aside-content">
              <div className="form-floating mb-4">
                <input
                  name="username"
                  type="text"
                  className="form-control form-control_gray"
                  placeholder="Username"
                  value={registerData.username}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, username: e.target.value })
                  }
                  required
                />
                <label>Username</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  name="email"
                  type="email"
                  className="form-control form-control_gray"
                  placeholder="user@company.com"
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                  required
                />
                <label>Email address *</label>
              </div>
              <div className="form-label-fixed mb-4">
                <label className="form-label">Password *</label>
                <input
                  name="password"
                  className="form-control form-control_gray"
                  type="password"
                  placeholder="*******"
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, password: e.target.value })
                  }
                  required
                />
              </div>
              <button
                className="btn btn-primary w-100 text-uppercase"
                type="submit"
              >
                Register
              </button>
              <div className="customer-option mt-4 text-center">
                <span className="text-secondary">Already have an account?</span>{" "}
                <a
                  href="#"
                  onClick={() => setIsLogin(true)}
                  className="btn-text js-show-login"
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
