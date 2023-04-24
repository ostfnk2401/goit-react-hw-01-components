import styled from '@emotion/styled'

export const FriendCard = styled.li`
    padding: 8px 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.2);
    min-width: 200px;
    max-width: 200px;

    display: flex;
    align-items: center;
    gap: 15px;
`
export const Status = styled.span`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    
    background-color: ${props =>{
        switch (props.prop) {
            case true:
                return `#98D8AA`;
            default:
                return `#FF6D60`;
                }}};
`

export const Name = styled.p`
    font-size: 20px;
    font-weight: 500;
`

