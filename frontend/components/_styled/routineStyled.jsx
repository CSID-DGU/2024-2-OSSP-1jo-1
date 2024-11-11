import styled from "styled-components";

export const RoutineContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RoutineContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Line = styled.hr`
    width:345px;
    height:1px;
    background: #94A3B8;
    margin-top: 25px;
`;

//routineIng
export const RoutineIngPage = styled.div`
    width: 390px;
    height: 844px;
    background: #F1F5F9;
    display:flex;
    gap:93px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
export const RoutineIngContainer = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    gap:20vh;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`;

//routineFinish
export const RoutineFinishPage = styled(RoutineIngPage)`
    background:#fff;
    gap:21px;
    display:flex;
    width:100%;
`;
export const RoutineFinishContentContainer= styled.div`
    width: 346px;
    display:flex;
    flex-direction:column;
    gap: 30px;
`;
export const Date = styled.div`
    color: #0F172A;
    font-size: 24px;
    font-weight: 600;
    line-height: 132%; /* 31.68px */
    letter-spacing: -0.48px;
`;
