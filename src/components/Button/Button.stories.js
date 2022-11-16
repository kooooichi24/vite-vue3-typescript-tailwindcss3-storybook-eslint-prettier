import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
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
        <Button v-bind="args.primary.contained.enable.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.primary.contained.enable.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.primary.contained.enable.small">
          Button
        </Button>
        <br>

        <Button v-bind="args.primary.contained.disable.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.primary.contained.disable.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.primary.contained.disable.small">
          Button
        </Button>
      </div>
      <br>

      <div>
        <h3>Outlined</h3>
        <Button v-bind="args.primary.outlined.enable.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.primary.outlined.enable.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.primary.outlined.enable.small">
          Button
        </Button>
        <br>

        <Button v-bind="args.primary.outlined.disable.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.primary.outlined.disable.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.primary.outlined.disable.small">
          Button
        </Button>
      </div>
      <br>

      <div>
        <h3>Text</h3>
        <Button v-bind="args.primary.text.enable.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.primary.text.enable.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.primary.text.enable.small">
          Button
        </Button>
        <br>

        <Button v-bind="args.primary.text.disable.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.primary.text.disable.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.primary.text.disable.small">
          Button
        </Button>
      </div>
    </div>
    <br>

    <h2>Attention</h2>
    <div class="flex flex-row space-x-4">
      <div>
        <h3>Text</h3>
        <Button v-bind="args.attention.contained.enable.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.attention.contained.enable.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.attention.contained.enable.small">
          Button
        </Button>
        <br>

        <Button v-bind="args.attention.contained.disable.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.attention.contained.disable.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.attention.contained.disable.small">
          Button
        </Button>
      </div>
      <br>

      <div>
        <h3>Outlined</h3>
        <Button v-bind="args.attention.outlined.enable.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.attention.outlined.enable.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.attention.outlined.enable.small">
          Button
        </Button>
        <br>

        <Button v-bind="args.attention.outlined.disable.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.attention.outlined.disable.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.attention.outlined.disable.small">
          Button
        </Button>
      </div>
      <br>

      <div>
        <h3>Text</h3>
        <Button v-bind="args.attention.text.enable.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.attention.text.enable.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.attention.text.enable.small">
          Button
        </Button>
        <br>

        <Button v-bind="args.attention.text.disable.large">
          Button
        </Button>    
        <br>
        <Button v-bind="args.attention.text.disable.default">
          Button
        </Button>
        <br>
        <Button v-bind="args.attention.text.disable.small">
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
      enable: {
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
      disable: {
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
      enable: {
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
      disable: {
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
      enable: {
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
      disable: {
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
      enable: {
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
      disable: {
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
      enable: {
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
      disable: {
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
      enable: {
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
      disable: {
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
      Button
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
