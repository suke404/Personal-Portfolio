import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    document.title = "Michael's projects ( ´ ▽ ` )bsss";
  }, []);

  return (
    <div>
      <p>
        some projects, find the rest on my{" "}
        <a href="https://github.com/suke404" class="clickable" target="_blank">
          github
        </a>{" "}
        <nobr>(๑•̀ㅁ•́๑)✧</nobr>
      </p>
      <hr class="dashed" />
      <p>
        <NavLink to="https://github.com/Myuku/AccessabilityFinder" class="clickable">
            <u>
                <b>AccessabilityFinder</b>
            </u>
        </NavLink>{" "}
        <br />
        DEEDHACKS Project <br />
        A project that is dedicate to assist and empower people with disabilities.
      </p>

      <p>
        <i>(this page is a work in progress, pictures coming soon!)</i>
      </p>
    </div>
  );
}

export default Projects;
