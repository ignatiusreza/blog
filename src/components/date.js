const months = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'Mei',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
}

const ArticleDate = ({ date }) => {
  const [year, month, day] = date.split('-')

  return (
    <time
      dateTime={date}
      className="block font-mono whitespace-nowrap leading-none"
    >
      {/* The day is the only baseline-aligned box on this line, so the date
          block reports the digits' baseline to the flex row and lines up with
          the title. The month rides inside the day span to centre on the
          digits' own metrics instead of a fixed pixel nudge. */}
      <span className="font-bold text-3xl md:text-4xl">
        {day}
        <span className="inline-block align-middle rotate-90 -ml-1 text-sm font-normal md:text-base">
          {months[month]}
        </span>
      </span>
      <span className="block text-sm md:text-base ml-px">{year}</span>
    </time>
  )
}

export default ArticleDate
