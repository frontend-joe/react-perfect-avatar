import styled, { css } from "styled-components";

import ThePerfectAvatar from "./ThePerfectAvatar";
import avatar from "./avatar.png";

const StyledAvatarWrapper = styled.div`
  margin-bottom: 3rem;
`;

function App() {
  return (
    <div className="App">
      <StyledAvatarWrapper>
        <ThePerfectAvatar name="MV" />
      </StyledAvatarWrapper>
      <StyledAvatarWrapper>
        <ThePerfectAvatar src={avatar} name="MV" />
      </StyledAvatarWrapper>
      <StyledAvatarWrapper>
        <ThePerfectAvatar src={avatar} name="MV" isActive />
      </StyledAvatarWrapper>
      <StyledAvatarWrapper>
        <ThePerfectAvatar src={avatar} name="MV" isActive hasBadge />
      </StyledAvatarWrapper>
    </div>
  );
}

export default App;
