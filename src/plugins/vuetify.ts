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
                colors: generateThemeColors("#2196f3", false),
                variables: {
                    ...themeIndependentVariables
                }
            },
            dark: {
                colors: generateThemeColors("#2196f3", true),
                variables: {
                    ...themeIndependentVariables
                }
            }
        },
        variations: false
    },
    blueprint: md3,
    aliases: {
        FAB: VBtn,
        SmallFAB: VBtn,
        IconButton: VBtn
    },
    defaults: {
        VTextField: {
            variant: "outlined",
            density: "comfortable",
            color: "primary"
        },
        VTextarea: {
            variant: "outlined",
            density: "comfortable",
            color: "primary"
        },
        VSelect: {
            variant: "outlined",
            density: "comfortable"
        },
        VAutocomplete: {
            variant: "outlined",
            density: "comfortable"
        },
        VTooltip: {
            openDelay: 250
        },
        FAB: {
            width: "56px",
            height: "56px",
            minWidth: 0,
            rounded: "lger"
        },
        SmallFAB: {
            width: "40px",
            height: "40px",
            minWidth: 0,
            rounded: "lg"
        },
        IconButton: {
            icon: true,
            variant: "text",
            color: "tertiary",
            density: "comfortable"
        },
        VChip: {
            rounded: "pill"
        }
    }
});
