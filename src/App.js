import React from 'react';
import * as Modules from './Modules';
import * as Text from './Text';
import Projects from './Projects';
import './css/utilities.css';
import './css/style.css';

function App() {
  return (
    <div className="flex-column p-small">
      <Modules.SiteLogo />
      <div
        id="portfolio-content-container"
        className="flex-column screen-small-m-left-small screen-small-m-right-small screen-medium-m-large"
      >
        <Modules.ShowyIndent
          width="9rem"
          margin="m-bottom-small"
          text="Hi there"
          excl={true}
        />
        <Modules.ShowyIndent
          width="9rem"
          margin="m-bottom-large"
          text="I'm Qvistsson"
          excl={false}
        />
        <div className="flex-column screen-medium-m-left-large">
          <Modules.TextContainer content={Text.Introduction()} />
          <Modules.SubHeader text="Projects" margin="m-top-large m-bottom" customLeft="6rem"/>
          <Modules.Project {...Projects.pomodoro} />
          <Modules.ProjectDivider divString="///" />
          <Modules.Project {...Projects.calculator} />
          <Modules.ProjectDivider divString="///" />
          <Modules.Project {...Projects.dataviz} />
          <Modules.ProjectDivider divString="///" />
          <Modules.Project {...Projects.dataviz2} />
          <Modules.SubHeader
            text="Contact me"
            margin="m-top-large m-bottom"
            id="contact-info"
          />
          <Modules.TextContainer content={Text.ContactMe()} />
          <Modules.ContactSocials />
        </div>
      </div>
      <Modules.Footer />
    </div>
  );
}

export default App;