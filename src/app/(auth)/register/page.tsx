'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Sparkles } from 'lucide-react';
import { toast, Toaster } from 'sonner';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.name.trim().length < 3) {
      toast.error("Please enter a valid name (min 3 chars).");
      setIsLoading(false);
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      toast.error("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Account created successfully! Welcome to AIXORA.");
      setFormData({ name: '', email: '', password: '' });
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-surface">
      <Toaster theme="dark" position="top-right" richColors />

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
                  <span className="text-white font-medium">Join the Future</span>
                </div>
                <h2 className="text-4xl font-bold text-white leading-tight">Create your<br />account</h2>
                <p className="text-sm text-white/70 leading-relaxed">
                  Bridge the gap between curiosity and expertise. Master the future of AI with our industry-leading curriculum.
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
              className="max-w-[320px] mx-auto w-full"
            >
              <h2 className="text-xl font-semibold text-text mb-1">Get Started</h2>
              <p className="text-white/50 text-xs mb-5">Create a free account to begin learning</p>

              <form onSubmit={handleRegister} className="space-y-3">
                <div>
                  <label className="input-label">Full Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="input-field" />
                </div>

                <div>
                  <label className="input-label">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="input-field" />
                </div>

                <div>
                  <label className="input-label">Password</label>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="input-field" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-white/40 hover:text-white">
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <button type="submit" disabled={isLoading} className="btn-primary">
                  {isLoading ? 'Creating account...' : 'Create Account'}
                </button>
              </form>

              <div className="my-4 flex items-center gap-2">
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-white/30 text-[10px]">OR</span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              <p className="text-center text-white/50 mt-5 text-[11px]">
                Already have an account? <Link href="/login" className="text-accent hover:underline font-medium">Sign in</Link>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}