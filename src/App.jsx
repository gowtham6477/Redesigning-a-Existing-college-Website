import "./index.css";
import bitDurgLogo from "./assets/bitdurg.png";
import ieeeLogo from "./assets/ieee.png";
import ieeeSbLogo from "./assets/ieeesb.png";
import ieeeCsLogo from "./assets/ieeecs.png";
import faculty1 from "./assets/faculty1.jpg";
import faculty2 from "./assets/faculty2.jpg";
import faculty3 from "./assets/faculty3.jpg";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo-container">
            <img src={bitDurgLogo} alt="BIT DURG Logo" className="nav-logo" />
            <h1>BIT DURG</h1>
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#office-bearers">Office Bearers</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#students-corner">Students Corner</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <h1>BIT DURG COLLEGE</h1>
        <p>Transforming Education with Excellence</p>
        <div className="logos">
          <img src={bitDurgLogo} alt="BIT DURG Logo" />
          <img src={ieeeLogo} alt="IEEE Logo" />
          <img src={ieeeSbLogo} alt="IEEE SB Logo" />
          <img src={ieeeCsLogo} alt="IEEE CS Logo" />
        </div>
        <a href="https://forms.gle/Q9eQCk6wm3UX9u6z7" target="_blank" rel="noopener noreferrer">
          <button>Register for IEEE</button>
        </a>
      </section>

      <section>
        <h2>About BIT DURG</h2>
        <p>
          Four decades ago, few stalwarts in the public domain, transformed their spirited vision and dream to reality in the shape of Bhilai Institute of Technology in the loving memory of Seth Balkrishan, a renowned philanthropist of the region. Fired with the zeal of promoting the cause of technical education, the college was set up at Durg under the benign auspices of the Bhilai Institute of Technology Trust in 1986. BIT, set up as the first self-financed Engineering College in the erstwhile Madhya Pradesh, has now shaped as one of the most sought-after professional institutes in the central region. BIT is standing tall and steadfast in its commitment to provide qualitative education for the students.
        </p>
        <p>
          The courses offered by BIT are approved by All India Council for Technical Education (AICTE). The Institute is affiliated to Chhattisgarh Swami Vivekananda Technical University (CSVTU) and brings laurels to the University by providing the best results in the University examinations and Research and Development activities. BIT has produced the maximum number of Ph.D. holders in the State leaving other professional colleges far behind. In a good number of occasions, the faculty members of BIT have presented research papers in various countries across the globe.
        </p>
      </section>

      <section id="office-bearers">
        <h2>Office Bearers</h2>
        <div className="grid">
          {[{
            photo: faculty1,
            name: "Dr. Arun Arora",
            position: "Principal",
            education: "PhD in Engineering"
          }, {
            photo: faculty2,
            name: "Dr. Manisha Sharma",
            position: "Vice Principal",
            education: "PhD in Physics"
          }, {
            photo: faculty3,
            name: "Prof. Chandra",
            position: "HOD, CSE",
            education: "M.Tech in Computer Science"
          }].map((faculty, index) => (
            <div className="card" key={index}>
              <img src={faculty.photo} alt={faculty.name} className="faculty-photo" />
              <div className="card-content">
                <h3>{faculty.name}</h3>
                <p><strong>Position:</strong> {faculty.position}</p>
                <p><strong>Education:</strong> {faculty.education}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="events">
        <h2>Events</h2>
        <h3>Past Events</h3>
        <div className="grid">
          <div className="card">
            <h3>Oath Taking Ceremony</h3>
            <p>A memorable event marking the official responsibility handover to our new office bearers. The ceremony was attended by prominent dignitaries and students.</p>
            <p><strong>Date:</strong> 1st January 2024</p>
          </div>
          <div className="card">
            <h3>Company in Focus</h3>
            <p>Highlighting our collaboration with XYZ Corp, a global leader in technology solutions, to provide enhanced learning opportunities for our students.</p>
            <p><strong>Date:</strong> 15th February 2024</p>
          </div>
        </div>
        <h3>Upcoming Events</h3>
        <div className="grid">
          <div className="card">
            <h3>Inauguration of International Conference</h3>
            <p>The inauguration of an international conference typically includes formal welcoming remarks, presentations from key speakers, and an overview of the conference agenda.</p>
            <p><strong>Date:</strong> 5th January 2025</p>
          </div>
          <div className="card">
            <h3>Teacher Awareness Program Under AICTE</h3>
            <p>The objective is to conduct AICTE-ISTE Induction/ Refresher Programmes for the teaching faculty working in technical institutions. Total 100 Refresher programme & 50 Orientation programme with the funding of Rs. 300000 per programme.</p>
            <p><strong>Date:</strong> 10th March 2025</p>
          </div>
        </div>
      </section>

      <section id="students-corner">
        <h2>Students Corner</h2>
        <div className="form-container">
          <div className="form-left">
            <form className="card">
              <label htmlFor="feedback">Event Feedback</label>
              <textarea id="feedback" rows="4" placeholder="Your feedback..."></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="form-right">
            <form className="card">
              <label htmlFor="complaint">Complaint Form</label>
              <textarea id="complaint" rows="4" placeholder="Your complaint..."></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="notifications">
          <h3>Notifications</h3>
          <p>No upcoming exams at the moment. Stay tuned for updates!</p>
        </div>
      </section>
    </div>
  );
};

export default App;