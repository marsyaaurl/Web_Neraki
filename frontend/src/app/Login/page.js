"use client";

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
        label: "Phone Number",
        type: "text",
        placeholder: "Nomor Telepon",
        name: "phonenum",
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

  useEffect(() => {
    setFormData({});
  }, [activeForm]);

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
      alert("Silakan login");
      setActiveForm("login");
    } else {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (
        savedUser &&
        savedUser.username === formData.username &&
        savedUser.password === formData.password
      ) {
        window.location.href = "/Profile";
      } else if (!savedUser) {
        alert("User tidak ditemukan! Silakan sign up.");
      } else {
        alert("Username atau password tidak sesuai.");
      }
    }
  };

  return (
    <main className=" min-h-screen flex flex-col  justify-between">
      <nav className="sticky top-0 z-50 bg-white shadow-sm px-4 py-3 flex justify-between items-center">
        <h1 className="uppercase font-rubikmaps text-5xl text-blue">Neraki</h1>
      </nav>

      <section className="flex flex-col items-center gap-5 my-5">
        <h1 className="text-5xl text-blue text-center ">
          <span className="font-semibold">Welcome to </span>
          <span className="font-rubikmaps uppercase">Neraki</span>
        </h1>

        <div key={id} className="w-2/3 md:w-1/2 lg:w-1/3 flex flex-col gap-2.5">
          <form className="flex flex-col gap-3" id={id} onSubmit={handleSubmit}>
            {fields.map(({ label, type, placeholder, name }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <label className="text-blue">{label}</label>
                <input
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={formData[name] || ""}
                  className="w-full outline-none px-4 py-3 border-2 border-blue rounded-full"
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <Button label={title} variant="blue" className="w-full py-3" />
          </form>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="text-blue opacity-40 text-center"
              onClick={() => {
                setActiveForm(toogleTarget);
                setFormData({});
              }}
            >
              {footerText}
            </a>
          </div>
        </div>
      </section>
      <FooterLandingPage />
    </main>
  );
}
