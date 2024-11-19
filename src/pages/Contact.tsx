import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container m-auto max-w-4xl text-center flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <p className="text-7xl font-bold">Contact</p>
        <p className="font-extralight">
          Feel free to contact me with any of the below methods, hope to chat
          soon!
        </p>
      </div>

      {/* Contact Methods */}
      <div className="flex flex-col gap-4 text-3xl font-bold">
        <Link to="mailto:skinner452@gmail.com" target="_blank">
          skinner452@gmail.com
        </Link>

        <Link to="tel:402-689-0709" target="_blank">
          (402) 689-0709
        </Link>

        <Link to="https://www.linkedin.com/in/alecskinner/" target="_blank">
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default Contact;
