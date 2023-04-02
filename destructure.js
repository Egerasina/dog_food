const obj = {
  a: 10,
  b: {
    aa: [
      0,
      {
        aaa: 'hello',
      },
      1,
    ],
    bb: {
      bbb: 99,
    },
  },
}

const { a, b: { aa: [, { aaa: myTemp }, third = -1], bb } } = obj

console.log('>>>>>>>>>>>>', {
  a, myTemp, bb, third,
})
