export const formatDate = (date: string): string => {
    const dateObj = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  
    return Intl.DateTimeFormat("es-ES", options).format(dateObj);
  };
  