import React, { useState } from 'react';

interface BasePropsType {
  data: number;
  onClick: () => void;
  onReset: () => void;
}

export const withWrapper =
  (Component: (props: BasePropsType) => JSX.Element) => () => {
    const [data, setData] = useState(1);
    const onClick = () => {
      setData((data) => data + 1);
    };
    const onReset = () => {
      setData((data) => 1);
    };

    const baseProps = {
      data,
      onClick,
      onReset,
    };

    return <Component {...baseProps} />;
  };

export const Base = (props: BasePropsType) => {
  return (
    <div>
      <p>data: {props.data}</p>
      <div>
        <button onClick={props.onClick}>증가</button>
        <button onClick={props.onReset}>초기화</button>
      </div>
    </div>
  );
};
