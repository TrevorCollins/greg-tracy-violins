import { sendEmail } from "@/app/contact/actions";
import Form from "next/form";

// Initial state for the form
// const initValues = {
//   name: "",
//   email: "",
//   subject: "",
//   message: "",
// };

// const initState = { values: initValues };

const ContactForm = () => {
  return (
    <div className="w-full mx-auto my-16 p-8 md:w-[80%]">
      <Form action={sendEmail} className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 md:justify-evenly">
          <div className="w-full">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="string"
              id="name"
              name="name"
              className="shadow-sm bg-dark border border-red text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="First Last"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-dark border border-red text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="name@email.com"
              required
            />
          </div>
        </div>
        <div></div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block p-3 w-full text-sm bg-dark rounded-lg border border-red shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="block p-2.5 w-full text-sm bg-dark rounded-lg shadow-sm border border-red focus:ring-primary-500 focus:border-primary-500"
            placeholder="How can I help?"
          />
        </div>
        <button
          type="submit"
          // aria-disabled={isPending}
          className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-orange sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send Message
        </button>
      </Form>
    </div>
  );
};

export default ContactForm;
