import ContactUsForm from "../components/ContactUsForm";
import Map from "../components/Map";

function ContactPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row mt-6">
        <div className="bg-orange-400 lg:w-96 text-center flex flex-col items-center gap-9 justify-center p-4">
          <div>
            <h1 className="text-xl font-bold">Address</h1>
            <p>Basugaon, Dhanbazar, Ward No-2,</p>
            <p>Near Durga Mandir,Dist-Chirang(783372)</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Phone</h1>
            <p>8402865264</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Email</h1>
            <p>csc.basugaon@gmail.com</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Working Time</h1>
            <p>Monday - Saturday: 10.00 AM - 8.00 PM</p>
          </div>
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-6 flex-grow">
          <Map />
        </div>
      </div>
      <h1 className="text-center text-3xl my-4">Contact Us</h1>
      <div>
        <ContactUsForm />
      </div>
    </div>
  );
}

export default ContactPage;
