import React, { useState, useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

const AuthPage = () => {
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const auth = useContext(AuthContext);

  useEffect(() => {
    message(error, "error");
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message, "success");
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1 className="purple-text">Exam</h1>
        <div className="card grey lighten-2">
          <div className="card-content white-text">
            <span className="card-title black-text">Authorization</span>
            <div>
              <div className="input-field">
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={changeHandler}
                  value={form.email}
                />
                <label htmlFor="email" className="black-text">
                  Email
                </label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={changeHandler}
                  value={form.password}
                />
                <label htmlFor="password" className="black-text">
                  Password
                </label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              disabled={loading}
              className="btn purple darken-4"
              style={{ marginRight: 10 }}
              onClick={loginHandler}
            >
              Login
            </button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
