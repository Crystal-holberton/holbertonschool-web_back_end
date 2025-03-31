export default function createInt8TypedArray(length, position, value) {
  if (value < -128 || value > 127) {
    throw new RangeError('Value out of range');
  }
  if (position < 0 || position >= length) {
    throw new RangeError('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
