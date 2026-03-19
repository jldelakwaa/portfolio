import { IconAt, IconMessageCircle, IconUser } from '@tabler/icons-react';
import { FormEvent } from 'react';

export default function Form() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;
    
    // Your email address
    const yourEmail = 'jldelakwaa@gmail.com';
    
    // Create Gmail compose link (opens Gmail in browser)
    const subject = encodeURIComponent(`${name}'s Message`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${body}`;
    
    // Open Gmail in new tab
    window.open(gmailLink, '_blank');
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="rounded-2xl bg-white/75 border border-cyan-200/80 shadow-md backdrop-blur-sm p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="mb-2 text-sm font-medium text-foreground/80 flex items-center gap-2">
              <IconAt size={16} className="text-blue-600" />
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded-lg border border-cyan-300/80 bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="mb-2 text-sm font-medium text-foreground/80 flex items-center gap-2">
              <IconUser size={16} className="text-blue-600" />
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full rounded-lg border border-cyan-300/80 bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition"
              placeholder="Your name"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="mb-2 text-sm font-medium text-foreground/80 flex items-center gap-2">
            <IconMessageCircle size={16} className="text-blue-600" />
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={7}
            className="w-full rounded-lg border border-cyan-300/80 bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition resize-y min-h-40"
            placeholder="Tell me about your project, idea, or opportunity..."
            required
          />
        </div>

        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
