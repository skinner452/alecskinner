import UNLImage from "../images/unl.png";
import AMPTImage from "../images/ampt.jpg";
import ConnectRNImage from "../images/connectrn.png";
import WowSeeImage from "../images/wowsee.jpg";
import StatueOfLibertyImage from "../images/statue_of_liberty.jpg";
import ReactImage from "../images/react.png";
import GoImage from "../images/go.png";
import DjangoImage from "../images/django.png";
import MySQLImage from "../images/mysql.png";

import TimelineEntry from "../components/TimelineEntry";
import TopSkill from "../components/TopSkill";

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <p className="text-5xl text-center font-bold">About Me</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <p className="text-base/7 md:col-span-2">
            My name is Alec Skinner. Originally from Nebraska, I now live in
            Bloomfield, New Jersey. My journey into coding began at 12 when I
            first discovered how to tweak files for my PC games. I was
            fascinated by how even the smallest changes in code could alter the
            gameplay, and that sparked my obsession with programming. I started
            taking coding classes during my junior year of high school, and my
            passion for learning and building has only grown since. Today, I
            specialize in creating user-centric applications, with expertise
            across both front-end and back-end technologies.
            <br />
            <br />
            In my next career move, I&apos;m looking for a role that allows me
            to combine my expertise in frameworks like React, React Native, Go,
            and SQL with opportunities to learn and explore new technologies.
            I&apos;m seeking a remote position where I can collaborate with
            talented and driven professionals. My goal is to contribute to
            building impactful, innovative products while continuing to grow my
            skills and advance my career.
          </p>
          <img
            className="mx-auto"
            src={StatueOfLibertyImage}
            alt="Alec at the Statue of Liberty"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <p className="text-5xl text-center font-bold">Skills</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          <TopSkill name="React" image={ReactImage} />
          <TopSkill name="Go" image={GoImage} />
          <TopSkill name="Django" image={DjangoImage} />
          <TopSkill name="MySQL" image={MySQLImage} />
        </div>
        <hr />
        <div className="grid grid-cols-3 gap-4 text-center font-light text-xl">
          <p>Javascript</p>
          <p>Typescript</p>
          <p>Redux</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Node</p>
          <p>Next.js</p>
          <p>Python</p>
          <p>PHP</p>
          <p>Laravel</p>
          <p>Java</p>
          <p>PostgreSQL</p>
          <p>MongoDB</p>
          <p>AWS</p>
          <p>Git</p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <p className="text-5xl text-center font-bold">Timeline</p>
        <TimelineEntry
          company="University of Nebraska - Lincoln"
          title="Bachelor of Science in Computer Science"
          startYear={2013}
          endYear={2017}
          description={
            <p>
              During my studies at the University of Nebraska - Lincoln, I
              focused on building a strong foundation in computer science,
              particularly algorithms and data structures. I worked with a team
              on my senior project, where we developed a system to monitor pig
              behavior using Kinect cameras. We gathered data from the cameras
              and used the D3 library for data visualization, while MongoDB was
              used for storing and processing the data. This project was a
              collaboration that combined my interests in data visualization,
              NoSQL databases, and .NET development. It also reinforced my
              understanding of algorithms and systems design, and gave me
              hands-on experience in both team dynamics and problem-solving.
            </p>
          }
          image={UNLImage}
          color="#DC0100"
          url={"https://www.unl.edu/"}
        />

        <hr />

        <TimelineEntry
          company="AMPT"
          title="Software Developer"
          startYear={2016}
          endYear={2022}
          description={
            <p>
              During my time at AMPT, I worked with a small team to develop and
              iterate on the company&apos;s web and mobile applications. I
              utilized technologies including React, React Native, Django,
              Laravel, AWS, and SQL to build scalable and user-centric
              platforms. I integrated services such as Slack, Gmail, and Outlook
              to enhance the functionality of the AMPT platform. In addition, I
              created one-off applications, including integrations with
              Amazon&apos;s Fire Stick and customer-facing tablets. My role also
              involved using customer feedback to drive product iterations,
              ensuring continuous improvement of the user experience.
            </p>
          }
          image={AMPTImage}
          color="#E94530"
          url={"https://amptnow.com/"}
        />

        <hr />

        <TimelineEntry
          company="connectRN"
          title="Full Stack Engineer"
          startYear={2022}
          endYear={2024}
          description={
            <p>
              At connectRN, I worked as a Full Stack Engineer, contributing to
              both the front-end and back-end of the platform. I utilized Go,
              React, and MySQL to develop features and ensure the
              platform&apos;s stability through unit testing. I worked closely
              with product teams, guiding projects from Figma designs to
              technical documentation. As part of an agile scrum team, I
              collaborated across disciplines to ensure timely delivery and
              high-quality results. My experience at connectRN further honed my
              skills in translating complex requirements into actionable
              technical solutions and executing projects successfully.
            </p>
          }
          image={ConnectRNImage}
          color="#644DFF"
          url={"https://connectrn.com/"}
        />

        <hr />

        <TimelineEntry
          company="WowSee"
          title="Full Stack Developer"
          startYear={2025}
          endYear={null}
          description={
            <p>
              At WowSee, I’m currently working on a suite of
              entertainment-focused products, including fantasy sports, web
              comics, and HTML-based games. I’ve led efforts to modernize the
              codebase, including rewriting a Django backend in Node/Express to
              improve performance, maintainability, and test coverage. I also
              designed a flexible framework for the sports platform that
              significantly reduced code duplication and accelerated feature
              development. My work spans building responsive front-end
              experiences with React and supporting scalable, efficient backend
              systems in a fast-paced startup environment.
            </p>
          }
          image={WowSeeImage}
          color="#4DBDA7"
          url={"https://www.wowsee.me/"}
        />
      </div>
    </div>
  );
};

export default AboutMe;
