import styles from 'styled-components';


export const Container = styles.div`
   width: 400px;
   height: 600px;
   margin: 2em auto;
   display: grid;
   grid-template-columns: repeat(4, 100px);
   grid-template-rows: minmax(120px auto) repeat(5, 100px);
   justify-content: center;
   align-content: center;
   border-radius: 10px;
   // border: 1px solid #333;
   box-shadow: 2px 2px 10px #333;

`