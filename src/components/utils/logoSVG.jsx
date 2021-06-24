import * as React from "react";

function LogoSVG(props) {
  return (
    <svg
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55.86 80.89"
      width="10vh"
      {...props}
    >
      <defs>
        <clipPath id="prefix__a" transform="translate(-39.9 -47.59)">
          <path fill="none" d="M33.34 42.98h40.52v58.7H33.34z" />
        </clipPath>
        <clipPath id="prefix__b" transform="translate(-39.9 -47.59)">
          <path fill="none" d="M27.84 101.76h46.02v35.03H27.84z" />
        </clipPath>
      </defs>
      <title>{"logo CG"}</title>
      <g clipPath="url(#prefix__a)">
        <ellipse
          cx={23.52}
          cy={23.43}
          rx={19.28}
          ry={19.43}
          fill="none"
          stroke="#1515bc"
          strokeMiterlimit={10}
          strokeWidth={8}
        />
      </g>
      <g clipPath="url(#prefix__b)">
        <ellipse
          cx={27.93}
          cy={54.17}
          rx={23.43}
          ry={22.22}
          fill="none"
          stroke="#1515bc"
          strokeMiterlimit={10}
          strokeWidth={9}
        />
      </g>
    </svg>
  );
}

export default LogoSVG;
