import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
    shape: {
      control: { type: "select" },
      options: ["default", "circle", "round"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "attention"],
    },
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

const AllTemplate = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
    <h2>Primary</h2>
    <div class="flex flex-row space-x-4">
      <div>
        <h3>Contained</h3>
        <Button v-bind="args.primary.contained.enabled.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.primary.contained.enabled.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.primary.contained.enabled.small">
          Button
        </Button>
        <br>

        <Button v-bind="args.primary.contained.disabled.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.primary.contained.disabled.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.primary.contained.disabled.small">
          Button
        </Button>
      </div>
      <br>

      <div>
        <h3>Outlined</h3>
        <Button v-bind="args.primary.outlined.enabled.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.primary.outlined.enabled.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.primary.outlined.enabled.small">
          Button
        </Button>
        <br>

        <Button v-bind="args.primary.outlined.disabled.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.primary.outlined.disabled.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.primary.outlined.disabled.small">
          Button
        </Button>
      </div>
      <br>

      <div>
        <h3>Text</h3>
        <Button v-bind="args.primary.text.enabled.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.primary.text.enabled.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.primary.text.enabled.small">
          Button
        </Button>
        <br>

        <Button v-bind="args.primary.text.disabled.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.primary.text.disabled.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.primary.text.disabled.small">
          Button
        </Button>
      </div>
    </div>
    <br>

    <h2>Attention</h2>
    <div class="flex flex-row space-x-4">
      <div>
        <h3>Text</h3>
        <Button v-bind="args.attention.contained.enabled.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.attention.contained.enabled.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.attention.contained.enabled.small">
          Button
        </Button>
        <br>

        <Button v-bind="args.attention.contained.disabled.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.attention.contained.disabled.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.attention.contained.disabled.small">
          Button
        </Button>
      </div>
      <br>

      <div>
        <h3>Outlined</h3>
        <Button v-bind="args.attention.outlined.enabled.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.attention.outlined.enabled.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.attention.outlined.enabled.small">
          Button
        </Button>
        <br>

        <Button v-bind="args.attention.outlined.disabled.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.attention.outlined.disabled.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.attention.outlined.disabled.small">
          Button
        </Button>
      </div>
      <br>

      <div>
        <h3>Text</h3>
        <Button v-bind="args.attention.text.enabled.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.attention.text.enabled.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.attention.text.enabled.small">
          Button
        </Button>
        <br>

        <Button v-bind="args.attention.text.disabled.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.attention.text.disabled.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.attention.text.disabled.small">
          Button
        </Button>
      </div>
    </div>
  `,
});
export const All = AllTemplate.bind({});
All.args = {
  primary: {
    contained: {
      enabled: {
        large: {
          size: "large",
        },
        default: {
          color: "primary",
        },
        small: {
          size: "small",
        },
      },
      disabled: {
        large: {
          size: "large",
          disabled: true,
        },
        default: {
          color: "primary",
          disabled: true,
        },
        small: {
          size: "small",
          disabled: true,
        },
      },
    },
    outlined: {
      enabled: {
        large: {
          size: "large",
          variant: "outlined",
        },
        default: {
          color: "primary",
          variant: "outlined",
        },
        small: {
          size: "small",
          variant: "outlined",
        },
      },
      disabled: {
        large: {
          size: "large",
          variant: "outlined",
          disabled: true,
        },
        default: {
          color: "primary",
          variant: "outlined",
          disabled: true,
        },
        small: {
          size: "small",
          variant: "outlined",
          disabled: true,
        },
      },
    },
    text: {
      enabled: {
        large: {
          size: "large",
          variant: "text",
        },
        default: {
          color: "primary",
          variant: "text",
        },
        small: {
          size: "small",
          variant: "text",
        },
      },
      disabled: {
        large: {
          size: "large",
          variant: "text",
          disabled: true,
        },
        default: {
          color: "primary",
          variant: "text",
          disabled: true,
        },
        small: {
          size: "small",
          variant: "text",
          disabled: true,
        },
      },
    },
  },
  attention: {
    contained: {
      enabled: {
        large: {
          size: "large",
          color: "attention",
        },
        default: {
          color: "attention",
        },
        small: {
          size: "small",
          color: "attention",
        },
      },
      disabled: {
        large: {
          size: "large",
          color: "attention",
          disabled: true,
        },
        default: {
          color: "attention",
          disabled: true,
        },
        small: {
          size: "small",
          color: "attention",
          disabled: true,
        },
      },
    },
    outlined: {
      enabled: {
        large: {
          size: "large",
          variant: "outlined",
          color: "attention",
        },
        default: {
          color: "attention",
          variant: "outlined",
        },
        small: {
          size: "small",
          variant: "outlined",
          color: "attention",
        },
      },
      disabled: {
        large: {
          size: "large",
          variant: "outlined",
          color: "attention",
          disabled: true,
        },
        default: {
          color: "attention",
          variant: "outlined",
          disabled: true,
        },
        small: {
          size: "small",
          variant: "outlined",
          color: "attention",
          disabled: true,
        },
      },
    },
    text: {
      enabled: {
        large: {
          size: "large",
          color: "attention",
          variant: "text",
        },
        default: {
          color: "attention",
          variant: "text",
        },
        small: {
          size: "small",
          color: "attention",
          variant: "text",
        },
      },
      disabled: {
        large: {
          size: "large",
          color: "attention",
          variant: "text",
          disabled: true,
        },
        default: {
          color: "attention",
          variant: "text",
          disabled: true,
        },
        small: {
          size: "small",
          color: "attention",
          variant: "text",
          disabled: true,
        },
      },
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
    <Button v-bind="args">
      Button
    </Button>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Attention = Template.bind({});
Attention.args = {
  color: "attention",
};

const TemplateWithIconLeft = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
    <Button v-bind="args">
      <template #left>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </template>
      コールを作成
    </Button>
  `,
});

export const IconLeft = TemplateWithIconLeft.bind({});
IconLeft.args = {
  color: "primary",
};

const TemplateWithIconRight = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
    <Button v-bind="args">
    Button
    <template #right>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </template>
    </Button>
  `,
});

export const IconRight = TemplateWithIconRight.bind({});
IconRight.args = {
  color: "attention",
};

export const Round = TemplateWithIconLeft.bind({});
Round.args = {
  shape: "round",
};
