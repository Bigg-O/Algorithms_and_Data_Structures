// attempt 6/27/2022
function mergeRanges(scheduleArr){
  scheduleArr = scheduleArr.sort((a,b) => a.startTime - b.startTime)

  for (let i = 0; i < scheduleArr.length - 1; i++){
    if (scheduleArr[i].endTime >= scheduleArr[i+1].startTime) {
      if (scheduleArr[i].endTime <= scheduleArr[i+1].endTime) {
        scheduleArr[i].endTime = scheduleArr[i+1].endTime
        }
      scheduleArr.splice(i+1, 1)
    }
  }
  
  return scheduleArr
}

// Attempt 2/15/2021
function mergeRanges(scheduleArr) {
  const sortedSchedules = scheduleArr.sort(a.startTime - b.startTime)
  console.log(sortedSchedules)

  const result = [scheduleArr[0]]

  // for (let i = 1; i < scheduleArr.length; i++) {
  //   const current = scheduleArr[i]
  //   if (current.startTime < result)
  // }
}




































// // Indestructive Solution
// function mergeRanges(meetings) {
//   const sortedMeetings = [...meetings.sort((a, b) => a.startTime - b.startTime)]

//   let i = 0
//   while (i < sortedMeetings.length - 1) {
//     // current End >= next Start
//     if (sortedMeetings[i].endTime >= sortedMeetings[i + 1].startTime) {
//       // current End < next End
//       if (sortedMeetings[i].endTime < sortedMeetings[i + 1].endTime) {
//         sortedMeetings[i].endTime = sortedMeetings[i + 1].endTime
//       }
//       sortedMeetings.splice(i + 1, 1)
//     } else {
//       i++
//     }
//   }

//   return meetings;
// }

// const meetings = [{ startTime: 0, endTime: 1 },
// { startTime: 3, endTime: 5 },
// { startTime: 4, endTime: 8 },
// { startTime: 10, endTime: 12 },
// { startTime: 9, endTime: 10 }]

// console.log("meetings:", meetings)
// console.log("OUTPUT:", mergeRanges(meetings))

// // InterviewCake Solution
// function mergeRanges(meetings) {

//   // Create a deep copy of the meetings array
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
//   const meetingsCopy = JSON.parse(JSON.stringify(meetings));

//   // Sort by start time
//   const sortedMeetings = meetingsCopy.sort((a, b) => {
//     return a.startTime - b.startTime;
//   });

//   // Initialize mergedMeetings with the earliest meeting
//   const mergedMeetings = [sortedMeetings[0]];

//   for (let i = 1; i < sortedMeetings.length; i++) {
//     const currentMeeting    = sortedMeetings[i];
//     const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

//     // If the current meeting overlaps with the last merged meeting, use the
//     // later end time of the two
//     if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
//       lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
//     } else {

//       // Add the current meeting since it doesn't overlap
//       mergedMeetings.push(currentMeeting);
//     }
//   }

//   return mergedMeetings;
// }