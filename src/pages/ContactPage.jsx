import ContactUsForm from "../components/ContactUsForm";
import Logo from "../components/Logo";
import Map from "../components/Map";
import MapComponent from "../components/MapComponent";

function ContactPage() {
  return (
    <div className="container">
      <div>
        <div className=" flex mt-6">
          <div className="  bg-orange-400  w-96 text-center flex flex-col items-center gap-9 justify-center ">
            <div>
              <h1 className="text-xl font-bold">Address</h1>
              <p>Basugaon, Dhanbazar, Ward No-2, </p>
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
              <p>Monday - Sarturday: 10.00 AM - 8.00 PM</p>
            </div>
          </div>
          <div className=" ">
            <Map />
          </div>
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
