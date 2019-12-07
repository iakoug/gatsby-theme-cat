import Styled from 'styled-components'

export const Wrapper = Styled.section`
    width: 80%;
    max-width: 1200px;
    margin: 48px auto;
    margin-top: 140px;

    @media only screen and (max-width: 400px) {
        margin-top: 100px;
    }
`

export const List = Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    margin: 0 -24px;
`
