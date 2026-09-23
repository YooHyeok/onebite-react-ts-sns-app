export function formatTimeAgo(time : Date | string | number): string {
  const start = new Date(time);
  const end = new Date();

  const secondDiff = Math.floor((end.getTime() - start.getTime()) / 1000); // 초 단위 시간 차
  if (secondDiff < 60) return "방금 전" // 시간 차 60초 미만

  const minuteDiff = Math.floor(secondDiff / 60)
  if (minuteDiff < 60) return `${minuteDiff}분 전` // 시간 차 60분 미만
  
  const hourDiff = Math.floor(minuteDiff / 60)
  if (hourDiff < 24) return `${hourDiff}시간 전` // 시간 차 60분 미만

  const dayDiff = Math.floor(hourDiff / 24);
  return `${dayDiff}일 전`;
}