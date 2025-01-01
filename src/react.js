import { REACT_ELEMENT } from "./utils";

function createElement(type, properties, ...children) {
  const {
    key = null,
    ref = null,
    __self,
    __source,
    ...rest
  } = properties || {};

  return {
    $$typeof: REACT_ELEMENT,
    type,
    key,
    ref,
    props: { children, ...rest },
    _owner: null,
  };
}

const React = {
  createElement,
};

export default React;
