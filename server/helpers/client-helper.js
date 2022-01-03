export const generateId = () => {
   let cId = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
         .toString(16)
         .substring(1);
   };
   return cId() + cId();
};
