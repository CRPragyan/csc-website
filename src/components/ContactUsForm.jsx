function ContactUsForm() {
  return (
    <div>
      <form action="" className="mb-3">
        <div className="flex flex-col md:flex-row gap-10 md:p-0 p-4 ">
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

export default ContactUsForm;
