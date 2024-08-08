module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-v-text-v-html-on-component": "off",
    "vue/no-v-for-template-key": "off",
    "vue/no-v-model-argument": "off",
    "vue/no-v-html": "off",
    "vue/no-reserved-component-names": "off",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
};
