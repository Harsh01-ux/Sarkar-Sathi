import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, ArrowLeft, AlertCircle, Info, MessageSquare } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Feedback() {
  const { t, isHi } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedbackType, setFeedbackType] = useState('Suggestion');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError(t.feedbackRequiredError || 'Please enter a message before submitting.');
      return;
    }

    setError('');
    const senderName = name.trim() || 'User';
    const senderEmail = email.trim() || 'Not provided';
    const subject = `[Sarkar Sathi Feedback] ${feedbackType} - ${senderName}`;
    const body = `Feedback Type: ${feedbackType}
Name: ${senderName}
Email: ${senderEmail}

Message:
${message.trim()}

---
Sent via Sarkar Sathi Feedback`;

    const mailtoUrl = `mailto:harshsh2543@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      {/* Back button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-200 transition-colors"
        >
          <ArrowLeft size={15} />
          {t.back || 'Back'}
        </Link>
      </div>

      {/* Main card */}
      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 shadow-sm reveal-item">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-brand-50 dark:bg-slate-700 rounded-lg flex items-center justify-center shrink-0">
            <MessageSquare size={20} className="text-brand-500 dark:text-sky-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
              {t.feedbackTitle}
            </h1>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">
          {t.feedbackSubtitle}
        </p>

        {error && (
          <div className="mb-5 p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 flex items-center gap-2 text-sm text-red-700 dark:text-red-300">
            <AlertCircle size={16} className="shrink-0 text-red-500 dark:text-red-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="feedback-name" className="block text-xs font-semibold text-gray-700 dark:text-slate-300 uppercase tracking-wide mb-1.5">
              {t.feedbackName}
            </label>
            <input
              id="feedback-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isHi ? "आपका नाम" : "Your name"}
              className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-brand-500 dark:focus:ring-sky-400 transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="feedback-email" className="block text-xs font-semibold text-gray-700 dark:text-slate-300 uppercase tracking-wide mb-1.5">
              {t.feedbackEmail}
            </label>
            <input
              id="feedback-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isHi ? "your.email@example.com (वैकल्पिक)" : "your.email@example.com (optional)"}
              className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-brand-500 dark:focus:ring-sky-400 transition-colors"
            />
          </div>

          {/* Feedback Type */}
          <div>
            <label htmlFor="feedback-type" className="block text-xs font-semibold text-gray-700 dark:text-slate-300 uppercase tracking-wide mb-1.5">
              {t.feedbackType}
            </label>
            <select
              id="feedback-type"
              value={feedbackType}
              onChange={(e) => setFeedbackType(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg text-gray-800 dark:text-slate-100 focus:outline-none focus:border-brand-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-brand-500 dark:focus:ring-sky-400 transition-colors cursor-pointer"
            >
              <option value="Bug">{t.feedbackTypeBug}</option>
              <option value="Suggestion">{t.feedbackTypeSuggestion}</option>
              <option value="Missing govt process">{t.feedbackTypeMissing}</option>
              <option value="Other">{t.feedbackTypeOther}</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="feedback-message" className="block text-xs font-semibold text-gray-700 dark:text-slate-300 uppercase tracking-wide mb-1.5">
              {t.feedbackMessage} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="feedback-message"
              required
              rows={5}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (error) setError('');
              }}
              placeholder={t.feedbackMessagePlaceholder}
              className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-brand-500 dark:focus:ring-sky-400 transition-colors"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-500 hover:bg-brand-600 dark:bg-sky-600 dark:hover:bg-sky-500 text-white font-medium text-sm rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <Send size={15} />
            {t.feedbackSubmit}
          </button>

          {/* Friendly note */}
          <div className="flex items-start gap-2 pt-2 text-xs text-gray-500 dark:text-slate-400">
            <Info size={14} className="mt-0.5 shrink-0 text-brand-500 dark:text-sky-400" />
            <span>{t.feedbackNote}</span>
          </div>
        </form>

        {/* Direct email fallback */}
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-500 dark:text-slate-400">
          <span>{t.feedbackOrDirect}</span>
          <a
            href="mailto:harshsh2543@gmail.com"
            className="inline-flex items-center gap-1.5 text-brand-600 dark:text-sky-400 font-medium hover:underline"
          >
            <Mail size={13} />
            harshsh2543@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
