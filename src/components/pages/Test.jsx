import React from "react";

import NavBar from "../navbar/NavBar1";

const App = () => {
  return (
    <div>
      <NavBar />

      <nav>
        <ul
          style={{
            listStyleType: "none",
            padding: "20px",
            margin: "0",
            backgroundColor: "darkgray",
            textAlign: "center",
            fontSize: "large",
          }}
        >
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a
              href="#mission"
              style={{ textDecoration: "none", color: "#333" }}
            >
              Mission
            </a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a
              href="#history"
              style={{ textDecoration: "none", color: "#333" }}
            >
              History
            </a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a
              href="#leadership"
              style={{ textDecoration: "none", color: "#333" }}
            >
              Leadership Team
            </a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a
              href="#community"
              style={{ textDecoration: "none", color: "#333" }}
            >
              Community Involvement
            </a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a
              href="#security"
              style={{ textDecoration: "none", color: "#333" }}
            >
              Security and Privacy
            </a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a
              href="#customer"
              style={{ textDecoration: "none", color: "#333" }}
            >
              Customer Focus
            </a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a href="#csr" style={{ textDecoration: "none", color: "#333" }}>
              CSR
            </a>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <a
              href="#financial"
              style={{ textDecoration: "none", color: "#333" }}
            >
              Financial Strength
            </a>
          </li>
        </ul>
      </nav>
      <main style={{ padding: "20px" }}>
        <section id="mission">
          <h2>Our Mission</h2>
          <p>
            At Apna Bank, our mission is not just a statement; it's a commitment
            to our customers, our employees, and our community. We aim to
            empower individuals and businesses alike by providing them with the
            financial tools, resources, and support they need to thrive. Our
            mission is rooted in the belief that everyone deserves access to
            fair and transparent financial services, regardless of their
            background or circumstances. We strive to build lasting
            relationships with our customers, guided by honesty, integrity, and
            respect. By putting our customers' needs first and delivering
            personalized solutions tailored to their unique goals and
            aspirations, we aim to be the trusted financial partner they can
            rely on for life.
          </p>
        </section>
        <section id="history">
          <h2>Our History</h2>
          <p>
            Apna Bank's journey began in 2024 with a vision to redefine the
            banking experience for the people of our community. Since then, we
            have undergone significant growth and transformation, evolving from
            a small local bank to a trusted financial institution serving
            customers across India. Along the way, we have overcome numerous
            challenges, adapted to changes in the industry, and remained
            steadfast in our commitment to delivering exceptional service and
            value to our customers. Our history is a testament to our
            resilience, innovation, and unwavering dedication to our mission of
            empowering individuals and businesses through financial inclusion
            and opportunity.
          </p>
        </section>
        <section id="Leadership">
          <h2>Leadership Team</h2>
          <p>
            Our leadership team at Apna Bank is comprised of experienced
            professionals with diverse backgrounds and expertise spanning the
            banking, finance, technology, and customer service industries. Led
            by our CEO, Chayan Ghosh, our executives are passionate about
            driving the bank's growth and success while upholding our core
            values of integrity, innovation, and excellence. With a shared
            commitment to putting our customers first and fostering a culture of
            collaboration, transparency, and accountability, our leadership team
            plays a vital role in shaping the strategic direction of the bank
            and ensuring that we continue to meet the evolving needs of our
            customers and communities.
          </p>
        </section>
        <section id="community">
          <h2>Community Involvement</h2>
          <p>
            Community involvement is a core value at Apna Bank, and we are
            deeply committed to giving back to the communities we serve. From
            sponsoring local events and initiatives to volunteering our time and
            resources to support charitable causes and organizations, we believe
            in making a positive impact on society and the environment. Our
            community involvement efforts are guided by the principles of
            corporate social responsibility, sustainability, and inclusivity,
            and we are proud to partner with community leaders, organizations,
            and stakeholders to drive positive change and create a better future
            for all.
          </p>
        </section>
        <section id="security">
          <h2>Security and Privacy</h2>
          <p>
            At Apna Bank, we understand the importance of protecting our
            customers' personal and financial information. That's why we employ
            state-of-the-art security measures and adhere to strict privacy
            policies to ensure that your data is safe and secure at all times.
            From encryption technology and multi-factor authentication to
            real-time monitoring and fraud detection, we invest in the latest
            tools and technologies to safeguard against cyber threats and
            unauthorized access. You can trust that your privacy is our top
            priority, and we are committed to maintaining the highest standards
            of security and confidentiality to protect your sensitive
            information.
          </p>
        </section>
        <section id="customer">
          <h2>Customer Focus</h2>
          <p>
            Our customers are at the center of everything we do at Apna Bank,
            and we are dedicated to providing them with the highest level of
            service and support possible. Whether you're visiting one of our
            branches, accessing your account online, or speaking with one of our
            customer service representatives, you can expect to be treated with
            courtesy, professionalism, and respect. We strive to anticipate your
            needs, exceed your expectations, and deliver personalized solutions
            tailored to your unique circumstances and goals. Your satisfaction
            is our ultimate goal, and we are committed to earning your trust and
            loyalty through exceptional service and unwavering support.
          </p>
        </section>
        <section id="csr">
          <h2>Corporate Social Responsibility</h2>
          <p>
            Corporate social responsibility (CSR) is ingrained in the fabric of
            Apna Bank, and we are committed to making a positive impact on
            society and the environment through our business practices and
            initiatives. From reducing our environmental footprint and promoting
            sustainability within our operations to supporting social causes and
            community development programs, we believe in using our resources
            and influence for good. Our CSR efforts are guided by the principles
            of ethical business conduct, transparency, and accountability, and
            we are dedicated to being a responsible corporate citizen and
            contributing positively to the well-being and prosperity of the
            communities we serve.
          </p>
        </section>
        <section id="financial">
          <h2>Financial Strength</h2>
          <p>
            Apna Bank is proud to be a financially strong and stable
            institution, with a solid capital base, sound risk management
            practices, and a track record of consistent performance. Our
            financial strength enables us to weather economic uncertainties and
            continue serving our customers and communities with confidence and
            stability. We adhere to stringent regulatory requirements, maintain
            strong liquidity and capital adequacy ratios, and prioritize
            long-term sustainability and value creation. Our commitment to
            financial strength and stability is unwavering, and we are dedicated
            to earning the trust and confidence of our customers, investors, and
            stakeholders through prudent management and responsible stewardship
            of their assets.
          </p>
        </section>
      </main>
      <footer
        style={{
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        <p>&copy; 2024 Apna Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
