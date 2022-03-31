import styled from 'styled-components';

export const Main = styled.div`
background-color: bisque;
display: flex;
flex-direction: column;
`;

export const Body = styled.div`
background-color: aqua;
display: flex;
flex-direction: column;
`;

export const NavBar = styled.div`
background-color: black;
height: 5rem;
min-width: 100%;
`;

export const AutoResImg = styled.img`
max-height: 100%;
max-width: 100%;
object-fit: contain;
`;

export const DivCol = styled.div`
display: flex;
flex-direction: column;
max-width: 40%;
border-right: solid;
margin-right: 1rem;
padding-top: 1rem;
`;

export const DivColDocs = styled.div`
display: flex;
flex-direction: column;
padding-top: 1rem;
`;

export const DivRow = styled.div`
display: flex;
flex-direction: row;
`;
