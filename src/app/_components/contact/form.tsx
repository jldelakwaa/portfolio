import { IconAt } from '@tabler/icons-react';
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
    const subject = encodeURIComponent(`${name}' Message`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${body}`;
    
    // Open Gmail in new tab
    window.open(gmailLink, '_blank');
  };

  return (
    <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative group">
            <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300">
              <IconAt className="w-4 h-4 rtl:rotate-[270deg]" />
            </span>
            <input 
              type="email" 
              name="email" 
              id="floating-email" 
              className="py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer autofill:bg-transparent autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]" 
              placeholder=" " 
              required 
            />
            <label htmlFor="floating-email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 start-0 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          </div>

          <div className="relative group">
            <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300">
              <svg className="w-4 h-4 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                <path clipRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
              </svg>
            </span>
            <input 
              type="text" 
              name="name" 
              id="floating-name" 
              className="py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer autofill:bg-transparent autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]" 
              placeholder=" " 
              required 
            />
            <label htmlFor="floating-name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 start-0 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
          </div>
        </div>

        <div className="mt-12 relative">
          <textarea
            name="message"
            id="message"
            rows={5}
            className="peer block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="Your message"
            required
          />
          <label htmlFor="message" className="absolute -top-7 left-0 text-sm font-medium text-gray-500 mb-2 flex items-center gap-2 peer-focus:text-blue-600 transition-colors duration-300">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" />
            </svg>
            Message
          </label>
        </div>

        <div className='flex justify-end'>
          <button
            type="submit"
            className="mt-6 py-1 px-4 rounded bg-blue-500 hover:bg-blue-600 text-white">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}