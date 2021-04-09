import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px 60px;
    background: #fad390;
    
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justtify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const Link = styled.a`
    color: #e58e26;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover{
        color: #0c2461;
        transition: 200ms ease-in;
    }
`;


export const Title = styled.p`
    font-size: 24px;
    color: #0a3d62;
    margin-bottom: 40px;
    font-weight: bold;
`;

