import React from "react";

interface Props {
  children: string;
}

function Alert({ children }: Props) {
  return <div className="alert alert-danger">{children}</div>;
}

export default Alert;
