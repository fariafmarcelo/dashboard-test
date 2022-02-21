import styled from 'styled-components';

/*
    AS --> Aside
    MH --> MainHeader
    CT --> Content
*/

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    grid-template-areas:
    'AS MH'
    'AS CT';

    height: 100vh;
    min-height: 315px;

    @media only screen and (max-width: 599px) {
        grid-template-columns: 100%;
        grid-template-rows: 70px auto;

        grid-template-areas:
        'MH'
        'CT';
    }
`;