import styled, { css } from "styled-components";

const size = "80px";

const activeStyles = css`
  background: #262526;

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: 50%;
    background: linear-gradient(45deg, #21fce2, #0b8fe0);
  }
`;

const StyledWrapper = styled.span`
  display: block;
  position: relative;
  width: ${size};
  height: ${size};
  padding: 5px;
  border-radius: 50%;

  ${(p) => p.isActive && activeStyles};
`;

const sharedStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #21fce2;
`;

const StyledImage = styled.img`
  ${sharedStyles};
  object-fit: cover;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  ${sharedStyles};
`;

const StyledBadge = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  top: -6px;
  right: -2px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 4px solid #262526;
  background: #21fc6b;
`;

const Wrapper = ({ src, name, isActive, hasBadge, ...rest }) => {
  return (
    <StyledWrapper isActive={isActive}>
      {hasBadge && <StyledBadge />}
      {src ? (
        <StyledImage alt={name} src={src} {...rest} />
      ) : (
        <StyledSpan {...rest} isActive={isActive}>
          {name}
        </StyledSpan>
      )}
    </StyledWrapper>
  );
};

export default Wrapper;
