import { useState } from "react";
import Swal from "sweetalert2";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactUs = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactUs = (e) => {
    e.preventDefault();
    console.log(fullname, email, message);
    Swal.fire({
      icon: "success",
      title: "Congrats!",
      text: "Thank You , We will try to react you soon",
    });
  };

  return (
    <div>
      <Navbar />
      <div>
        <header
          style={{
            height: 280,
            backgroundImage:
              "linear-gradient( 109.6deg,  rgba(61,131,97,1) 11.2%, rgba(28,103,88,1) 91.1% )",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: 60,
              fontWeight: 600,
              color: 'white'
            }}
          >
            <i class="ri-contacts-book-2-line" style={{ marginRight: 16 }}></i>
            Contact-us
          </h1>
        </header>
      </div>

      <div
        style={{
          display: "flex",
          padding: 64,
          gap: 24,
          backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% )'
        }}
      >
        <img src="./images/contact-us.svg" width="50%" />
        <div
          style={{
            width: "50%",
          }}
        >
          <form
            onSubmit={contactUs}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <label
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Fullname
              </label>
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                type="text"
                name="fullname"
                placeholder="Enter name here"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  padding: 14,
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <label
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                placeholder="example@mail.com"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  padding: 14,
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <label
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                type="text"
                name="message"
                placeholder="Write your query or message here"
                rows={4}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  padding: 14,
                }}
              />
            </div>

            <button
              style={{
                border: "none",
                width: "fit-content",
                padding: "14px 32px",
                borderRadius: 4,
                background: "#6C63FF",
                color: "white",
                fontWeight: 600,
              }}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
