"use client";

import AlertMessage from "@/components/AlertMessage";
import Button from "@/components/Button";
import FooterLandingPage from "@/components/FooterLandingPage";
import { useEffect, useState } from "react";

const forms = {
  login: {
    id: "loginForm",
    title: "Log In",
    fields: [
      {
        label: "Nama Pengguna",
        type: "text",
        placeholder: "Nama Pengguna",
        name: "username",
      },
      {
        label: "Kata Sandi",
        type: "password",
        placeholder: "Kata Sandi",
        name: "password",
      },
    ],
    footerText: "Belum punya akun?",
    toogleTarget: "signup",
  },
  signup: {
    id: "signupForm",
    title: "Sign Up",
    fields: [
      {
        label: "Nama Lengkap",
        type: "text",
        placeholder: "Nama Lengkap",
        name: "fullname",
      },

      {
        label: "Nama Pengguna",
        type: "text",
        placeholder: "Nama Pengguna",
        name: "username",
      },
      {
        label: "Email",
        type: "email",
        placeholder: "Email",
        name: "email",
      },
      {
        label: "Kata Sandi",
        type: "password",
        placeholder: "Kata Sandi",
        name: "password",
      },
    ],
    footerText: "Sudah punya akun?",
    toogleTarget: "login",
  },
};

export default function login() {
  const [activeForm, setActiveForm] = useState("login");
  const [formData, setFormData] = useState({});
  const [alert, setAlert] = useState({ type: "", message: "" });

  useEffect(() => {
    setFormData({});
  }, [activeForm]);

  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => {
        setAlert({ type: "", message: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const { id, title, fields, footerText, toogleTarget } = forms[activeForm];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeForm === "signup") {
      localStorage.setItem("user", JSON.stringify(formData));
      setAlert({
        type: "success",
        message: "Akun berhasil dibuat. Silakan login.",
      });
      setActiveForm("login");
    } else {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (
        savedUser &&
        savedUser.username === formData.username &&
        savedUser.password === formData.password
      ) {
        setAlert({ type: "success", message: "Login berhasil!" });
        setTimeout(() => {
          window.location.href = "/Home";
        }, 1000);
      } else if (!savedUser) {
        setAlert({
          type: "error",
          message: "User tidak ditemukan! Silakan sign up.",
        });
      } else {
        setAlert({
          type: "error",
          message: "Username atau password tidak sesuai.",
        });
      }
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <header className="sticky top-0 z-50 bg-white px-4 py-3 flex justify-between items-center">
        <h1 className="uppercase font-rubikmaps text-5xl text-blue">Neraki</h1>
      </header>

      <section
        className="flex flex-col items-center gap-5 my-5"
        aria-label={title}
      >
        <h2 className="text-5xl text-blue text-center">
          <span className="font-semibold">Welcome to </span>
          <span className="font-rubikmaps uppercase">Neraki</span>
        </h2>
        {alert.message && (
          <div className="w-2/3 md:w-1/2 lg:w-1/3">
            <AlertMessage type={alert.type} message={alert.message} />
          </div>
        )}
        <div key={id} className="w-2/3 md:w-1/2 lg:w-1/3 flex flex-col gap-2.5">
          <form
            id={id}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
            aria-label={`Form ${title}`}
          >
            {fields.map(({ label, type, placeholder, name }) => (
              <div key={name} className="flex flex-col gap-1.5">
                <label htmlFor={name} className="text-blue">
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={formData[name] || ""}
                  onChange={handleChange}
                  required
                  className="w-full outline-none px-4 py-3 border-2 border-blue rounded-full"
                />
              </div>
            ))}
            <Button label={title} variant="blue" className="w-full py-3" />
          </form>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveForm(toogleTarget);
                setFormData({});
              }}
              className="text-blue opacity-40 text-center hover:underline"
              aria-label="Toggle form"
            >
              {footerText}
            </button>
          </div>
        </div>
      </section>

      <footer>
        <FooterLandingPage />
      </footer>
    </main>
  );
}
