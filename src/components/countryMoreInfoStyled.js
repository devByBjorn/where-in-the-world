import styled from 'styled-components'

export const MoreInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  max-height: 120rem; 
  max-width: 90vw;
  padding: 2rem 0;
  width: 140rem;

  @media (max-width: 1020px) {
    flex-direction: column;
    max-width: 95vw;
  }
`
export const MoreInfoItem = styled.div`
  flex: 1;
  max-width: 65rem;
`

export const FlagImg = styled.img`
  height: auto;
  width: 100%;
  max-width: 90vw;
`

export const FactsSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  margin-left: 5rem;

  @media (max-width: 1020px) {
    margin-left: 0;
  }
`

export const FactsContainer = styled.div`
  display:flex;
  justify-content: space-between;
`
export const FactsContent = styled.div`
  width: 80%;
`

export const FactsHeading = styled.h3`
  font-size: ${({ theme }) => theme.typogrophy.xlTypo};
  padding-bottom: ${({ theme }) => theme.padding.xlPadding};

  @media (max-width: 1020px) {
    padding-top: ${({ theme }) => theme.padding.xxlPadding};
  }
`
export const FactListsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const List = styled.ul`
  list-style-type: none;
  
  @media (max-width: 1020px) {
    padding-bottom: ${({ theme }) => theme.padding.xxlPadding};
  }
`

export const ListItem = styled.li`
  padding-bottom: ${({ theme }) => theme.padding.smallPadding};
`

export const BoldSpan = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.largeWeight};
  padding-right: ${({ theme }) => theme.padding.smallPadding};
`

export const BordersBoldSpan = styled(BoldSpan)`
@media (max-width: 1020px) {
  display: block;
  padding-bottom: ${({ theme }) => theme.padding.standardPadding};
  margin: 0 2px 2px 2px;
}
`