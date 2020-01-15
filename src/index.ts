import { Switch } from "./Switch";
import { ISwitch } from "./ISwitch";

export * from "./ISwitch";
export * from "./Switch";
export * from "./Unpack";
export * from "./TPredicateFunction";

/**
 * Pointer interface for lifting value provided as an argument to Switch.
 */
export default function<T, K extends []>(x: T): ISwitch<T, K> {
  return Switch.for<T, K>(x);
}
