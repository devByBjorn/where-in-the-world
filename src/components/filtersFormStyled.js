import styled from 'styled-components'

export const FlexForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
  padding-top: ${({ theme }) => theme.padding.standardPadding};
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

export const FormInput = styled.input`
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.elementBg};
  border: transparent;
  border-radius: 2px;
  color: ${({ theme }) => theme.text};
  max-width: 90vw;
  padding: ${({ theme }) => theme.padding.largePadding};
  -webkit-text-fill-color: ${({ theme }) => theme.text};
  opacity: 1;
  width: 50rem;

  &:focus {
    color: ${({ theme }) => theme.text};
    outline: none;
  }
`

export const FormSelectContainer = styled.div`
  position:relative;
`
export const FormSelect = styled.div`
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.elementBg};
  border: transparent;
  border-radius: 2px;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.largePadding};
  width: 17rem;

  &:hover {
    cursor:pointer;
  }

  @media (max-width: 720px) {
    margin-top: 2rem;
  }
`
export const FormOptionsWrap = styled.div`
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.elementBg};
  color: ${({ theme }) => theme.text};
  padding: ${({ theme }) => theme.padding.standardPadding};
  position: absolute;
  left: 0;
  top: 5.5rem;
  width: 17rem;
  z-index: 999;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 720px) {
    top: 7rem;
  }
`

export const FormOptionItem = styled.span`
  display: block;
  padding: ${({ theme }) => theme.padding.smallPadding};

  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
`