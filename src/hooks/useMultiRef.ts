import { useRef } from "react";

const useMultiRef = <ElementType>(fields: string[]) => {
  const ref = useRef<(ElementType | null)[]>([]);
  ref.current.fill(null, 0, fields.length);

  const getRef = (key: string)=>
    fields.includes(key)
      ? { idx: fields.indexOf(key), ref: ref.current[fields.indexOf(key)] }
      : {idx:-1, ref:null};
  return { ref, getRef };
};
export default useMultiRef;
