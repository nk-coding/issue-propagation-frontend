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
});
