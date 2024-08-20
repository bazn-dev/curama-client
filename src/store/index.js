import { createStore, createLogger } from "vuex";
import adminModules from "@/store/modules/admin/modules";
import adminClasses from "@/store/modules/admin/classes";
import adminSkills from "@/store/modules/admin/skills";
import { createSocketPlugin } from "@/services/socket";

export default createStore({
  modules: {
    adminModules,
    adminClasses,
    adminSkills,
  },

  plugins:
    process.env.VUE_APP_ENV !== "production"
      ? [createLogger(), createSocketPlugin()]
      : [],
});
