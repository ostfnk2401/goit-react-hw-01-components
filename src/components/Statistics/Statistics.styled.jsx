import styled from '@emotion/styled'

export const StatisticsSection = styled.section`
padding: 40px 0 0;
 background-color: white;
 border-radius: 5px;
 box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.2);
 min-width: 240px;
 max-width: 530px;
 margin: 20px;
` 

export const StatisticsList = styled.ul`
display: flex;
list-style: none;
padding: 0;
margin:16px 0 0;
`

export const StatisticsBox = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 30px;
  background-color: ${props => {
    switch (props.prop) {
      case ".pdf":
        return "#871DE5";
      case ".docx":
        return "#1DA9E5";
      case ".mp3":
        return "#C10B42";
      case ".psd":
        return "#0BA99F";
      default:
        return "#FFEBEB";
    }
  }};
`;



export const StatisticsLabel = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #F4F4F4;
`

export const StatisticsPercent = styled.span`
    font-size: 24px;
    font-weight: 600;
    color: #F4F4F4;
`