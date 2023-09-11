import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const hobbies = [
  "playing my guitar",
  "playing league of legends",
  "practicing kendo",
  "practicing badminton",
  "exploring in Teyvat"
];

const space = [
  "corner",
  "fragment",
  "sliver",
  "pocket",
  "section",
  "node",
  "slice",
  "shard",
  "bit",
  "piece",
  "string",
];

function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const handleClick = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick];
}

function Home() {
  useEffect(() => {
    document.title = "Home page/";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  const [currentSpace, handleSpaceClick] = useWordCycle(space);

  return (
    <div>
      <h2>My name is Michael!</h2>
      <p>
        welcome to my little{" "}
        <a class="clickable" id="corner" onClick={handleSpaceClick}>
          {currentSpace}
        </a>{" "}
        of the internet!
      </p>
      <p>
        I'm a student based in Vancouver, Burnaby &#127809; where I study computer science. when i'm not breaking code, I'm reading about
        some research papers, reading manga, and{" "}
        <a class="clickable" id="hobbies" onClick={handleHobbyClick}>
          {currentHobby}
        </a>
        .
      </p>
      <p>
        reach out to me anytime at{" "}
        <a href="mc3chan2003@gmail.com" class="clickable">
          mc3chan2003@gmail.com
        </a>
        ,
        <br />
        or ask{" "}
        <NavLink to="/ChatMichael" class="clickable">
          <u>my ai (working on it!)</u>
        </NavLink>{" "}
        a question!
      </p>
      <div class="box">
        I'm looking for 2024 new internships SWE/ML positions! shoot me an{" "}
        <a href="mailto:mc3chan2003@gmail.com" class="clickable">
          email
        </a>{" "}
        if you (or your friends) are hiring &lt;3{" "}
      </div>
    </div>
  );
}

export default Home;
