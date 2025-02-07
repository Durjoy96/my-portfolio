const Contact = () => {
  return (
    <>
      <section
        className="bg-base-100 mt-12 md:mt-20 lg:mt-32 py-12 md:py-20 lg:py-32 dark:bg-gray-100 dark:text-gray-900"
        id="contact"
      >
        <div className="main-container lg:px-0 grid grid-cols-1 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+8801332329604</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>mddurjoy853@gmail.com</span>
              </p>
            </div>
          </div>
          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm p-2 bg-base-200 text-base-content focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
                spellcheck="false"
                data-ms-editor="true"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm p-2 bg-base-200 focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md p-2 bg-base-200 focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
                placeholder="Type here..."
                spellcheck="false"
                data-ms-editor="true"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded bg-primary text-primary-content focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
