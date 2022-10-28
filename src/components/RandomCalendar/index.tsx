import { RandomCalendarContainer } from "./style";
import HeatMap from "react-calendar-heatmap";
import { subYears, isBefore, isSameDay, addDays } from "date-fns";

type HeatMapValue = { date: Date; count: number };

export function RandomCalendar(props: any) {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <RandomCalendarContainer>
      <div className="wrapper">
        <HeatMap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatMapValues(startDate, endDate)}
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

/* gerando commits aleatorios para HeatMap*/
const generateHeatMapValues = (startDate: Date, endDate: Date) => {
  const values: HeatMapValue[] = [];
  let currentDate = startDate;

  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.floor(Math.random() * 4);
    values.push({ date: currentDate, count: count });
    currentDate = addDays(currentDate, 1);
  }
  return values;
};

