function Contact() {
  return (
    <div className="container mt-32" id="Contact-Section">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-10 bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent text-4xl font-extrabold">
          Contact
        </h1>
        <form
          data-aos="fade"
          data-aos-offset="0"
          data-aos-duration="1000"
          action="https://getform.io/f/bzyllmza"
          method="POST"
          className="flex flex-col justify-center items-center p-5 bg-gray-800 gap-5 sm:w-[500px] w-[350px] rounded-lg"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5 w-full">
            <input
              type="username"
              placeholder="Your name...."
              name="username"
              className="w-full  px-4 py-2 border-2 border-gray-400/50 focus:outline-none text-white bg-transparent rounded-md "
            />
            <input
              type="email"
              placeholder="Your email...."
              name="email"
              className="w-full  px-4 py-2 border-2 border-gray-400/50 focus:outline-none text-white bg-transparent rounded-md"
            />
          </div>
          <textarea
            rows={10}
            placeholder="Message...."
            name="message"
            className="w-full px-4 py-2 border-2 border-gray-400/50 focus:outline-none text-white bg-transparent rounded-md "
          />
          <button className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-400 text-center text-white text-2xl font-semibold rounded-lg hover:scale-105">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
