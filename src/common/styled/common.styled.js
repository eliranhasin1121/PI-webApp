import styled from  'styled-components';

export const TeamMemberWrapper = styled.div`
display:flex;
padding:20px 0px;
`

export const TeamMemberImageWrapper = styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
`

export const TeamMemberImage = styled.div`
background-image:url(${({memberImg}) => memberImg});
height:383px;
width:400px;
border-radius:200px;
background-size:cover;
`
