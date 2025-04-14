import isEmail from 'validator/es/lib/isEmail';
import { computed } from 'vue';
const emit = defineEmits();
const props = withDefaults(defineProps(), {
    type: 'text',
});
const rule = computed(() => {
    switch (props.type) {
        case 'email':
            return emailRule;
        case 'number':
            return requiredRule;
        case 'checkbox':
            return undefined;
        case 'text':
            return requiredRule;
        case 'password':
            return requiredRule;
        default:
            return requiredRule;
    }
});
const requiredRule = [(value) => !!(value === null || value === void 0 ? void 0 : value.trim()) || 'Required'];
const emailRule = [(value) => (!!value && isEmail(value)) || 'Format is incorrect'];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    type: 'text',
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex flex-col gap-[8px] min-w-0 w-full" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(Object.assign({ class: "w-fit" }));
(__VLS_ctx.label);
const __VLS_0 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ 'onInput': {} }, { type: (__VLS_ctx.type), variant: "outlined", rules: ([...__VLS_ctx.rule]) })));
const __VLS_2 = __VLS_1(Object.assign({ 'onInput': {} }, { type: (__VLS_ctx.type), variant: "outlined", rules: ([...__VLS_ctx.rule]) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onInput: ((e) => __VLS_ctx.emit('update:modelValue', e.target.value))
};
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[8px]']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-fit']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            emit: emit,
            rule: rule,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
