'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-surface">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[850px] max-h-[95dvh] bg-surface-card rounded-3xl border border-white/10 shadow-2xl flex overflow-hidden"
      >
        <div className="grid md:grid-cols-2 w-full overflow-y-auto">

          {/* LEFT SIDE: Branding */}
          <div className="hidden md:flex flex-col justify-center p-10 relative bg-gradient-to-br from-brand via-[#3a1f3a] to-brand">
            <div className="absolute inset-0 bg-[radial-gradient(at_center,#c084fc15_0%,transparent_70%)]" />
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative z-10 w-full max-w-xs"
            >
              <Link href={"/"}>
              <div className="bg-white p-2 rounded-2xl w-fit mb-8 shadow-lg">
                <img src="/assets/AIXORA_logo.png" alt="AIXORA Logo" className="h-10 w-auto object-contain" />
              </div>
              </Link>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs">
                  <Sparkles className="w-3 h-3 text-accent" />
                  <span className="text-white font-medium">Learn • Build • Lead</span>
                </div>
                <h2 className="text-4xl font-bold text-white leading-tight">Welcome back</h2>
                <p className="text-sm text-white/70">
                  Bridge the gap between curiosity and expertise. Master the future of AI and cutting-edge technology with our industry-leading curriculum.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="flex flex-col justify-center p-6 lg:p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="form-container"
            >
              <h2 className="text-xl font-semibold text-text mb-1">Sign In</h2>
              <p className="text-white/50 text-xs mb-5">Welcome back, please enter your details</p>

              <form onSubmit={handleLogin} className="space-y-3">
                <div>
                  <label className="input-label">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" required />
                </div>
                <div>
                  <label className="input-label">Password</label>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-white/40 hover:text-white">
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link href="/forgot-password" className="text-xs text-accent hover:underline">Forgot password?</Link>
                </div>

                <button type="submit" disabled={isLoading} className="w-full bg-brand hover:bg-[#3f0f34] text-white font-medium py-2.5 rounded-xl transition-all text-sm mt-2">
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>

              <div className="my-4 flex items-center gap-2">
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-white/30 text-[10px]">OR</span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

             <button type="button" className="btn-google">
                <div className="w-4 h-4 flex items-center justify-center">
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    className="w-full h-full"
                  />
                </div>
                Continue with Google
              </button>

              <p className="text-center text-white/50 mt-5 text-[11px]">
                Don't have an account? <Link href="/register" className="text-accent hover:underline font-medium">Create one free</Link>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}