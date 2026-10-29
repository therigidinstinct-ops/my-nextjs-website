"use client";

import { useState, type FormEvent } from "react";
import { RigidLogo } from "./RigidLogo";
import "./rigid-signin.css";

type Props = {
  /** Wire your real authentication here. By default nothing is sent anywhere. */
  onSubmit?: (email: string, password: string) => void;
};

export function RigidSignIn({ onSubmit }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (onSubmit) onSubmit(email, password);
    else setNotice("Demo page: no sign-in is connected, nothing was sent.");
  }

  return (
    <div className="rs-page">
      <main className="rs-card">
        <section className="rs-left">
          <RigidLogo />
          <h1 className="rs-title">Sign in</h1>
          <p className="rs-sub">
            with your Rigid Account to continue to Rigid Mail. This account will be available to
            other Rigid apps in the browser.
          </p>
        </section>

        <form className="rs-right" onSubmit={handleSubmit} noValidate>
          <label className="rs-field">
            <span className="rs-label">Email or phone</span>
            <input
              type="text"
              name="email"
              autoComplete="username"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <a className="rs-link rs-forgot" href="#forgot-email">
            Forgot email?
          </a>

          <label className="rs-field rs-password">
            <span className="rs-label">Enter your password</span>
            <input
              type={show ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label className="rs-show">
            <input type="checkbox" checked={show} onChange={(e) => setShow(e.target.checked)} />
            <span>Show password</span>
          </label>

          <p className="rs-guest">
            Not your computer? Use Guest mode to sign in privately.{" "}
            <a className="rs-link" href="#guest-mode">
              Learn more about using Guest mode
            </a>
          </p>

          {notice && (
            <p className="rs-notice" role="status">
              {notice}
            </p>
          )}

          <div className="rs-actions">
            <a className="rs-link rs-create" href="#create-account">
              Create account
            </a>
            <button type="submit" className="rs-next">
              Next
            </button>
          </div>
        </form>
      </main>

      <footer className="rs-footer">
        <label className="rs-lang">
          <select aria-label="Language" defaultValue="en-US">
            <option value="en-US">English (United States)</option>
          </select>
        </label>
        <nav>
          <a href="#help">Help</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </nav>
      </footer>
    </div>
  );
}
