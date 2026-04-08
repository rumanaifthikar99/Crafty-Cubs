import React, { useState } from 'react';
import { supabase, ALLOWED_EMAILS } from '../lib/supabase';
import { LOGO } from '../logo';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError('');

    if (!ALLOWED_EMAILS.includes(email.toLowerCase().trim())) {
      setError('This email is not authorised to access Crafty Cubs admin.');
      return;
    }

    setLoading(true);
    const { error: err } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    if (err) setError(err.message);
    setLoading(false);
  }

  return (
    <div className="login-page">
      <div className="login-card fi">
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <img src={LOGO} alt="Crafty Cubs" style={{ height: 72, width: 'auto', objectFit: 'contain', marginBottom: 14 }} />
          <div style={{ fontFamily: 'var(--fn)', fontWeight: 900, fontSize: 22, color: 'var(--navy)' }}>Crafty Cubs</div>
          <div style={{ fontSize: 13, color: 'var(--t2)', marginTop: 3 }}>Sign in to your admin panel</div>
        </div>

        <form onSubmit={handleLogin}>
          <div className="field">
            <label className="lbl">Email</label>
            <input
              className="inp"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className="field">
            <label className="lbl">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                className="inp"
                type={showPass ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                style={{ paddingRight: 44 }}
              />
              <button
                type="button"
                onClick={() => setShowPass(s => !s)}
                style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'none', cursor: 'pointer', color: 'var(--t3)', fontSize: 13 }}
              >
                {showPass ? '🙈' : '👁'}
              </button>
            </div>
          </div>

          {error && (
            <div style={{ background: 'var(--red-l)', color: 'var(--red)', borderRadius: 'var(--r)', padding: '10px 14px', fontSize: 13, marginBottom: 14 }}>
              ⚠ {error}
            </div>
          )}

          <button
            className="btn btn-primary btn-lg"
            type="submit"
            disabled={loading}
            style={{ width: '100%', justifyContent: 'center', fontFamily: 'var(--fn)', fontWeight: 800, fontSize: 15, marginTop: 4 }}
          >
            {loading ? <span className="spin" style={{ display: 'inline-block', width: 18, height: 18, border: '2px solid rgba(255,255,255,.3)', borderTopColor: '#fff', borderRadius: '50%' }} /> : '🔐 Sign In'}
          </button>
        </form>

        <div style={{ marginTop: 24, padding: '14px 16px', background: 'var(--surface2)', borderRadius: 'var(--r)', fontSize: 12, color: 'var(--t3)', textAlign: 'center', lineHeight: 1.6 }}>
          Access restricted to authorised Crafty Cubs team members only.
        </div>
      </div>
    </div>
  );
}
