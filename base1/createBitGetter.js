class CreateBitGetter {
  constructor(arr) {
    this.arr = arr;
  }

  get(item, bit) {
    const uint = this.arr[item].toString(2);
    return +uint[uint.length - 1 - bit];
  }
}

const bitGetter = new CreateBitGetter(new Uint8Array([0b1100, 0b1001]));

class CreateBitAccessor {
  constructor(arr) {
    this.arr = arr;
  }

  get(item, bit) {
    console.log(this.arr);
    const uint = this.arr[item].toString(2);
    return +uint[uint.length - 1 - bit];
  }

  set(item, bit, value) {
    if (value === 0) {
      this.arr[item] = this.arr[item] ^ (1 << bit);
    } else {
      this.arr[item] = this.arr[item] | (1 << bit);
    }
    // this.arr[item] = this.arr[item] >> 1;
  }
}

const bitAccessor = new CreateBitAccessor(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
console.log(bitAccessor.set(0, 1, 0)); //
console.log(bitAccessor.get(0, 1)); // 0
