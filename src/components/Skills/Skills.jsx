import uniqid from "uniqid";
import { userName } from "../../portfolio";
import "./Skills.css";

const Skills = () => {
  const skills = userName.skills;
  if (!skills.length) return null;

  return (
    <section
      className='section skills'
      id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li
            key={uniqid()}
            className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
