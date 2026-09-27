export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Name and ID</h5>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input
        id="wd-your-first-name"
        type="text"
        placeholder="First name"
        defaultValue="Ramandeep"
      />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input
        id="wd-your-last-name"
        type="text"
        placeholder="Last name"
        defaultValue="Singh"
      />
      <br />
      <label htmlFor="wd-your-password">Password:</label>
      <input id="wd-your-password" type="password" defaultValue="webdev2026" />
      <br />

      <h5>About me</h5>
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="I want to learn how to build and deploy complete web applications, from the React front end to a Node.js and MongoDB back end."
      />
      <br />

      <h5>Class standing</h5>
      <input type="radio" name="your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />

      <h5>Enrollment</h5>
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      <h5>Interests</h5>
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-frontend"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-frontend">Front-end development</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-backend"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-backend">Back-end APIs</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-databases"
      />
      <label htmlFor="wd-your-interest-databases">Databases</label>
      <br />
      <input type="checkbox" name="your-interests" id="wd-your-interest-ai" />
      <label htmlFor="wd-your-interest-ai">AI and machine learning</label>
      <br />

      <h5>Program</h5>
      <label htmlFor="wd-your-major">Major:</label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
        <option value="SE">Software Engineering</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
      <br />
      <select multiple id="wd-your-topics" defaultValue={["REACT", "NEXTJS"]}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS and Tailwind</option>
        <option value="REACT">React</option>
        <option value="NEXTJS">Next.js</option>
        <option value="NODE">Node.js and Express</option>
        <option value="MONGODB">MongoDB</option>
      </select>
      <br />

      <h5>Details</h5>
      <label htmlFor="wd-your-email">School email:</label>
      <input
        id="wd-your-email"
        type="email"
        placeholder="name@northeastern.edu"
        defaultValue="lnu.ramande@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-graduation-year">Expected graduation year:</label>
      <input
        id="wd-your-graduation-year"
        type="number"
        min={2026}
        max={2032}
        defaultValue={2027}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date:</label>
      <input id="wd-your-start-date" type="date" defaultValue="2026-09-08" />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited I am about this course (0–10):
      </label>
      <input
        id="wd-your-excitement"
        type="range"
        min="0"
        max="10"
        defaultValue="9"
      />
      <br />
      <br />

      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
