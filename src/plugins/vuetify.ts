import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { generateThemeColors } from "./theme";
import { VBtn } from "vuetify/lib/components/index.mjs";

const themeIndependentVariables = {
    "hover-opacity": 0.08
};

export default createVuetify({
    theme: {
        themes: {
            light: {
                colors: generateThemeColors("#00ffff", false),
                variables: {
                    ...themeIndependentVariables
                }
            },
            dark: {
                colors: generateThemeColors("#00ffff", true),
                variables: {
                    ...themeIndependentVariables
                }
            }
        },
        variations: false
    },
    blueprint: md3,
    aliases: {
        FAB: VBtn
    },
    defaults: {
        VTextField: {
            variant: "outlined",
            density: "comfortable"
        },
        VSelect: {
            variant: "outlined",
            density: "comfortable"
        },
        FAB: {
            width: "56px",
            height: "56px",
            minWidth: 0,
            rounded: "lger"
        }
    }
});
