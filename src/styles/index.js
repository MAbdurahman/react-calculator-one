import styles from 'styled-components';

export const Container = styles.div`
   position: relative;
   width: 400px;
   height: 600px;
   margin: 2em auto;
   display: grid;
   grid-template-columns: repeat(4, 100px);
   grid-template-rows: minmax(120px auto) repeat(5, 100px);
   justify-content: center;
   align-content: center;
   background-color: #808080;
   border-radius: 10px;
   // border: 1px solid #333;
   box-shadow: 2px 2px 10px #333;
   cursor: pointer;

`;

export const Screen = styles.div`
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 20%;
   padding: 10px;
   grid-column: 1 / -1;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   text-align: right;
   word-wrap: break-word;
   word-break: break-all;
   background-color: rgba(58, 58, 58, 1);
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   cursor: text;
`;
