function ContactPage() {
  return (
    <div className="container">
      <h1 className="text-center text-3xl my-4">Contact Us</h1>

      <form action="">
        <div className="flex gap-10">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
        </div>
        <textarea placeholder="Message"></textarea>
        <div className="flex justify-center mt-6">
          <button type="submit" className="primary-btn px-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
