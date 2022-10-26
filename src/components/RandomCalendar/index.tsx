import { RandomCalendarContainer } from "./style";
import HeatMap from "react-calendar-heatmap";
import { clamp, subYears } from "date-fns";

type HeatMapValue = { date: Date; count: number };

export function RandomCalendar(props: any) {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  const values: HeatMapValue[] = [];
  /*imutabilidade??*/
  values.push({ date: new Date(), count: 4 });

  return (
    <RandomCalendarContainer>
      <div className="wrapper">
        <HeatMap
          startDate={startDate}
          endDate={endDate}
          values={values}
          gutterSize={3.5}
          classForValue={(item: HeatMapValue) => {
            let clampedCount = 0;
            if (item !== null) {
              /* validacao para aceitar apenas a faixa de valores entre 0 e 4*/
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
            }
            return `scale-${clampedCount}`;
          }}
          showWeekdayLabels
        />
      </div>
      <span>Random Calendar [JustForFun]</span>
    </RandomCalendarContainer>
  );
}
