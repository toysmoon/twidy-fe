export default function getDisplayDate(data: string) {
  const month = data.substr(4, 2);
  const date = data.substr(6, 2);

  return `${monthsMap[month]} ${date}`;
}

const monthsMap: Record<string, string> = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'July',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dev',
};
