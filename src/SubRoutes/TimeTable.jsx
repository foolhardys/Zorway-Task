const TimeTable = () => {

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const classHours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  // const timetableData = [
  //   { day: 'Monday', time: '9:00 AM', subject: 'Math' },
  //   { day: 'Monday', time: '10:00 AM', subject: 'SOM' },
  //   { day: 'Monday', time: '11:00 AM', subject: 'Thermodynamics' },
  //   { day: 'Monday', time: '12:00 AM', subject: 'LUNCH' },
  //   { day: 'Monday', time: '01:00 PM', subject: 'LUNCH' },
  //   { day: 'Monday', time: '02:00 PM', subject: 'Heat Engine Lab' },
  //   { day: 'Monday', time: '03:00 PM', subject: 'Heat Engine Lab' },
  // ];

  const timetableData = [
    { day: 'Monday', time: '9:00 AM', subject: 'Math' },
    { day: 'Monday', time: '10:00 AM', subject: 'SOM' },
    { day: 'Monday', time: '11:00 AM', subject: 'Thermodynamics' },
    { day: 'Monday', time: '12:00 PM', subject: 'LUNCH' },
    { day: 'Monday', time: '1:00 PM', subject: 'LUNCH' },
    { day: 'Monday', time: '2:00 PM', subject: 'Heat Engine Lab' },
    { day: 'Monday', time: '3:00 PM', subject: 'Heat Engine Lab' },
    { day: 'Tuesday', time: '9:00 AM', subject: 'Math' },
    { day: 'Tuesday', time: '10:00 AM', subject: 'Material Science' },
    { day: 'Tuesday', time: '11:00 AM', subject: 'SOM' },
    { day: 'Tuesday', time: '12:00 PM', subject: 'Thermodynamics' },
    { day: 'Tuesday', time: '1:00 PM', subject: 'LUNCH' },
    { day: 'Tuesday', time: '2:00 PM', subject: 'Humanities' },
    { day: 'Tuesday', time: '3:00 PM', subject: 'Material Science Lab' },
    { day: 'Tuesday', time: '4:00 PM', subject: 'Material Science Lab' },
    { day: 'Wednesday', time: '9:00 AM', subject: 'Math' },
    { day: 'Wednesday', time: '10:00 AM', subject: 'Math' },
    { day: 'Wednesday', time: '11:00 AM', subject: 'Material Science' },
    { day: 'Wednesday', time: '12:00 PM', subject: 'Thermodynamics' },
    { day: 'Thursday', time: '10:00 AM', subject: 'Humanities' },
    { day: 'Thursday', time: '11:00 AM', subject: 'SOM Lab' },
    { day: 'Thursday', time: '12:00 PM', subject: 'SOM Lab' },
    { day: 'Friday', time: '9:00 AM', subject: 'SOM' },
    { day: 'Friday', time: '10:00 AM', subject: 'Material Science' },
    { day: 'Friday', time: '11:00 AM', subject: 'Humanities' },
    { day: 'Friday', time: '12:00 PM', subject: 'LUNCH' },
    { day: 'Friday', time: '1:00 PM', subject: 'LUNCH' },
    { day: 'Friday', time: '2:00 PM', subject: 'Engg. Drawing' },
    { day: 'Friday', time: '3:00 PM', subject: 'Engg. Drawing' },
    { day: 'Friday', time: '4:00 PM', subject: 'Engg. Drawing' },
  ];



  return (
    <div className="flex justify-center items-center flex-col gap-10 h-screen min-h-[30vh] p-4 w-full">
      <h2 className="text-center text-3xl font-[800]">College Timetable</h2>
      <table className="border-2 border-black lg:w-[1280px] md:w-[600px] w-[400px]">
        <thead>
          <tr>
            <th className="text-center text-xl font-[400] min-h-[40px] border-2 border-black">Time</th>
            {daysOfWeek.map(day => (
              <th key={day} className="text-center text-xl font-[600] h-[40px] border-2 border-black">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {classHours.map(hour => (
            <tr key={hour}>
              <td className="text-center min-h-[30px] border-2 border-black">{hour}</td>
              {daysOfWeek.map(day => (
                <td key={`${day}-${hour}`} className="text-center h-[30px] border-2 border-black">
                  {timetableData.find(item => item.day === day && item.time === hour)?.subject || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TimeTable