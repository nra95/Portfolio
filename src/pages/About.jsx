
import Skills from "../components/Skills";

export default function About() {
  return (
    <section>
      <h1 className="headline">Here's what you should know about my skills</h1>
      <div className="skills-container">
        <div className="progressbars">
          <Skills />
        </div>
        <div className="programs">
        <h2 className="skillshead">Programming</h2>
          <img width="94" height="94" src="https://img.icons8.com/color/96/html-5--v1.png" alt="html-5--v1"/>
          <img width="94" height="94" src="https://img.icons8.com/color/96/css3.png" alt="css3"/>
          <img width="94" height="94" src="https://img.icons8.com/color/96/javascript--v1.png" alt="javascript--v1"/>
          <img width="94" height="94" src="https://img.icons8.com/color/96/react-native.png" alt="react-native"/>
          <img width="94" height="94" src="https://img.icons8.com/color/96/wordpress.png" alt="wordpress"/>
          <h2 className="skillshead">Prototyping</h2>
          <img width="94" height="94" src="https://img.icons8.com/color/96/figma--v1.png" alt="figma--v1"/>
          <img width="94" height="94" src="https://img.icons8.com/color/96/adobe-xd--v1.png" alt="adobe-xd--v1"/>
          <h2 className="skillshead">Design and editing</h2>
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/adobe-photoshop.png" alt="adobe-photoshop"/>
          <img width="94" height="94" src="https://img.icons8.com/color/96/adobe-illustrator--v1.png" alt="adobe-illustrator--v1"/>
          <img width="94" height="94" src="https://img.icons8.com/color/96/adobe-premiere-pro--v1.png" alt="adobe-premiere-pro--v1"/>
          <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/adobe-lightroom.png" alt="adobe-lightroom"/>
          <img width="94" height="94" src="https://img.icons8.com/color/96/adobe-after-effects--v1.png" alt="adobe-after-effects--v1"/>
        </div>
      </div>
    </section>
  );
}
