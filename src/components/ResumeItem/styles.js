import styled from "styled-components";

export const container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    width: 30%; 
    
    @media (max-width: 750px) {
        width: 60%;
        

        p {
            font-size: 16px;
        }

        svg {
            display: none;
        }
    }
`;

export const Header = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 10px auto;

    svg { 
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
    
`;

export const Total = styled.span `
    font-size: 30px;
    font-weight: bold;
`

