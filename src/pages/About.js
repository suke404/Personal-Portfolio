import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About Michael";
  }, []);

  return (
    <div>
      <img src="/images/me.jpg" alt="it's me!" width="200" height="auto" />
      <p>
        <nobr>─=≡Σ((( つ•̀ω•́)つLET’S GO!</nobr>
      </p>

      <hr class="dashed" />

      <p>
        Hello World! &#129533;.
        <br />
        <br />
        Welcome, so I am guessing you clicked that button to know about me! Allow me to re-introduce myself. My name is
        Tsz Wo Chan but well (´・ω・｀), you can call me Michael. One fun fact about me! I actually know 4 different languages, 
        English, Mandarin, Cantonese, Japanese(N2), and I am learning Korean right now!
      </p>

      <p> </p>

      <p>
        <b>currently</b>
      </p>
      <p>
        I'm a junior at{" "}
        <a href="https://www.sfu.ca/" target="_blank" class="clickable">
          Simon Fraser University
        </a>
        ,and I majoring in Honour Computer Science, and minoring in Statistics. 
        Not to mention, I am also volunteering as a peer tutor for the school of computing science in courses like Data Structure and Algorithm.
        <br />
        <br />
        I'm interested in machine learning, software development, and all creative
        intersections of tech, music and art &#127912;.
        <br />
        <br />
        <div class="box">
          I'm looking for 2024 ML/DE/SWE internships! shoot me an email at{" "}
          <a href="mailto:mc3chan2003@gmail.com" class="clickable">
            mc3chan2003@gmail.com
          </a>
          , and let's talk about why I'd be a good fit for your team!
        </div>
      </p>

      <p> </p>

      <p>
        <b>previously</b>
      </p>
      <p>did some Hackathons:</p>
      <ul>
        <li>
          <p>
            DEEDHACKS 2023 Championship! &#x270C;
          </p>
        </li>
        <li>
          Deltahacks 2022 Participation! <br></br> My first hackathon! &#x261D; 
        </li>
      </ul>
      
      <p>and did some clubs and part-time:</p>
      <ul>
        <li>
          One of the executives for SFU Kendo Club!{" "}
          <a href="https://www.instagram.com/sfukendo/" target="_blank" class="clickable">
            SFU KENDO
          </a>
        </li>
        <li>
          Dairy frozen assiocate/Part-time supervisor.{" "}
          <a href="https://www.tntsupermarket.com/eng/" target="_blank" class="clickable">
            T&T Supermarket
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
