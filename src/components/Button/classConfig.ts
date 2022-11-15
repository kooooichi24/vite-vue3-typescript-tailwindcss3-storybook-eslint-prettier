const buttonConfig = {
  size: {
    small: "text-sm px-3 py-1.5",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-2.5",
  },
  primary: {
    contained: {
      base: "bg-primary text-textColor-contrast",
      border: "border-none rounded",
      hover: "enabled:hover:bg-primary-light enabled:focus:bg-primary-dark",
    },
    outlined: {
      base: "bg-transparent text-primary",
      border:
        "border border-solid rounded enabled:border-primary disabeld:border-secondary-pale",
      hover: "enabled:hover:bg-primary-thin enabled:focus:bg-primary-pale",
    },
    text: {
      base: "bg-transparent text-primary",
      border: "border-none rounded",
      hover: "enabled:hover:bg-primary-thin enabled:focus:bg-primary-pale",
    },
  },
  attention: {
    contained: {
      base: "bg-attention text-textColor-contrast",
      border: "border-none rounded",
      hover: "enabled:hover:bg-attention-light enabled:focus:bg-attention-dark",
    },
    outlined: {
      base: "bg-transparent text-attention",
      border:
        "border border-solid rounded enabled:border-attention disabeld:border-secondary-pale",
      hover: "enabled:hover:bg-attention-thin enabled:focus:bg-attention-pale",
    },
    text: {
      base: "bg-transparent text-attention",
      border: "border-none rounded",
      hover: "enabled:hover:bg-attention-thin enabled:focus:bg-attention-pale",
    },
  },
  disabled:
    "cursor-not-allowed bg-secondary-pale disabled:text-textColor-disabled",
  font: "font-semibold",
};

export default buttonConfig;
