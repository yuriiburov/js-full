/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

/**
 * @return {undefined}
 */
export const printing = () => {
  console.log(1);

  setTimeout(() => {
    console.log(5);
  }, 1000);

  console.log(2);

  setTimeout(() => {
    console.log(4);
  }, 0);

  setTimeout(() => {
    console.log(6);
  }, 2000);

  console.log(3);
};

printing();
