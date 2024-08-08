import { createStore, createLogger } from "vuex";
import adminClasses from "@/store/modules/admin/classes";
import adminSkills from "@/store/modules/admin/skills";
import { createSocketPlugin } from "@/services/socket";

export default createStore({
  modules: {
    adminClasses,
    adminSkills,
  },

  plugins:
    process.env.VUE_APP_ENV !== "production"
      ? [createLogger(), createSocketPlugin()]
      : [],
});
