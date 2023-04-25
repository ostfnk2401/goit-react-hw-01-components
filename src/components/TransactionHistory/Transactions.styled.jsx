import styled from '@emotion/styled'

export const Table = styled.table`
margin: 20px;
border-radius: 5px;
box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.2);
`

export const Thead = styled.thead`
    background-color: #61FFF8;
`

export const Theader = styled.th`
border: 1px solid #F0F0F0;
padding: 12px 16px;
min-width: 120px;
font-size: 21px;
`

export const Tbody = styled.tbody`
`
export const Trow = styled.tr`
background-color: ${props =>{
    switch (props.prop) {
        case "deposit":
            return `#C7E9B0`
        case "payment":
            return `#F3F3F3`
            case "withdrawal":
                return `#C3C3C3`
        default: 
        return `#FEFEFE`
    }}};

`



export const TableEL = styled.td`
padding: 10px 12px;
text-align: center;
min-width: 120px;
border: 1px solid #F0F0F0;

font-size: 18px;
`