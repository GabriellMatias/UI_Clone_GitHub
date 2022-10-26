import styled from 'styled-components';

export const RandomCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;

  padding: 1.6rem 2rem 0 1rem;
  border: 1px solid var(--border);
  border-radius: 6px;
  .wrapper{
    .scale-0{
      fill:var(--calendar-scale-0)
    }
    
    .scale-1{
      fill:var(--calendar-scale-1)
    }
    
    .scale-2{
      fill:var(--calendar-scale-2)
    }
    .scale-3{
      fill:var(--calendar-scale-3)
    }
    
    .scale-4{
      fill:var(--calendar-scale-4)
    }
    width: 893px;

    span{
      font-size: 1.1rem;
      color: var(--link);
      margin-top: -2.5rem;
      margin-left: 0.7rem;
      padding-bottom: 1.6rem;
      align-self: flex-start;
    }
  }
`;
