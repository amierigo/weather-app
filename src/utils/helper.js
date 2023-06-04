export const getCurrentDate = (dt) => {
  const formattedDate = new Date(dt * 1000);

  const yyyy = formattedDate.getFullYear();
  let mm = formattedDate.getMonth() + 1; // Months start at 0!
  let dd = formattedDate.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;
  
  if (formattedToday) return formattedToday;
  return dt;
};
