# ДЗ к лекции База#1

## Посмотреть лекции на канале AlekOS

- https://www.youtube.com/watch?v=k9wK2FThEsk -- как работает процессор

- https://www.youtube.com/watch?v=qewavPO6jcA&t=828s -- как работать с битами

- https://www.youtube.com/watch?v=U0U8Ddx4TgE&t=292s -- как работают числа с плавающей точкой

- https://www.youtube.com/watch?v=BIYiuy8WWiU -- как работают отрицательные числа

- https://www.youtube.com/watch?v=kG_ipMygRUc -- системы счисления с нуля

## Написать функцию, которая принимает Uint8Array и позволяет обратиться к биту конкретного элемента

```js
const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
console.log(bitGetter.get(0, 1)); // 1
console.log(bitGetter.get(1, 1)); // 0
```

## Расширить функцию из прошлого задания возможностью изменять значение конкретного бита

```js
const bitAccessor = createBitAccessor(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
console.log(bitAccessor.set(0, 1, 0)); //
console.log(bitAccessor.get(0, 1)); // 0
```
