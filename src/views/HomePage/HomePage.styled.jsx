import styled from '@emotion/styled';

export const PageHeading = styled.h1`
   text-align: center;
   font-size: 36px;
`;

export const List = styled.h2`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
    padding-inline-start: 0px;

    list-style: none;
`;

export const ItemList = styled.li`
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
    transform: scale(1.03);
    box-shadow: 0 8px 43px #0e3b80;;
  }
`;

export const Img = styled.img`
    display: block;
    width: 100%;
    border-radius: 5px;
`;

export const Title = styled.h3`
   text-align: center;
   margin-bottom: 4px;   
   font-weight: 700;
   font-size: 18px;
   letter-spacing: 0.06em; 
`;