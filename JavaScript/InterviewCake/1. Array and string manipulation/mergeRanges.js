function mergeRanges(meetings) {
  meetings = meetings.sort((a, b) => a.startTime - b.startTime)

  let i = 0
  while (i < meetings.length - 1) {
    // current End >= next Start
    if (meetings[i].endTime >= meetings[i + 1].startTime) {
      // current End < next End
      if (meetings[i].endTime < meetings[i + 1].endTime) {
        meetings[i].endTime = meetings[i + 1].endTime
      }
      meetings.splice(i + 1, 1)
    } else {
      i++
    }
  }

  return meetings;
}

const meetings = [{ startTime: 0, endTime: 1 },
{ startTime: 3, endTime: 5 },
{ startTime: 4, endTime: 8 },
{ startTime: 10, endTime: 12 },
{ startTime: 9, endTime: 10 }]

console.log("meetings:", meetings)
console.log("OUTPUT:", mergeRanges(meetings))