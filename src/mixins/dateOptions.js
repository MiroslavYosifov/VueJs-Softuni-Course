export default {
    // props: {
    //   date: {
    //       type: String,
    //       required: true,
    //   }
    // },
    methods: {
      dateFormatted(date) {
        const convertedDate = new Date(Number(date));
  
        const year = convertedDate.getFullYear();
        const month = convertedDate.getMonth();
        const day = convertedDate.getDate();
        const hours = convertedDate.getHours();
        const minutes = convertedDate.getMinutes();
  
        const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}`;
  
        return formattedDate;
      }
    }
};