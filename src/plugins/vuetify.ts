/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { generateThemeColors } from "./theme";
import { VBtn } from "vuetify/lib/components/index.mjs";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        themes: {
            light: {
                colors: generateThemeColors("#00ffff", false),
            },
            dark: {
                colors: generateThemeColors("#00ffff", true),
            },
        },
        variations: false,
    },
    blueprint: md3,
    aliases: {
        FAB: VBtn,
    },
    defaults: {
        VTextField: {
            variant: "outlined",
            density: "comfortable",
        },
        VSelect: {
            variant: "outlined",
            density: "comfortable",
        },
        FAB: {
            width: "56px",
            height: "56px",
            minWidth: 0,
            rounded: "lger",
        }
    },
});
